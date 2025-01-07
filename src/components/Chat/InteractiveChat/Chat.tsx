import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMessages,
  setAssistantResponse,
  selectError,
  addUserMessage,
  selectUserContext,
  resetSearch,
  setError,
  selectAccumulatedOrganizations,
  finalizeOldAssistantMessages,
} from '../../../config/features/ChatSlice';

import { Box, IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { PDFDownloadLink } from '@react-pdf/renderer';

import PdfExport from '../PdfExport';
import SharedSearchBar from '../../shared/SharedSearchBar/SharedSearchBar';
import LupaiAnswer from './LupaiAnswer';
import UserQuestion from './UserQuestion';
import AddNewQuestion from './AddNewQuestion';
import LupaiOrganizations from './LupaiOrganizations';
import { ChatContainer, MessagesContainer } from './ChatStyles';

import { useWebSocket } from '../../../context/useWebSocket';
import NewQuestionModal from './NewQuestionModal';
import ErrorModal from '../ErrorModal/ErrorModal';

import { useNavigate } from 'react-router-dom';
import theme from '../../../theme';

const Chat: React.FC = () => {
  const messages = useSelector(selectMessages);
  const organizations = useSelector(selectAccumulatedOrganizations);
  const userContext = useSelector(selectUserContext);
  const responseError = useSelector(selectError);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ws } = useWebSocket();

  // Control del modal PDF / error
  const [isOpen, setIsOpen] = useState(false);
  const [socketDown, setSocketDown] = useState(false);

  // Evita re-enviar el mismo mensaje del usuario varias veces
  const [hasSentMessage, setHasSentMessage] = useState(false);


  // Manejo Modal
  const handleOpen = () => {
    setIsOpen(true);
  };
  const onCancelPdfModal = () => {
    setIsOpen(false);
    navigate('/ask-lupai');
    window.location.reload();
  };

  // Manejo ErrorModal
  const handleCloseError = () => {
    dispatch(setError(null));
    setSocketDown(false);
  };

  // Escucha mensajes WebSocket
  if (ws) {
    ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        dispatch(setAssistantResponse(message));
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };
  }

  // Enviar mensaje al server
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
      setSocketDown(true);
    }
  };

  const sendUserMessage = (messageContent: string) => {
    dispatch(finalizeOldAssistantMessages());
    dispatch(addUserMessage(messageContent));
    sendMessage(messageContent);
  };

  // Cuando se agrega un nuevo mensaje de usuario, lo enviamos al backend
  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].sender === 'user' &&
      !hasSentMessage
    ) {
      const lastUserMessage = messages[messages.length - 1].content;
      sendMessage(lastUserMessage);
      setHasSentMessage(true);
    } else if (messages.length === 0) {
      setHasSentMessage(false);
    }
  }, [messages, hasSentMessage]); // eslint-disable-line

  // Nueva búsqueda
  const handleNewQuestion = () => {
    dispatch(resetSearch());
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: 'new_search' }));
    }
    navigate('/ask-lupai');
  };

  // Manejo de socket cerrado
  useEffect(() => {
    if (ws && ws.readyState === WebSocket.CLOSED) {
      setSocketDown(true);
    }
  }, [ws]);

  return (
    <>
      <ChatContainer>
        {isOpen && (
          <NewQuestionModal
            isOpen={isOpen}
            onNewQuestion={handleNewQuestion}
            onCancel={onCancelPdfModal}
            setIsOpen={setIsOpen}
          />
        )}
        {responseError && (
          <ErrorModal
            isOpen={true}
            onClose={handleCloseError}
            content="There was an error loading the answer, please try again."
          />
        )}
        {socketDown && (
          <ErrorModal
            isOpen={true}
            setisOpen={setIsOpen}
            onClose={handleCloseError}
            content="The connection to the server has been lost. Please try again."
          />
        )}

        {/* Renderizamos TODOS los mensajes (user / assistant) */}
        {messages.map((message, index) => (
          <MessagesContainer key={index} sender={message.sender}>
            {message.sender === 'user' && (
              <UserQuestion content={message.content} />
            )}
            {message.sender === 'assistant' && (
              <LupaiAnswer
                content={message.content || ''}
                sources={message.sources || []}
                isClarification={message.isClarification}
                isFinalResponse={message.isFinalResponse}
                answerFound={message.answerFound}
              />
            )}
          </MessagesContainer>
        ))}

        {organizations.length !== 0 && (
          <LupaiOrganizations organizations={organizations} />
        )}

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
          <SharedSearchBar
            mainSearchPage={false}
            sendMessage={sendUserMessage}
          />
          <PDFDownloadLink
            document={<PdfExport messages={messages} />}
            fileName="conversation.pdf"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <IconButton>
              <DownloadIcon sx={{ color: theme.palette.primary.main }} />
            </IconButton>
          </PDFDownloadLink>
        </Box>

        <AddNewQuestion handleOpen={handleOpen} />
      </ChatContainer>
    </>
  );
};

export default Chat;
