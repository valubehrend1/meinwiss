// src/components/ChatComponent.tsx
import React from 'react';

import { styled } from '@mui/system';
import { Box } from '@mui/material';

import SharedSearchBar from '../../shared/SharedSearchBar/SharedSearchBar';
import LupaiAnswer from './LupaiAnswer';
import UserQuestion from './UserQuestion';
import AddNewQuestion from './AddNewQuestion';

/* interface ChatProps {
  title: string;
  children: React.ReactNode;
}
 */
const ChatContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  paddingRight: '200px',
  paddingLeft: '200px',
  paddingTop: '50px',
  /*   boxShadow: theme.shadows[1], */
  margin: theme.spacing(2),
  marginBottom: '40px',
  borderRadius: theme.shape.borderRadius,
}));


const Chat: React.FC/* <ChatProps> */ = () => {

  return (
    <ChatContainer>
      <Box sx={{ display: 'flex', justifyContent: 'right' }}>
        <LupaiAnswer />
      </Box>
      <UserQuestion />
      <Box sx={{ marginTop: '20px' }}>
        <SharedSearchBar />
      </Box>
      <AddNewQuestion />
    </ChatContainer>
  );
};

export default Chat;
