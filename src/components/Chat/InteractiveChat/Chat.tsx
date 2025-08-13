import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMessages,
  setAssistantResponse,
  selectError,
  addUserMessage,
  resetSearch,
  setError,
  selectAccumulatedOrganizations,
  finalizeOldAssistantMessages
} from '../../../config/features/ChatSlice';

import { Box, IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { PDFDownloadLink } from '@react-pdf/renderer';

import PdfExport from '../PdfExport';
import SharedSearchBar from '../../pages/shared/SharedSearchBar/SharedSearchBar';
import LupaiAnswer from './LupaiAnswer';
import UserQuestion from './UserQuestion';
import AddNewQuestion from './AddNewQuestion';
import LupaiOrganizations from './LupaiOrganizations';
import { ChatContainer, MessagesContainer } from './ChatStyles';

import { useWebSocket } from '../../../hooks/useWebSocket';
import NewQuestionModal from './NewQuestionModal';
import ErrorModal from '../ErrorModal/ErrorModal';

import theme from '../../../theme';
import RefreshModalError from '../ErrorModal/RefreshModalError';

const Chat: React.FC = () => {
  const messages = useSelector(selectMessages);
  const organizations = useSelector(selectAccumulatedOrganizations);
  /*   const userContext = useSelector(selectUserContext); */
  const responseError = useSelector(selectError);

  const dispatch = useDispatch();
  const { ws } = useWebSocket();

  const [isOpen, setIsOpen] = useState(false);
  const [isRefreshModalOpen, setIsRefreshModalOpen] = useState(false);
  const [socketDown, setSocketDown] = useState(false);

  // Prevents re-sending the same user message multiple times
  const [hasSentMessage, setHasSentMessage] = useState(false);

  const [skipNativePrompt, setSkipNativePrompt] = useState(false);

  // Modal Handling
  const handleOpen = () => {
    setIsOpen(true);
  };

  // Intercept F5, Ctrl+R / Cmd+R
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Detect F5
      if (event.key === 'F5') {
        event.preventDefault();
        setSkipNativePrompt(true);         // Skip the native prompt
        setIsRefreshModalOpen(true);       // Show our modal
      }
      // Detect Ctrl+R or Cmd+R
      const isCtrlOrCmd = event.ctrlKey || event.metaKey;
      if (isCtrlOrCmd && event.key.toLowerCase() === 'r') {
        event.preventDefault();
        setSkipNativePrompt(true);
        setIsRefreshModalOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // If skipNativePrompt is "false", it means we are NOT intercepting
      // the event (meaning, it comes from refreshing with the native button or closing tab).
      if (!skipNativePrompt) {
        event.preventDefault();
        // To make the native alert work in modern browsers
        event.returnValue = '';
      }
      // If skipNativePrompt is true, we DO NOTHING, there will be NO native alert.
      // (Because we understand it came from F5 / Ctrl+R / Cmd+R, where we have
      // our own modal).
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [skipNativePrompt]);
  const handleRefreshConfirm = () => {
    setIsRefreshModalOpen(false);
    setSkipNativePrompt(true);
    dispatch(resetSearch());
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: 'new_search' }));
    }
    // Ya no necesitamos navegar fuera del chat
  };

  const onCancelModal = () => {
    setIsOpen(false);
    dispatch(resetSearch());
    // Ya no necesitamos navegar fuera del chat
  };

  // Error Modal Handling
  const handleCloseError = () => {
    if (responseError) {
      dispatch(setError(null));
    }
    setSocketDown(false);
  };

  // Listen for WebSocket messages
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

  // Send message to server
  const sendMessage = (messageContent: string) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      const messageToSend = {
        user_query: messageContent,
        user_context: {
          /*  origin_country: userContext.originCountry,
           time_in_germany: userContext.timeInGermany,
           age: userContext.age, */
          origin_country: null,
          time_in_germany: null,
          age: null,
        },
        /* location: userContext.location, */
        location: 'Berlin',
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

  // When a new user message is added, we send it to the backend
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


  // Handling closed socket
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
            onNewQuestion={onCancelModal}
            setIsOpen={setIsOpen}
          />
        )}

        {isRefreshModalOpen && (
          <RefreshModalError
            isOpen={isRefreshModalOpen}
            setIsRefreshModalOpen={setIsRefreshModalOpen}
            onReset={handleRefreshConfirm}
            onCancel={onCancelModal}
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

        {/* Render ALL messages (user / assistant) */}
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
                error={message.error}
                setIsOpen={setIsOpen}
                open={isOpen}
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
