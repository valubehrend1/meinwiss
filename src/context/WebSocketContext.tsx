import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Define the WebSocket type
interface WebSocketContextType {
  ws: WebSocket | null;
}

// Define initial state for context
const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined);

// Define the provider's props
interface WebSocketProviderProps {
  children: ReactNode;
}

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({ children }) => {
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const wsInstance = new WebSocket("/lupai/agent/chat");
    setWs(wsInstance);

    wsInstance.onmessage = (event: MessageEvent) => {
      const message = JSON.parse(event.data);
      // Handle incoming messages (e.g., update state)
      console.log('Received message:', message);
    };

    wsInstance.onopen = () => {
      console.log('WebSocket connection opened.');
    };

    wsInstance.onclose = () => {
      console.log('WebSocket connection closed.');
    };

    return () => {
      wsInstance.close(); // Cleanup on unmount
    };
  }, []);

  return (
    <WebSocketContext.Provider value={{ ws }}>
      {children}
    </WebSocketContext.Provider>
  );
};

// Custom hook for using WebSocket context
export const useWebSocket = (): WebSocketContextType => {
  const context = useContext(WebSocketContext);
  if (context === undefined) {
    throw new Error('useWebSocket must be used within a WebSocketProvider');
  }
  return context;
};
