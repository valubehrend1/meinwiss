import { styled } from '@mui/system';

import { Box, Button, Typography } from '@mui/material';
import theme from '../../../../theme';

//TitleAndButton.tsx

export const FindAnswerSectionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: theme.spacing(4),
  paddingTop: theme.spacing(7.5),
  paddingBottom: theme.spacing(7.5),
  paddingLeft: theme.spacing(13),
  [theme.breakpoints.down('lg')]: {
    gap: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    padding: '5rem 3rem 2rem 3rem !important',
  },
}));

export const FirstTitleLabel = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  lineHeight: '2.25rem',
  textDecoration: 'underline',
  color: theme.palette.primary.main,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
    lineHeight: '2.25rem',
  },
}));

export const FirstTitle = styled(Typography)(({ theme }) => ({
  fontSize: '5rem',
  lineHeight: '5.75rem',
  color: theme.palette.primary.main,
  [theme.breakpoints.down('lg')]: {
    fontSize: '3.8rem',
    lineHeight: '4.75rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.25rem',
    lineHeight: '2.625rem',
  },
}));

export const SecondTitle = styled(Typography)(({ theme }) => ({
  fontSize: '5.625rem',
  fontFamily: 'MartinaPlantijn',
  color: theme.palette.primary.main,
  [theme.breakpoints.down('lg')]: {
    fontSize: '4rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));

export const CopyText = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  lineHeight: '1.9rem',
  color: theme.palette.primary.main,
  [theme.breakpoints.down('lg')]: {
    fontSize: '1.125rem',
    lineHeight: '1.625rem',

  },
}));

export const TryButton = styled(Button)(({ theme }) => ({
  padding: '1.5rem 2.25rem',
  textTransform: 'none',
  boxShadow: 'none',
  [theme.breakpoints.down('lg')]: {
    padding: '1.125rem 1.5rem',
  },
}));

// ImageGrid.tsx


export const GridImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  height: '100%',
  gap: theme.spacing(2),
}));

export const FirstColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '240px',
  height: '470px',
  '& img': {
    borderRadius: theme.spacing(2),
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

export const SecondColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '284px',
  height: '50%',
  '& img': {
    borderRadius: theme.spacing(2),
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

export const ThirdColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: '-1',
  justifyContent: 'center',
  width: '269px',
  height: '280px',
  '& img': {
    borderRadius: theme.spacing(2),
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));


//FindAnswerSection.tsx

export const SectionMainContainer = styled(Box)({
  maxHeight: '900px',
  overflowY: 'hidden',
  gap: theme.spacing(1),
  height: '700px'
});