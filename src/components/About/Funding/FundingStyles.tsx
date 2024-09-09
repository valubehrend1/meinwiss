import { styled } from '@mui/system';
import { Grid, Box } from '@mui/material';


export const FundingContainer = styled(Box)(({ theme }) => ({
  padding: '7.5rem 6.5rem',
  textAlign: 'center',
  gap: '58px',
  [theme.breakpoints.down('sm')]: {
    padding: '5rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
  },
}));

export const FundingGrid = styled(Grid)(({ theme }) => ({
  textAlign: 'center',
  gap: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(8),
  },
}));

export const Logo = styled('img')(() => ({
  width: '70%',
  alignItems: 'center',
}));
