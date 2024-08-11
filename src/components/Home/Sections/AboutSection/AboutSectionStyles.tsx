import { styled } from '@mui/system';

import { Box, Typography, Card } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import theme from '../../../../theme';


export const SectionMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '7.5rem 6.5rem',
  overflowY: 'hidden',
  gap: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    padding: '5rem 1.5rem',
  },
}));

export const LupaiFeaturesTextContainer = styled(Box)({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '16px',
});

export const StarsIcon = styled(AutoAwesomeIcon)({
  color: theme.palette.primary.main,
  fontSize: '1rem'
});

export const FeaturesText = styled(Typography)({
  color: theme.palette.primary.main,
  fontSize: '1rem'
});

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2.7rem',
  lineHeight: '3.5rem',
  textAlign: 'center',
  paddingBottom: '3.5rem',
  color: theme.palette.primary.main,
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

export const CardsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '1.5rem',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const StyledCard = styled(Card)({
  width: '100%',
  minHeight: '100%',
  backgroundColor: theme.palette.secondary.main,
  borderRadius: '32px',
  padding: '3rem',
  color: theme.palette.primary.main,
});

export const CardDescription = styled(Typography)({
  color: theme.palette.primary.main,
  marginTop: '16px'
});