import { styled } from '@mui/system';

import { Box, Button, Typography } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


export const SectionMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.primary.main,
  alignItems: 'center',
  justifyContent: 'center',
  padding: '7.5rem 6.5rem',
  overflowY: 'hidden',
  gap: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    padding: '5rem 1.5rem',
  },
}));

export const HowItWorksTextContainer = styled(Box)({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '16px',
});

export const StarsIcon = styled(AutoAwesomeIcon)({
  color: '#ffffff',
  fontSize: '1rem'
});

export const HowItWorksText = styled(Typography)({
  color: '#ffffff',
  fontSize: '1rem'
});

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2.7rem',
  lineHeight: '3.5rem',
  textAlign: 'center',
  paddingBottom: '3.5rem',
  color: '#ffffff',
  [theme.breakpoints.down('lg')]: {
    fontSize: '2.4rem',
    lineHeight: '3rem',
    paddingBottom: '3rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    lineHeight: '2.5rem',
    paddingBottom: '2.5rem',
  },
}));


export const GradientBorderBox = styled(Box)(() => ({
  padding: '3px 3px',
  borderRadius: '80px',
  backgroundImage: `conic-gradient(
    from 0deg,
    #00301E 0%,
    #E2F389 20%,
    #A98031 40%,
    #F1683F 60%,
    #A0004D 80%,
    #00301E 100%
  )`,
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}));

export const GradientBorderBoxTop = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '42px',
  padding: '32px 40px',
  borderRadius: '80px',
  backgroundColor: '#FFFF',
}));

export const QuestionsTextContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));


export const ButtonContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
}));

export const SearchMoreButton = styled(Button)(() => ({
  marginTop: '2rem',
  padding: '1.75rem 3.5rem',
  textTransform: 'none',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
}));