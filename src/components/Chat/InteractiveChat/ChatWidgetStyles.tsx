import { styled } from '@mui/system';
import { Box, IconButton } from '@mui/material';

// Contenedor principal del chat cuando se renderiza como widget
export const ChatWidgetContainer = styled(Box)({
    position: 'fixed',
    bottom: 0,
    right: 0,
    width: '100%', // Ocupará todo el ancho disponible en el iframe
    height: '100%', // Ocupará todo el alto disponible en el iframe
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px 10px 0 0',
    overflow: 'hidden',
    boxShadow: '0 -2px 10px rgba(252, 185, 0, 0.2)',
    backgroundColor: '#FFFFFF',
    maxWidth: '500px', // Restaurado a 500px como estaba originalmente
    margin: '0 auto', // Centrar si está en un contenedor más ancho
});

// Cabecera del widget
export const ChatWidgetHeader = styled(Box)({
    padding: '10px 15px',
    backgroundColor: 'rgba(252, 185, 0, 1)',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '10px 10px 0 0',
    minHeight: '50px',
});

// Área de mensajes con scroll
export const ChatWidgetMessages = styled(Box)({
    flex: '1',
    overflowY: 'auto',
    padding: '12px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px', // Reducido de 8px a 4px para disminuir el espacio entre mensajes
    scrollBehavior: 'smooth', // Para hacer el scroll suave
});

// Área de entrada para el widget
export const ChatWidgetInputArea = styled(Box)({
    padding: '12px 16px',
    borderTop: '1px solid rgba(252, 185, 0, 0.3)',
    backgroundColor: '#FFFFFF',
});

// Botón para minimizar/maximizar
export const MinimizeButton = styled(IconButton)({
    color: '#333',
    padding: '4px',
});

// Reutilizamos MessagesContainer pero ajustamos para el widget
export const MessagesContainer = styled(Box)<{ sender: string }>(({ sender }) => ({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '8px',
    alignItems: sender === 'user' ? 'flex-end' : 'flex-start',
    maxWidth: '80%',
    alignSelf: sender === 'user' ? 'flex-end' : 'flex-start',
}));

// Indicador de typing ajustado para el widget
export const TypingDotsContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px 10px',
    borderRadius: '10px',
    backgroundColor: 'rgba(252, 185, 0, 0.1)',
    marginBottom: '8px',
    alignSelf: 'flex-start',
});
