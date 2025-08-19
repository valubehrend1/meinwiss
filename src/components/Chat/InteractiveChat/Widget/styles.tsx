import { styled } from '@mui/system';
import { Box, Paper, Typography, Link, Accordion, AccordionSummary, AccordionDetails, ListItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LaunchIcon from '@mui/icons-material/Launch';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

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

// Estilos para WidgetLupaiResources
export const ResourcesContainer = styled(Box)({
    marginTop: '12px',
    width: '100%',
});

export const SourcesAccordion = styled(Accordion)({
    boxShadow: 'none',
    '&:before': {
        display: 'none',
    },
    backgroundColor: 'rgba(252,185,0,1)',
    borderRadius: '8px',
    marginBottom: '8px',
});

export const SourcesAccordionSummary = styled(AccordionSummary)({
    padding: '0 12px',
    minHeight: '40px',
    '& .MuiAccordionSummary-content': {
        margin: '8px 0',
    },
});

export const SourcesAccordionDetails = styled(AccordionDetails)({
    padding: '8px 12px 12px 12px',
});

export const SourceItem = styled(ListItem)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '8px 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
    '&:last-child': {
        borderBottom: 'none',
    },
});

export const SourceName = styled(Typography)({
    fontWeight: 600,
    fontSize: '0.85rem',
    color: '#FFFFFF',
    marginBottom: '4px',
});

export const SourceLinkContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    marginTop: '4px',
    width: '100%',
});

export const SourceLink = styled(Link)({
    fontSize: '0.75rem',
    color: '#FFFFFF',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
        textDecoration: 'underline',
        color: '#FFFFFF',
    },
});

export const SourceDate = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.75rem',
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: '4px',
});

// Estilos de SourcesTitle (Typography)
export const SourcesTitle = styled(Typography)({
    fontWeight: 500,
    fontSize: '0.9rem',
    color: '#FFFFFF',
});

// Estilos de SourcesList (List)
export const SourcesList = styled(Box)({
    width: '100%',
    padding: 0,
});

// Estilos para los iconos de fuentes
export const SourceIcon = styled(Box)({
    fontSize: '0.9rem',
    marginRight: '4px',
});

// Estilos para el contenedor de contenido de WidgetLupaiAnswer
export const ContentContainer = styled(Box)({
    width: '100%',
});

// Estilos para el estado de carga en WidgetLupaiAnswer
export const LoadingStatus = styled(Typography)({
    color: '#00785A', // Color primario
    animation: 'pulse 1.5s infinite',
    '@keyframes pulse': {
        '0%': { opacity: 0.5 },
        '50%': { opacity: 1 },
        '100%': { opacity: 0.5 },
    },
});

// Estilos para la lista de fuentes
export const SourcesListContainer = styled(Box)({
    width: '100%',
    padding: 0,
    listStyleType: 'none',
    margin: 0,
});

// Estilos para el expandIcon en SourcesAccordionSummary
export const ExpandIconWhite = styled(ExpandMoreIcon)({
    color: '#FFFFFF',
});

// Estilos para los iconos específicos
export const SourceLinkIconStyled = styled(LaunchIcon)({
    fontSize: 'small',
    marginRight: '4px',
});

export const SourceDateIconStyled = styled(CalendarTodayIcon)({
    fontSize: 'small',
    marginRight: '4px',
});
