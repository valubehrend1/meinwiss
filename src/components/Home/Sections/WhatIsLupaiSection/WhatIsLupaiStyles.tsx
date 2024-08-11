import { styled } from '@mui/system';

import { Box, Typography, Button, Card } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


export const SectionMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '7.5rem 6.5rem',
  backgroundImage: 'linear-gradient(to bottom, #A0004D, #F1683F)',
  overflowY: 'hidden',
  gap: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    padding: '5rem 1.5rem',
  },
}));

export const WhatIsLupaiTextContainer = styled(Box)({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  marginBottom: '16px',
});

export const StarsIcon = styled(AutoAwesomeIcon)({
  color: '#FFFFFF',
  fontSize: '1rem'
});

export const WhatIsLupaiText = styled(Typography)({
  color: '#FFFFFF',
  fontSize: '1rem'
});

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2.7rem',
  lineHeight: '3.5rem',
  paddingBottom: '3.5rem',
  color: '#FFFFFF',
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

export const TitleSegment = styled('span')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'row',
  },
}));


export const LearnMoreButton = styled(Button)(({ theme }) => ({
  marginTop: '3.5rem',
  padding: '1.75rem 3.5rem',
  textTransform: 'none',
  boxShadow: 'none',
  [theme.breakpoints.down('lg')]: {
    padding: '1.8rem 3rem',
    marginTop: '3rem',
  },
}));

export const CardsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '2.5rem',
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const StyledCard = styled(Card)({
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  padding: '3rem 2rem',
  color: '#FFFFFF'
});

export const CardDescription = styled(Typography)({
  color: '#FFFFFF',
  marginTop: '16px'
});

export const ButtonContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));