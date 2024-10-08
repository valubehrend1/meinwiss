// src/components/ChatComponent.tsx
import React, { useEffect, useRef } from 'react';

import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { selectMessages, setAssistantResponse, addUserMessage, selectUserContext } from '../../../config/features/ChatSlice';

import { Box } from '@mui/material';

import SharedSearchBar from '../../shared/SharedSearchBar/SharedSearchBar';
import LupaiAnswer from './LupaiAnswer';
import UserQuestion from './UserQuestion';
import AddNewQuestion from './AddNewQuestion';
import { ChatContainer } from './ChatStyles';


const Chat: React.FC = () => {
  const messages = useSelector(selectMessages);
  const userContext = useSelector(selectUserContext)

  const wsRef = useRef<WebSocket | null>(null);

  console.log(messages, 'messages')

  const dispatch = useDispatch();

  useEffect(() => {
    // Crear la conexión WebSocket
    wsRef.current = new WebSocket("/lupai/agent/chat");

    wsRef.current.onopen = () => {
      console.log("Conexión WebSocket establecida.");
    };

    wsRef.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log("Mensaje recibido:", message);
      dispatch(setAssistantResponse(message));
    };

    wsRef.current.onerror = (error) => {
      console.error("Error en WebSocket:", error);
    };

    wsRef.current.onclose = () => {
      console.log("WebSocket cerrado.");
    };

    return () => {
      // Cerrar la conexión al desmontar el componente
      wsRef.current?.close();
    };
  }, [dispatch]);

  useEffect(() => {
    // Si el último mensaje es del usuario, envía el mensaje de nuevo al servidor.
    console.log(messages, 'messages')
    if (messages.length > 0 && messages[messages.length - 1].sender === 'user') {
      const lastUserMessage = messages[messages.length - 1].content;

      // Envía el mensaje con el último contenido del usuario y los datos del contexto.
      sendMessage(lastUserMessage);
      console.log("Mensaje enviado:", lastUserMessage);
      console.log(messages, 'messages')
    }
  }, [messages]);

  const sendMessage = (messageContent: string) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      const messageToSend = {
        user_query: messageContent,
        user_context: {
          origin_country: userContext.originCountry,
          time_in_germany: userContext.timeInGermany,
          age: userContext.age,
        },
        location: userContext.location,
      };
      wsRef.current.send(JSON.stringify(messageToSend));
    } else {
      console.error('WebSocket no está abierto para enviar mensajes.');
    }
  };

  return (
    <ChatContainer>
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
      <AddNewQuestion />
    </ChatContainer>
  );
};

export default Chat;
