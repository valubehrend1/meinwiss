import { styled } from '@mui/system';

import { Box, Button, Card, Grid, Typography } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import theme, { orange, purple, primary_color_dark } from '../../../../theme';


export const SectionMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.palette.primary.main,
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '7.5rem 6.5rem',
  overflowY: 'hidden',

  [theme.breakpoints.down('sm')]: {
    padding: '5rem 1.5rem',
  },
}));

export const HowItWorksTextContainer = styled(Box)({
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1rem',
});

export const StarsIcon = styled(AutoAwesomeIcon)({
  color: '#ffffff',
  fontSize: '1rem'
});

export const MainCard = styled(Card)({
  padding: '4rem 5.75rem',
  borderRadius: '1.25rem',
  width: '100%',
});

export const SourcesCard = styled(Card)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'center',
  padding: '40px 20px',
  borderRadius: '1.25rem',
  width: '100%',
});

export const LookingForACommunityCard = styled(Card)({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  flexDirection: 'column',
  padding: '40px',
  borderRadius: '1.25rem',
  width: '100%',
});

export const MainCardMobile = styled(Card)({
  padding: '4rem 1.25rem',
  borderRadius: '1.25rem',
  marginBottom: '2rem',
  width: '100%'
});

export const LeftGrid = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const LeftCardText = styled(Typography)({
  color: theme.palette.primary.main,
  lineHeight: '2.2rem',
  fontSize: '1.8rem',
});

export const LeftCardTextOrange = styled(Typography)({
  color: orange,
  lineHeight: '2.2rem',
  fontSize: '1.8rem',
});

export const StyledSearchIcon = styled(SearchIcon)({
  color: theme.palette.primary.main,
  fontSize: '30px'
});

export const OrangeQuestion = styled(Typography)({
  color: orange,
  fontSize: '18px'
});

export const PurpleQuestion = styled(Typography)({
  color: purple,
  fontSize: '18px'
});

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2.7rem',
  textAlign: 'center',
  paddingBottom: '3.5rem',
  color: '#FFFF',
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

export const HowItWorksText = styled(Typography)({
  color: '#ffffff',
  fontSize: '1rem'
});

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
  gap: '2.625rem',
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
