import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

export const GerInTouchMainContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(0deg, #E2F389 0%, #FFFF 100%)',
  gap: '16px',
  height: '480px'
});

export const ContactButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'capitalize',
  padding: ' 18px 24px'
});
