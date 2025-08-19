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
    // Determinar el protocolo basado en la conexión actual
    const wsProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';

    // Obtener host, ruta y token de las variables de entorno o usar valores por defecto
    const wsHost = import.meta.env.VITE_WS_HOST || 'api.lupai.de';
    const wsPath = import.meta.env.VITE_WS_PATH || '/lupai/multi_agent/chat';
    const wsToken = import.meta.env.VITE_LUPAI_TOKEN || 'default_token';

    // Construir la URL completa
    // Si el host ya incluye protocolo, usarlo directamente
    const baseUrl = wsHost.startsWith('http') ? wsHost.replace('http', 'ws') : `${wsProtocol}//${wsHost}`;
    const wsUrl = `${baseUrl}${wsPath}?token=${wsToken}`;

    console.log('Connecting to WebSocket:', wsUrl);

    const wsInstance = new WebSocket(wsUrl);
    setWs(wsInstance);

    wsInstance.onopen = () => {
      console.log('WebSocket connection opened.');
    };

    wsInstance.onclose = (event) => {
      console.log('WebSocket connection closed.', event.code, event.reason);
      dispatch(setError(true));
    };

    wsInstance.onerror = (error) => {
      console.error('WebSocket error:', error);
      dispatch(setError(true));
    };

    // Ping periódico para mantener la conexión viva
    const pingInterval = setInterval(() => {
      if (wsInstance.readyState === WebSocket.OPEN) {
        wsInstance.send(JSON.stringify({ ping: true }));
        console.log('ping sent.');
      }
    }, WSPingInterval);

    // Limpiar al desmontar
    return () => {
      clearInterval(pingInterval);
      if (wsInstance.readyState === WebSocket.OPEN) {
        wsInstance.close();
      }
    };
  }, [dispatch]);

  return (
    <WebSocketContext.Provider value={{ ws }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export { WebSocketContext };
