import { styled } from '@mui/system';

import { Accordion, AccordionSummary } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export const OrganizationsAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: '10px',
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  borderRadius: '12px !important',
  boxShadow: 'none',
  '&.Mui-expanded': {
    borderRadius: '12px',
    color: theme.palette.primary.main,
    width: '100%',
  },
  '&:before': {
    borderRadius: '12px',
    display: 'none',
  },
}));

export const OrganizationsAccordionSummary = styled(AccordionSummary)(() => ({
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export const ForwardIcon = styled(ArrowForwardIcon)(() => ({
  position: 'absolute',
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)'
}));
