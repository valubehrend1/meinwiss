import { useState, useEffect, useRef, RefObject } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMessages,
  addUserMessage,
  resetSearch,
  setError,
  finalizeOldAssistantMessages,
  setAssistantResponse,
  selectError,
} from '../config/features/ChatSlice';
import { useWebSocket } from './useWebSocket';

interface UseChatWidgetReturn {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  messages: Array<Record<string, any>>;
  responseError: string | null;
  isErrorModalOpen: boolean;
  socketDown: boolean;
  hasSentMessage: boolean;
  isMinimized: boolean;
  messagesContainerRef: RefObject<HTMLDivElement>;
  scrollToBottom: () => void;
  toggleMinimize: () => void;
  handleSendMessage: (messageContent: string) => void;
  handleErrorModalClose: () => void;
  setisErrorModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Custom hook for ChatWidget component logic
 */
export const useChatWidget = (): UseChatWidgetReturn => {
  const messages = useSelector(selectMessages);
  const responseError = useSelector(selectError);

  const dispatch = useDispatch();
  const { ws } = useWebSocket();

  const [isErrorModalOpen, setisErrorModalOpen] = useState(false);
  const [socketDown, setSocketDown] = useState(false);
  const [hasSentMessage, setHasSentMessage] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  /**
   * Scrolls the message container to the bottom
   */
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };

  /**
   * Toggles the minimized state of the widget
   */
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
    // Send message to parent window to adjust size if needed
    if (window.parent) {
      window.parent.postMessage(
        { type: 'CHAT_WIDGET_TOGGLE', isMinimized: !isMinimized },
        '*'
      );
    }
  };

  /**
   * Handles sending a message through the chat
   */
  const handleSendMessage = (messageContent: string) => {
    if (messageContent.trim() === '' || hasSentMessage) return;

    if (!ws || ws.readyState !== WebSocket.OPEN) {
      setSocketDown(true);
      return;
    }

    dispatch(addUserMessage(messageContent));
    dispatch(finalizeOldAssistantMessages());
    setHasSentMessage(true);

    // Scroll down immediately after sending a message
    setTimeout(scrollToBottom, 100);

    try {
      // Send the message with the same format as the Chat component
      const messageToSend = {
        user_query: messageContent,
        user_context: {
          origin_country: null,
          time_in_germany: null,
          age: null,
        },
        location: 'Berlin',
      };
      ws.send(JSON.stringify(messageToSend));
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMsg = 'Error sending message. Please try again.';
      dispatch(setError(errorMsg));
      setisErrorModalOpen(true);
    }
  };

  /**
   * Closes the error modal
   */
  const handleErrorModalClose = () => {
    setisErrorModalOpen(false);
    dispatch(setError(null));
  };

  /**
   * Effect for handling parent window communication
   */
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Listen for messages from parent
      if (event.data.type === 'PARENT_COMMAND') {
        // Implement logic based on received commands
        switch (event.data.command) {
          case 'minimize':
            setIsMinimized(true);
            break;
          case 'maximize':
            setIsMinimized(false);
            break;
          case 'reset':
            dispatch(resetSearch());
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [dispatch]);

  /**
   * Reset the sending state when an assistant response is received
   */
  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].sender === 'assistant'
    ) {
      setHasSentMessage(false);
    }
    // Scroll down whenever the messages array changes
    scrollToBottom();
  }, [messages]);

  /**
   * Scroll down when the widget changes from minimized to maximized
   */
  useEffect(() => {
    if (!isMinimized) {
      setTimeout(scrollToBottom, 300); // Small delay to ensure DOM has updated
    }
  }, [isMinimized]);

  /**
   * Listen for WebSocket messages
   */
  useEffect(() => {
    if (!ws) return;

    const handleMessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        console.log('WebSocket message received:', data);
        dispatch(setAssistantResponse(data));
        // Scroll when receiving an assistant response
        setTimeout(scrollToBottom, 100);
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };

    ws.addEventListener('message', handleMessage);

    return () => {
      ws.removeEventListener('message', handleMessage);
    };
  }, [ws, dispatch]);

  return {
    messages,
    responseError,
    isErrorModalOpen,
    socketDown,
    hasSentMessage,
    isMinimized,
    messagesContainerRef,
    scrollToBottom,
    toggleMinimize,
    handleSendMessage,
    handleErrorModalClose,
    setisErrorModalOpen,
  };
};
