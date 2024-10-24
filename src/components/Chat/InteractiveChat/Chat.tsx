import React, { useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectMessages, setAssistantResponse, addUserMessage, selectUserContext, resetSearch } from '../../../config/features/ChatSlice';

import { Box } from '@mui/material';

import SharedSearchBar from '../../shared/SharedSearchBar/SharedSearchBar';
import LupaiAnswer from './LupaiAnswer';
import UserQuestion from './UserQuestion';
import AddNewQuestion from './AddNewQuestion';
import { ChatContainer } from './ChatStyles';

import { useWebSocket } from '../../../context/useWebSocket';
import NewQuestionModal from './NewQuestionModal';

import { useNavigate } from 'react-router-dom';

const Chat: React.FC = () => {
  const messages = useSelector(selectMessages);
  const userContext = useSelector(selectUserContext);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };


  const dispatch = useDispatch();
  const { ws } = useWebSocket();
  /* 
    useEffect(() => {
  
    }, []);
   */

  useEffect(() => {
    // Asegurarse de que `ws` esté definido antes de asignar los eventos
    if (ws) {
      ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        dispatch(setAssistantResponse(message));
      };
    }
  }, [dispatch, ws]);

  const sendMessage = useCallback((messageContent: string) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      const messageToSend = {
        user_query: messageContent,
        user_context: {
          origin_country: userContext.originCountry,
          time_in_germany: userContext.timeInGermany,
          age: userContext.age,
        },
        location: userContext.location,
      };
      ws.send(JSON.stringify(messageToSend));
    } else {
      console.error('WebSocket no está abierto para enviar mensajes.');
    }
  }, [ws, userContext]);

  useEffect(() => {
    // Si el último mensaje es del usuario, envía el mensaje de nuevo al servidor.
    if (messages.length > 0 && messages[messages.length - 1].sender === 'user') {
      const lastUserMessage = messages[messages.length - 1].content;

      // Envía el mensaje con el último contenido del usuario y los datos del contexto.
      sendMessage(lastUserMessage);
    }
  }, [messages, sendMessage]);

  console.log(messages);

  const handleNewQuestion = () => {
    // Vaciar campos de búsqueda y otros estados relacionados
    dispatch(resetSearch()); // Suponiendo que resetSearch() vacía todos los campos y estados de búsqueda relevante

    // Preparar y enviar mensaje al backend
    if (ws && ws.readyState === WebSocket.OPEN) {
      const newSearchMessage = {
        type: 'new_search', // Asegúrate de que el backend maneje este tipo de mensaje
      };
      ws.send(JSON.stringify(newSearchMessage));
    }

    // Redirigir a /ask-lupai
    navigate('/ask-lupai');
  };


  return (
    <>
      <ChatContainer>
        {isOpen && <NewQuestionModal isOpen={isOpen} onCancel={() => setIsOpen(false)} onNewQuestion={handleNewQuestion} />}
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: message.sender === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: '16px',
            }}
          >
            {message.sender === 'user' ? (
              <UserQuestion content={message.content} />
            ) : (
              <LupaiAnswer content={message.content} />
            )}
          </Box>
        ))}
        <Box sx={{ marginTop: '20px' }}>
          <SharedSearchBar
            mainSearchPage={false}
            sendMessage={(messageContent) => {
              dispatch(addUserMessage(messageContent));
              sendMessage(messageContent);
            }}
          />
        </Box>
        <AddNewQuestion handleOpen={handleOpen} />
      </ChatContainer>
    </>
  );
};

export default Chat;
