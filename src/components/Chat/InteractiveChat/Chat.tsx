import React, { useState, useEffect } from 'react';


import { useDispatch, useSelector } from 'react-redux';
import {
  selectMessages,
  setAssistantResponse,
  selectError,
  addUserMessage,
  selectUserContext,
  resetSearch,
  setError,
  selectAccumulatedOrganizations
} from '../../../config/features/ChatSlice';

import { Box, IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfExport from '../PdfExport';

import SharedSearchBar from '../../shared/SharedSearchBar/SharedSearchBar';
import LupaiAnswer from './LupaiAnswer';
import UserQuestion from './UserQuestion';
import AddNewQuestion from './AddNewQuestion';
import LupaiOrganizations from './LupaiOrganizations';
import { ChatContainer, MessagesContainer } from './ChatStyles';


import { useWebSocket } from '../../../context/useWebSocket';
import NewQuestionModal from './NewQuestionModal';
import ErrorModal from '../ErrorModal/ErrorModal';

import { useNavigate } from 'react-router-dom';
import theme from '../../../theme';

const Chat: React.FC = () => {
  const messages = useSelector(selectMessages);
  const organizations = useSelector(selectAccumulatedOrganizations);
  const userContext = useSelector(selectUserContext);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [hasSentMessage, setHasSentMessage] = useState(false);

  const [socketDown, setSocketDown] = useState(false);

  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
  const responseError = useSelector(selectError)

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleCloseError = () => {
    dispatch(setError(null));
    setSocketDown(false);
  }

  const onCancelPdfModal = () => {
    setIsOpen(false);
    navigate('/ask-lupai');
    window.location.reload();
  };

  const dispatch = useDispatch();
  const { ws } = useWebSocket();

  if (ws) {
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      dispatch(setAssistantResponse(message));
      setIsWaitingForResponse(false);
    };
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sendMessage = (messageContent: string) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      const messageToSend = {
        user_query: messageContent,
        user_context: {
          origin_country: userContext.originCountry,
          time_in_germany: userContext.timeInGermany,
          age: userContext.age,
        },
        location: userContext.location,
      };
      ws.send(JSON.stringify(messageToSend));
      setIsWaitingForResponse(true);
    } else {
      console.error('WebSocket no está abierto para enviar mensajes.');
      setSocketDown(true);
    }
  };

  // Hook useEffect para manejar el envío de mensajes(si hay modificaciones en las variables dependientes)

  useEffect(() => {
    // Comprobación para asegurarse de que hay mensajes, el último mensaje es del usuario, y no se ha enviado aún.
    if (
      messages.length > 0 && // Verifica que hay al menos un mensaje.
      messages[messages.length - 1].sender === 'user' && // Verifica que el último mensaje fue enviado por el usuario.
      // (message.lenght - 1 = 0 (indice array) y el sender es el usuario
      !hasSentMessage  // Verifica que el último mensaje aún no ha sido enviado.
    ) {
      const lastUserMessage = messages[messages.length - 1].content; // Obtiene el contenido del último mensaje del usuario.

      // Envía el mensaje con el último contenido del usuario y los datos del contexto.
      sendMessage(lastUserMessage); // Envía el último mensaje del usuario usando la función sendMessage.
      setHasSentMessage(true); // Marca que se ha enviado el mensaje
    } else if (messages.length === 0) { // Verifica si la lista de mensajes está vacía.
      setHasSentMessage(false); // Reinicia el estado si no hay nuevos  mensajes
    }
  }, [messages, sendMessage, hasSentMessage]);

  const handleNewQuestion = () => {
    // Vaciar campos de búsqueda y otros estados relacionados
    dispatch(resetSearch()); // Suponiendo que resetSearch() vacía todos los campos y estados de búsqueda relevante

    // Preparar y enviar mensaje al backend
    if (ws && ws.readyState === WebSocket.OPEN) {
      const newSearchMessage = {
        type: 'new_search', // Asegúrate de que el backend maneje este tipo de mensaje
      };
      ws.send(JSON.stringify(newSearchMessage));
    }

    // Redirigir a /ask-lupai
    navigate('/ask-lupai');
  };

  useEffect(() => {
    if (ws && ws.readyState === WebSocket.CLOSED) {
      setSocketDown(true);
    }
  }
    , [setSocketDown, ws]);

  return (
    <>
      <ChatContainer>
        {isOpen && (
          <NewQuestionModal
            isOpen={isOpen}
            onNewQuestion={handleNewQuestion}
            onCancel={onCancelPdfModal}
            setIsOpen={setIsOpen}
          />
        )}
        {responseError && <ErrorModal
          isOpen={true}
          onClose={handleCloseError}
          content="There was an error loading the answer, please try again." />}
        {socketDown && <ErrorModal
          isOpen={true}
          setisOpen={setIsOpen}
          onClose={handleCloseError}
          content="The connection to the server has been lost. Please try again." />}
        {messages.map((message, index) => (
          <MessagesContainer key={index} sender={message.sender}>
            {message.sender === 'user' && (
              <UserQuestion content={message.content} />
            )}
            {message.sender === 'assistant' && (
              <LupaiAnswer
                content={message.content || ''}
                sources={message.sources || []}
                isClarification={message.isClarification}
                isFinalResponse={message.isFinalResponse}
                status={message.status} />
            )}
          </MessagesContainer>
        ))}
        {isWaitingForResponse && (
          <MessagesContainer sender="assistant">
            <LupaiAnswer content="" sources={[]} isFinalResponse={false} />
          </MessagesContainer>
        )}
        {organizations.length !== 0 && <LupaiOrganizations organizations={organizations} />}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
          <SharedSearchBar
            mainSearchPage={false}
            sendMessage={(messageContent) => {
              dispatch(addUserMessage(messageContent));
              sendMessage(messageContent);
            }}
          />
          <PDFDownloadLink
            document={<PdfExport messages={messages} />}
            fileName="conversation.pdf"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <IconButton>
              <DownloadIcon sx={{ color: theme.palette.primary.main }} />
            </IconButton>
          </PDFDownloadLink>
        </Box>
        <AddNewQuestion handleOpen={handleOpen} />
      </ChatContainer>
    </>
  );
};

export default Chat;
