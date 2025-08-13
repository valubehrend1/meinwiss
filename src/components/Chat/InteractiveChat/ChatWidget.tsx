import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectMessages,
    addUserMessage,
    resetSearch,
    setError,
    finalizeOldAssistantMessages,
    setAssistantResponse,
    selectError
} from '../../../config/features/ChatSlice';

import { Box, Typography, IconButton } from '@mui/material';
import MinimizeIcon from '@mui/icons-material/ExpandMore';
import MaximizeIcon from '@mui/icons-material/ExpandLess';
import DownloadIcon from '@mui/icons-material/Download';
import jsPDF from 'jspdf';

import SharedSearchBar from '../../pages/shared/SharedSearchBar/SharedSearchBar';
import ErrorModal from '../ErrorModal/ErrorModal';
import WidgetUserQuestion from './Widget/WidgetUserQuestion';
import WidgetLupaiAnswer from './Widget/WidgetLupaiAnswer';
import { WidgetMessageContainer } from './Widget/WidgetMessageStyles';
import { ScrollableMessagesContainer } from './ScrollableMessagesContainer';

import { useWebSocket } from '../../../hooks/useWebSocket';
import {
    ChatWidgetContainer,
    ChatWidgetHeader,
    ChatWidgetInputArea,
    MinimizeButton
} from './ChatWidgetStyles';

