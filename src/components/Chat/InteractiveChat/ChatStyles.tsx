import { styled } from '@mui/system';
import ReactMarkdown from 'react-markdown';

import { Box, Paper } from '@mui/material';
import theme from '../../../theme';

export const ChatContainer = styled(Box)(({ theme }) => ({
  paddingRight: '200px',
  paddingLeft: '200px',
  paddingTop: '50px',
  paddingBottom: '100px',
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


//Typing dots

export const TypingDotsContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '40px',
});

export const Dot = styled('div')({
  width: '8px',
  height: '8px',
  margin: '0 4px',
  backgroundColor: '#555',
  borderRadius: '50%',
  animation: 'dot-flash 1.4s infinite',
  '&:nth-of-type(2)': {
    animationDelay: '0.2s',
  },
  '&:nth-of-type(3)': {
    animationDelay: '0.4s',
  },
  '@keyframes dot-flash': {
    '0%, 80%, 100%': {
      opacity: 0,
    },
    '40%': {
      opacity: 1,
    },
  },
});

//LupaiAnswer

export const LupaiAnswerContainer = styled(Paper)({
  width: 'auto',
  display: 'flex',
  alignItems: 'left',
  marginTop: theme.spacing(6),
  gap: theme.spacing(2),
  textTransform: 'none',
  boxShadow: 'none'
});

export const StyledMarkdown = styled(ReactMarkdown)({
  '& p': {
    marginTop: 0,
  },
});