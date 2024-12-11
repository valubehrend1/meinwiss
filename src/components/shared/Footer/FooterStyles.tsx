import { Box } from '@mui/material';
import { styled } from '@mui/system';
import theme, { primary_color_dark } from '../../../theme';

export const FooterContainer = styled(Box)({
  backgroundColor: primary_color_dark,
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '5rem',
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  [theme.breakpoints.down('md')]: {
    padding: '5rem 1.5rem',
  },
});

export const SocialMediaContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center'
});
