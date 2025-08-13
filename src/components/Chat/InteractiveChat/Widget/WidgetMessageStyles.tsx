import { styled } from '@mui/system';
import { Box, Paper } from '@mui/material';

// Versiones más compactas de los contenedores de mensajes para el widget
export const WidgetUserQuestionContainer = styled(Paper)({
    width: 'auto',
    maxWidth: '90%',
    padding: '8px 12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(252, 185, 0, 1)',
    color: '#333',
    borderRadius: '16px 16px 4px 16px',
    marginBottom: '4px',
    boxShadow: 'none',
    wordWrap: 'break-word'
});

export const WidgetLupaiAnswerContainer = styled(Box)({
    width: 'auto',
    maxWidth: '90%',
    padding: '8px 12px',
    display: 'flex',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(252, 185, 0, 0.1)',
    borderRadius: '16px 16px 16px 4px',
    marginBottom: '4px',
    boxShadow: 'none',
    wordWrap: 'break-word'
});

// Contenedor compacto para los mensajes en el widget
export const WidgetMessageContainer = styled(Box)(({ sender }: { sender: 'user' | 'assistant' }) => ({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '6px',
    alignItems: sender === 'user' ? 'flex-end' : 'flex-start',
}));
