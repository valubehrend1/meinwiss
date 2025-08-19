import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import MaximizeIcon from '@mui/icons-material/ExpandLess';
import MinimizeIcon from '@mui/icons-material/ExpandMore';
import SimpleChatWidget from './SimpleChatWidget';
import AuthCard from '../../Auth/AuthCard';
import { isAuthenticated } from '../../../utils/authUtils';
import { styled } from '@mui/material/styles';
import {
    ChatWidgetContainer,
    ChatWidgetHeader,
    MinimizeButton
} from './styles';

// Contenedor del widget que cambia cuando está minimizado
const MinimizedChatWidgetContainer = styled(ChatWidgetContainer, {
    shouldForwardProp: (prop) => prop !== 'isMinimized'
})<{ isMinimized: boolean }>(({ isMinimized }) => ({
    height: isMinimized ? '50px' : '100%', // Solo muestra el header cuando está minimizado
    backgroundColor: isMinimized ? 'transparent' : '#FFFFFF', // Sin fondo cuando está minimizado
}));

// Contenedor para centrar verticalmente la tarjeta de autenticación
const AuthCardContainer = styled(Box)(() => ({
    width: '100%',
    flexGrow: 1, // Use flex grow to expand and center content
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px',
}));

/**
 * Wrapper component that shows either the authentication card or the chat widget
 * based on authentication status
 */
const AuthenticatedChatWidget: React.FC = () => {
    // Track authentication status
    const [authenticated, setAuthenticated] = useState<boolean>(isAuthenticated());
    const [isMinimized, setIsMinimized] = useState<boolean>(false);

    // Listen for auth changes (like when a user logs in)
    useEffect(() => {
        // Check authentication on mount
        setAuthenticated(isAuthenticated());

        // Function to handle storage events (for when auth token changes)
        const handleStorageChange = () => {
            setAuthenticated(isAuthenticated());
        };

        // Add event listener for storage changes
        window.addEventListener('storage', handleStorageChange);

        // Clean up the event listener
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    // Handle successful login
    const handleAuthSuccess = () => {
        setAuthenticated(true);
    };

    // Toggle minimize state
    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <MinimizedChatWidgetContainer isMinimized={isMinimized}>
            <ChatWidgetHeader>
                <Typography variant="h6">Assistant</Typography>
                <MinimizeButton onClick={toggleMinimize} aria-label="toggle chat">
                    {isMinimized ? <MaximizeIcon /> : <MinimizeIcon />}
                </MinimizeButton>
            </ChatWidgetHeader>

            {!isMinimized && (
                authenticated ? (
                    <SimpleChatWidget />
                ) : (
                    <AuthCardContainer>
                        <AuthCard
                            initialMode="login"
                            onAuthSuccess={handleAuthSuccess}
                        />
                    </AuthCardContainer>
                )
            )}
        </MinimizedChatWidgetContainer>
    );
};

export default AuthenticatedChatWidget;
