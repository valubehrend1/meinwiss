import { styled } from '@mui/system';

import { Box } from '@mui/material';

export const ChatContainer = styled(Box)(({ theme }) => ({
  paddingRight: '200px',
  paddingLeft: '200px',
  paddingTop: '50px',
  margin: theme.spacing(2),
  marginBottom: '40px',
  borderRadius: theme.shape.borderRadius,
}));

interface MessageBoxProps {
  sender: string;
}

export const MessagesContainer = styled(Box)<MessageBoxProps>(({ sender }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '16px',
  alignItems: sender === 'user' ? 'flex-end' : 'flex-start',
}));