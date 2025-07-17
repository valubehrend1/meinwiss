import { styled } from "@mui/system";

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Box, Typography } from "@mui/material";
import theme, { primary_color_dark } from "../../../../../theme";

export const Container = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '7.5rem 6.5rem',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    padding: ' 5rem 1.5rem',
    gap: '6rem'
  },
});

export const Section = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    alignItems: 'flex-start',
  },
});

export const Logo = styled('img')({
  height: '60px',
  margin: '10px',
  [theme.breakpoints.up('lg')]: {
    height: '80px',
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    height: 'auto',
    width: '70%',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    height: 'auto',
    width: '60%',
  },
});

export const LogosTextContainer = styled(Box)({
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '1rem'
});

export const StarsIcon = styled(AutoAwesomeIcon)({
  color: 'linear-gradient(0deg, #E2F389 0%, #00301E 70%)',
  fontSize: '1rem'
});


export const LogosText = styled(Typography)({
  color: primary_color_dark,
  fontSize: '1rem'
});

export const LogoContainer = styled(Box)({
  display: 'flex',
  gap: '2rem',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    alignItems: 'flex-start',
  },
});