// Este componente es específico para ser utilizado como widget dentro de un iframe
const ChatWidget: React.FC = () => {
    const messages = useSelector(selectMessages);
    const responseError = useSelector(selectError);

    const dispatch = useDispatch();
    const { ws } = useWebSocket();

    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [socketDown, setSocketDown] = useState(false);
    const [hasSentMessage, setHasSentMessage] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const messagesContainerRef = useRef<HTMLDivElement>(null);

    // Función para hacer scroll hacia abajo
    const scrollToBottom = () => {
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    };

    // Control de estado del widget (minimizado/maximizado)
    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
        // Enviar mensaje al padre para ajustar tamaño si es necesario
        if (window.parent) {
            window.parent.postMessage(
                { type: 'CHAT_WIDGET_TOGGLE', isMinimized: !isMinimized },
                '*'
            );
        }
    };

    // Efecto para comunicación con la ventana padre
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            // Escuchar mensajes del padre
            if (event.data.type === 'PARENT_COMMAND') {
                // Implementar lógica según comandos recibidos
                switch (event.data.command) {
                    case 'minimize':
                        setIsMinimized(true);
                        break;
                    case 'maximize':
                        setIsMinimized(false);
                        break;
                    case 'reset':
                        dispatch(resetSearch());
                        break;
                    default:
                        break;
                }
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [dispatch]);

    // Manejo del envío de mensajes
    const handleSendMessage = (messageContent: string) => {
        if (messageContent.trim() === '' || hasSentMessage) return;

        if (!ws || ws.readyState !== WebSocket.OPEN) {
            setSocketDown(true);
            return;
        }

        dispatch(addUserMessage(messageContent));
        dispatch(finalizeOldAssistantMessages());
        setHasSentMessage(true);

        // Hacer scroll hacia abajo inmediatamente después de enviar un mensaje
        setTimeout(scrollToBottom, 100);

        try {
            // Enviar el mensaje con el mismo formato que usa el componente Chat
            const messageToSend = {
                user_query: messageContent,
                user_context: {
                    origin_country: null,
                    time_in_germany: null,
                    age: null,
                },
                location: 'Berlin',
            };
            ws.send(JSON.stringify(messageToSend));
        } catch (error) {
            console.error('Error sending message:', error);
            const errorMsg = 'Error al enviar mensaje. Por favor, intenta de nuevo.';
            dispatch(setError(errorMsg));
            setIsErrorModalOpen(true);
        }
    };

    // Resetear el estado de envío cuando llegue respuesta del asistente
    useEffect(() => {
        if (messages.length > 0 && messages[messages.length - 1].sender === 'assistant') {
            setHasSentMessage(false);
        }
        // Hacer scroll hacia abajo cada vez que cambie el array de mensajes
        scrollToBottom();
    }, [messages]);

    // Hacer scroll hacia abajo cuando el widget cambie de minimizado a maximizado
    useEffect(() => {
        if (!isMinimized) {
            setTimeout(scrollToBottom, 300); // Pequeño retraso para asegurar que el DOM se ha actualizado
        }
    }, [isMinimized]);

    // Escuchar mensajes del WebSocket
    useEffect(() => {
        if (!ws) return;

        const handleMessage = (event: MessageEvent) => {
            try {
                const data = JSON.parse(event.data);
                console.log('WebSocket message received:', data);
                dispatch(setAssistantResponse(data));
                // Hacer scroll cuando se recibe una respuesta del asistente
                setTimeout(scrollToBottom, 100);
            } catch (error) {
                console.error('Error parsing WebSocket message:', error);
            }
        };

        ws.addEventListener('message', handleMessage);

        return () => {
            ws.removeEventListener('message', handleMessage);
        };
    }, [ws, dispatch]);

    // Manejadores de errores
    const handleErrorModalClose = () => {
        setIsErrorModalOpen(false);
        dispatch(setError(null));
    };

    return (
        <ChatWidgetContainer>
            <ChatWidgetHeader>
                <Typography variant="h6">Asistente</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {messages.length > 0 && (
                        <IconButton
                            size="small"
                            sx={{ color: 'white', mr: 1 }}
                            aria-label="download conversation as PDF"
                            onClick={() => {
                                try {
                                    // Generamos un PDF directamente con jsPDF
                                    const pdf = new jsPDF();
                                    const fecha = new Date().toLocaleDateString('es-ES', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    });

                                    // Configuración de fuentes y colores
                                    pdf.setFont('helvetica', 'bold');
                                    pdf.setFontSize(16);
                                    pdf.setTextColor(0, 48, 30); // Color título

                                    // Añadimos título
                                    pdf.text('Conversación del Asistente', 105, 20, { align: 'center' });

                                    // Fecha
                                    pdf.setFont('helvetica', 'normal');
                                    pdf.setFontSize(10);
                                    pdf.setTextColor(100, 100, 100); // Gris para la fecha
                                    pdf.text(`Exportado el ${fecha}`, 105, 30, { align: 'center' });

                                    // Configuración para el contenido
                                    pdf.setTextColor(0, 0, 0); // Negro para el contenido
                                    pdf.setFontSize(11);

                                    let yPosition = 50; // Posición inicial para empezar a escribir mensajes

                                    // Función para añadir texto con saltos de línea automáticos
                                    const addWrappedText = (text: string, x: number, y: number, maxWidth: number, lineHeight: number): number => {
                                        pdf.text(text, x, y, {
                                            maxWidth,
                                            lineHeightFactor: lineHeight
                                        });
                                        return y + lineHeight; // Actualiza yPosition después de agregar el texto
                                    };

                                    // Añadimos cada mensaje
                                    messages.forEach(message => {
                                        const senderLabel = message.sender === 'user' ? 'Usuario:' : 'Asistente:';
                                        const content = typeof message.content === 'string'
                                            ? message.content
                                            : JSON.stringify(message.content, null, 2);

                                        // Añadimos el remitente
                                        pdf.setFont('helvetica', 'bold');
                                        pdf.text(senderLabel, 20, yPosition);
                                        yPosition += 6;

                                        // Añadimos el contenido del mensaje con wrap automático
                                        pdf.setFont('helvetica', 'normal');
                                        yPosition = addWrappedText(content, 20, yPosition, 170, 6);

                                        // Espacio entre mensajes
                                        yPosition += 10;

                                        // Si nos acercamos al final de la página, añadimos una nueva
                                        if (yPosition > 270) {
                                            pdf.addPage();
                                            yPosition = 20;
                                        }
                                    });

                                    // Guardamos el PDF
                                    pdf.save('conversacion-chat.pdf');

                                } catch (error) {
                                    console.error('Error al generar PDF:', error);
                                    // Fallback: descargar como texto plano
                                    const textContent = messages.map(msg =>
                                        `${msg.sender === 'user' ? 'Usuario' : 'Asistente'}: ${typeof msg.content === 'string' ? msg.content : JSON.stringify(msg.content)
                                        }`
                                    ).join('\n\n');

                                    const textBlob = new Blob([textContent], { type: 'text/plain' });
                                    const textUrl = URL.createObjectURL(textBlob);
                                    const textLink = document.createElement('a');
                                    textLink.href = textUrl;
                                    textLink.download = 'conversacion-chat.txt';
                                    textLink.click();
                                    URL.revokeObjectURL(textUrl);
                                }
                            }}
                        >
                            <DownloadIcon />
                        </IconButton>
                    )}
                    <MinimizeButton onClick={toggleMinimize} aria-label="toggle chat">
                        {isMinimized ? <MaximizeIcon /> : <MinimizeIcon />}
                    </MinimizeButton>
                </Box>
            </ChatWidgetHeader>

            {!isMinimized && (
                <>
                    <ScrollableMessagesContainer ref={messagesContainerRef}>
                        {messages.length === 0 ? (
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                opacity: 0.7
                            }}>
                                <Typography variant="body2">
                                    Haz tu primera pregunta para comenzar
                                </Typography>
                            </Box>
                        ) : (
                            messages.map((message, index) => (
                                <WidgetMessageContainer key={index} sender={message.sender}>
                                    {message.sender === 'user' ? (
                                        <WidgetUserQuestion content={message.content} />
                                    ) : (
                                        <WidgetLupaiAnswer
                                            content={typeof message.content === 'string' ? message.content : JSON.stringify(message.content)}
                                            sources={message.sources || []}
                                            isFinalResponse={message.isFinalResponse || false}
                                            error={message.error}
                                        />
                                    )}
                                </WidgetMessageContainer>
                            ))
                        )}
                    </ScrollableMessagesContainer>

                    <ChatWidgetInputArea>
                        <SharedSearchBar
                            sendMessage={handleSendMessage}
                            disabled={hasSentMessage || socketDown}
                        />
                    </ChatWidgetInputArea>
                </>
            )}

            {/* Modales de error */}
            <ErrorModal
                isOpen={isErrorModalOpen}
                onClose={handleErrorModalClose}
                content={responseError || 'Ocurrió un error inesperado.'}
                setisOpen={setIsErrorModalOpen}
            />
        </ChatWidgetContainer>
    );
};

export default ChatWidget;
