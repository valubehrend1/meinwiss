import { Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import { purple, gold, orange } from '../../../theme';
import { styled } from '@mui/system';

// Styled components for accordions
export const ResourceAccordion = styled(Accordion)<{ source: string }>(({ source }) => ({
  flex: '1 1 auto',
  marginBottom: '50px',
  width: 'calc(50% - 8px)',  // Ajuste para que dos acordeones quepan en una fila, ajustando el margen
  backgroundColor: source === 'Laws' ? purple :
    source === 'Administrative processes' ? gold :
      orange,  // Aplica purple si es 'Laws', gold si es 'Administrative processes', y orange para otros
  color: '#FFF',
  '&:hover': {
    backgroundColor: source === 'Laws' ? purple :
      source === 'Administrative processes' ? gold :
        orange,  // Mantiene el mismo color al pasar el mouse
  },
  '&.Mui-expanded': {
    flex: '1 1 100%',  // Se expande para tomar toda la fila cuando está expandido
    color: '#FFF'
  },
  '&:before': {
    display: 'none',  // Elimina la línea divisoria de los acordeones por defecto de MUI
  },
}));


export const ResourceAccordionSummary = styled(AccordionSummary)({
  justifyContent: 'space-between',
  alignItems: 'center',
  textTransform: 'capitalize',
});

export const ResourceAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export const PaginationButton = styled(Button)({
  minWidth: '40px',
});