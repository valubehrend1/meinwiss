// import React, { useCallback, useEffect, useState } from 'react';
import React, { useState, useEffect } from 'react';

/* import { usePDF } from 'react-to-pdf'; */

import { useDispatch, useSelector } from 'react-redux';
import {
  selectMessages,
  setAssistantResponse,
  addUserMessage,
  selectUserContext,
  resetSearch,
} from '../../../config/features/ChatSlice';

import { Box } from '@mui/material';

import SharedSearchBar from '../../shared/SharedSearchBar/SharedSearchBar';
import LupaiAnswer from './LupaiAnswer';
import UserQuestion from './UserQuestion';
import AddNewQuestion from './AddNewQuestion';
import { ChatContainer, MessagesContainer } from './ChatStyles';
/* import PdfExport from '../PdfExport' */


import { useWebSocket } from '../../../context/useWebSocket';
import NewQuestionModal from './NewQuestionModal';

import { useNavigate } from 'react-router-dom';

const Chat: React.FC = () => {
  const messages = useSelector(selectMessages);
  const userContext = useSelector(selectUserContext);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [hasSentMessage, setHasSentMessage] = useState(false);
  /*  const { toPDF, targetRef } = usePDF({ filename: 'chat.pdf' });
   const PdfExport = <PdfExport ref={targetRef} />
  */
  const handleOpen = () => {
    setIsOpen(true);
  };

  const dispatch = useDispatch();
  const { ws } = useWebSocket();

  if (ws) {
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      dispatch(setAssistantResponse(message));
    };
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sendMessage = (messageContent: string) => {
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
  };


  // Hook useEffect para manejar el envío de mensajes(si hay modificaciones en las variables dependientes)

  useEffect(() => {
    // Comprobación para asegurarse de que hay mensajes, el último mensaje es del usuario, y no se ha enviado aún.
    if (
      messages.length > 0 && // Verifica que hay al menos un mensaje.
      messages[messages.length - 1].sender === 'user' && // Verifica que el último mensaje fue enviado por el usuario.
      // (message.lenght - 1 = 0 (indice array) y el sender es el usuario
      !hasSentMessage  // Verifica que el último mensaje aún no ha sido enviado.
    ) {
      const lastUserMessage = messages[messages.length - 1].content; // Obtiene el contenido del último mensaje del usuario.

      // Envía el mensaje con el último contenido del usuario y los datos del contexto.
      sendMessage(lastUserMessage); // Envía el último mensaje del usuario usando la función sendMessage.
      setHasSentMessage(true); // Marca que se ha enviado el mensaje
    } else if (messages.length === 0) { // Verifica si la lista de mensajes está vacía.
      setHasSentMessage(false); // Reinicia el estado si no hay nuevos  mensajes
    }
  }, [messages, sendMessage, hasSentMessage]);

  console.log(messages);

  /*
    const handleOnDownload = () => {
      console.log('download')
    } */


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
        {isOpen && (
          <NewQuestionModal
            isOpen={isOpen}
            /* onDownload={handleOnDownload} */
            onNewQuestion={handleNewQuestion}
            onCancel={() => setIsOpen(false)}
          />
        )}
        {messages.map((message, index) => (
          <MessagesContainer
            key={index}
            sender={message.sender} // Pasar el sender como prop
          >
            {message.sender === 'user' ? (
              <UserQuestion content={message.content} />
            ) : (
              <LupaiAnswer content={message.content} sources={message.sources || []} />
            )}
          </MessagesContainer>
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
