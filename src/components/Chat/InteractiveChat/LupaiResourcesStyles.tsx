import { Accordion, AccordionSummary, AccordionDetails, Button, Box } from '@mui/material';
import { purple, gold, orange } from '../../../theme';
import { styled } from '@mui/system';

export const LupaiResourcesContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  width: '100%'
});

// Styled components for accordions
export const ResourceAccordion = styled(Accordion)<{ source: string }>(({ source }) => ({
  flex: '1 1 auto',
  marginBottom: '10px',
  width: 'calc(50% - 8px)',  // Adjustment so that two accordions fit in a row, adjusting the margin
  backgroundColor: source === 'Laws' ? purple :
    source === 'Administrative processes' ? gold :
      orange,  // Apply purple for 'Laws', gold for 'Administrative processes', and orange for others
  color: '#FFF',
  borderRadius: '12px !important',
  '&:hover': {
    backgroundColor: source === 'Laws' ? purple :
      source === 'Administrative processes' ? gold :
        orange,  // Maintains the same color on mouse hover
  },
  '&.Mui-expanded': {
    borderRadius: '12px',
    flex: '1 1 100%',  // Expands to take up the entire row when expanded
    color: '#FFF',
    width: '100%',
  },
  '&:before': {
    borderRadius: '12px',
    display: 'none',  // Removes the default dividing line of MUI accordions
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

export const ResourcesUrl = styled('a')({
  backgroundColor: '#FFF',
  color: 'black',
  boxShadow: 'none',
  textTransform: 'capitalize',
  padding: '0.75rem 1.5rem',
  marginTop: '2rem',
  borderRadius: '40px',
  textDecoration: 'none',
});

export const GeneralContainer = styled(Box)(() => ({
  gap: '15px',
  display: 'flex',
  flexDirection: 'column'
}));
