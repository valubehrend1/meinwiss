import { styled } from '@mui/system';

import theme from '../../../theme';
import { Grid, Typography } from '@mui/material';

export const FirstColumn = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '5rem',
  [theme.breakpoints.down('lg')]: {
    gap: '2rem',
    marginBottom: '3rem',
  },
}));

export const IntroContainer = styled(Grid)(() => ({
  display: 'flex',
  textAlign: 'left',
  padding: '7.5rem 6.5rem',
  [theme.breakpoints.down('sm')]: {
    padding: '5rem 1.5rem',
  },
  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(1)
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const IntroText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.125rem',
    lineHeight: '1.625rem',
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    fontSize: '3rem',
    lineHeight: '4.75rem',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '2.25rem',
    lineHeight: '2.625rem',
  },
}));

export const Image = styled('img')(() => ({
  width: '50%',
  [theme.breakpoints.up(1200)]: {
    width: '40%',
  },
  [theme.breakpoints.between(700, 1000)]: {
    width: '30%',
  },
}));
