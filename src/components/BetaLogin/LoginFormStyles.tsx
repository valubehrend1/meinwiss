import { styled } from '@mui/material/styles';
import { Box, TextField, Button } from '@mui/material';
import theme from '../../theme';

export const LoginContainer = styled(Box)({
  width: '100%',
  maxWidth: '400px',
  margin: 'auto',
  marginTop: '50px',
  marginBottom: '100px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
});

export const StyledTextField = styled(TextField)({
  marginBottom: '16px',
  width: '100%',
});

export const SubmitButton = styled(Button)({
  width: '100%',
  padding: '10px 0',
  color: '#fff',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
});