import React, { createContext, useEffect, useState, ReactNode } from 'react';

import { setError } from '../config/features/ErrorSlice';

import { useDispatch } from 'react-redux';

// Ping interval in ms
const WSPingInterval = 10000;

// Define the WebSocket type
interface WebSocketContextType {
  ws: WebSocket | null;
}

// Define initial state for context
const WebSocketContext = createContext<WebSocketContextType | undefined>(
  undefined
);

// Define the provider's props
interface WebSocketProviderProps {
  children: ReactNode;
}

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({
  children,
}) => {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const wsInstance = new WebSocket('/lupai/multi_agent/chat');
    setWs(wsInstance);

    wsInstance.onopen = () => {
      console.log('WebSocket connection opened.');
    };

    wsInstance.onclose = () => {
      console.log('WebSocket connection closed.');
      dispatch(setError(true));
    };

    setInterval(() => {
      wsInstance.send(JSON.stringify({ ping: true }));
      console.log('ping sent.');
    }, WSPingInterval);
  }, []);

  return (
    <WebSocketContext.Provider value={{ ws }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export { WebSocketContext };
