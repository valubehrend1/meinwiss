import { styled } from '@mui/system';
import { Box, Accordion } from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


//FAQ STYLES

export const FAQContainer = styled(Box)(({ theme }) => ({
  padding: '7.5rem 6.5rem',
  [theme.breakpoints.down('sm')]: {
    padding: '5rem 1.5rem',
  },
}));

// QUESTION DROPDOWN STYLES

export const QuestionAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  boxShadow: 'none',
  '& .MuiAccordionSummary-root': {
    minHeight: 56,
    alignItems: 'center',
    '& .MuiAccordionSummary-content': {
      margin: 0,
    }
  },
  '& .Mui-expanded': {
    minHeight: 56,
  },
  padding: '32px 48px',
  borderRadius: '20px',
  '&.MuiPaper-root': {
    borderRadius: '20px',
  },
  '&.Mui-expanded': {
    background: 'linear-gradient(180deg, #FFF 0%, #FBFDEE 14%, #E2F389 100%)',
  },
}));

export const CloseOutlinedIconStyled = styled(CloseOutlinedIcon)(({ theme }) => ({
  fontSize: '35px',
  color: theme.palette.primary.main,
}));

export const AddCircleIconStyled = styled(AddCircleIcon)(() => ({
  fontSize: '35px',
  color: '#FFF',
}));
