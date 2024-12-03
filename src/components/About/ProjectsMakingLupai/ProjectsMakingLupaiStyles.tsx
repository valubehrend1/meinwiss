import { styled } from '@mui/system';
import { Box, Typography, Button } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import theme from '../../../theme';

export const LogosTextContainer = styled(Box)({
  display: 'flex',
  gap: '0.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '1rem'
});

export const LogosText = styled(Typography)({
  color: '#FFF',
  fontSize: '1rem'
});

export const StarsIcon = styled(AutoAwesomeIcon)({
  color: '#FFFFFF',
  fontSize: '1rem'
});

export const ProjectsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  textAlign: 'left',
  padding: '7.5rem 6.5rem',
  [theme.breakpoints.down('sm')]: {
    padding: '5rem 1.5rem',
  },
}));

export const ProjectsMakingLupaiTitle = styled(Typography)({
  textAlign: 'center',
  color: '#FFF'
});

export const ProjectCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  backgroundColor: '#fff',
  padding: '4rem',
  borderRadius: '1rem',
  height: '100%'
}));


export const LohanaLogo = styled('img')({
  width: '50%',
  marginBottom: theme.spacing(3)
});

export const AurekaLogoImage = styled('img')({
  width: '60%',
  marginBottom: theme.spacing(3)
});

export const CardContent = styled(Box)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column'
});

export const LearnMoreButtonContainer = styled(Button)({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-start',
  height: '100%',
  '&:hover': {
    backgroundColor: 'transparent',
    cursor: 'inherit'
  },
});

export const LearnMoreButton = styled(Button)({
  display: 'flex',
  gap: '12px',
  textTransform: 'capitalize',
  padding: '1.5rem 2.25rem',
  fontWeight: 'bold',
  boxShadow: 'none'
});