import { styled } from '@mui/system';

import { Box, Button, Card, Grid, Typography } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import theme, { gold, orange, purple } from '../../../../theme';


export const SectionMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
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

export const NewSearchButton = styled(Button)(() => ({
  marginTop: '2rem',
  padding: '1.75rem 3.5rem',
  textTransform: 'none',
  borderRadius: '80px',
}));

export const StyledGridItem = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px'
}));

export const CenteredCardContent = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

// Sytles HowLupaiWorksOne

export const MainGridContaineSectionOne = styled(Grid)(() => ({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    width: '100%',
    gap: '40px'
  },
}));


// Styles HowLupaiWorksFive

export const ReferenceCardOrange = styled(Box)(() => ({
  display: 'flex',
  backgroundColor: orange,
  padding: '10px 24px',
  color: '#FFF',
  borderRadius: '30px'
}));

export const ReferenceCardPurple = styled(Box)(() => ({
  display: 'flex',
  backgroundColor: purple,
  padding: '10px 24px',
  color: '#FFF',
  borderRadius: '30px'
}));

export const ReferenceCardGold = styled(Box)(() => ({
  display: 'flex',
  backgroundColor: gold,
  padding: '10px 24px',
  color: '#FFF',
  borderRadius: '30px'
}));


// Styles HowLupaiWorksSix

export const StyledGridContainer = styled(Grid)(() => ({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '120px',
  marginBottom: '120px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    gap: '40px',
    marginBottom: '0px',
  },
}));

export const StyledInnerCard = styled(Box)(() => ({
  display: 'flex',
  backgroundColor: theme.palette.secondary.main,
  borderRadius: '30px',
  width: '100%',
  padding: '40px',
  color: theme.palette.primary.main,
  flexDirection: 'column',
  gap: '20px'
}));

// Styles HowLupaiWorksSeven


export const StyledGreenCardSectionSeven = styled(Box)(() => ({
  display: 'flex',
  backgroundColor: theme.palette.secondary.main,
  borderRadius: '30px',
  width: '100%',
  padding: '40px',
  color: theme.palette.primary.main
}));

export const StyledGreenCardContent = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%'
}));

export const StyledGradientCardSectionSeven = styled(Box)(() => ({
  display: 'flex',
  background: 'linear-gradient(180deg, #FFF 0%, #FBFDEE 14%, #E2F389 100%)',
  borderRadius: '30px',
  width: '100%',
  padding: '40px',
  color: theme.palette.primary.main
}));

export const StyledGradientCardContent = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px'
}));