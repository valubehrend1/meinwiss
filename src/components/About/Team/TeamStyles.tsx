import { Box, Grid, Avatar, Typography } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../../theme';

export const SectionContainer = styled(Box)({
  padding: '50px',
  background: 'linear-gradient(180deg, #FFF 0%, #FBFDEE 14%, #E2F389 100%)',
});

export const TeamTextContainer = styled(Box)({
  marginBottom: '20px',
});

export const TeamMemberGrid = styled(Grid)({
  display: 'flex',
  gap: '48px',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

export const TeamImageWrapper = styled(Box)({
  position: 'relative',
  width: '200px',
  height: '200px',
  borderRadius: '15px',
  overflow: 'hidden',
  '&:hover .overlay': {
    opacity: 1,
  },
});

export const StyledAvatar = styled(Avatar)({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Capa negra translúcida
  color: '#FFF',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0, // Oculta por defecto
  transition: 'opacity 0.3s ease-in-out',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  borderRadius: 'inherit',
  textAlign: 'center',
});

export const TeamContactBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const UnderlinedText = styled(Typography)({
  textDecoration: 'underline',
});


export const GridImageContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  gap: '32px',
  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
