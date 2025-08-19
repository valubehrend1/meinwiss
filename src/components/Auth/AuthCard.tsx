import React, { useState } from 'react';
import { AuthCardProps } from '../../types/components';
import { AuthContainer } from './AuthStyles';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { saveAuthToken } from '../../utils/authUtils';
import { useNavigate } from 'react-router-dom';

const AuthCard: React.FC<AuthCardProps> = ({ initialMode = 'login', onAuthSuccess }) => {
    const [mode, setMode] = useState<'login' | 'register'>(initialMode);
    const navigate = useNavigate();

    const handleSwitchToRegister = () => {
        setMode('register');
    };

    const handleSwitchToLogin = () => {
        setMode('login');
    };

    const handleAuthSuccess = (token: string) => {
        saveAuthToken(token);

        // If an onAuthSuccess callback is provided, call it
        if (onAuthSuccess) {
            onAuthSuccess(token);
        } else {
            // Otherwise use the default navigation behavior
            navigate('/chat');
        }
    };

    return (
        <AuthContainer>
            {mode === 'login' ? (
                <LoginForm
                    onSwitchToRegister={handleSwitchToRegister}
                    onLoginSuccess={handleAuthSuccess}
                />
            ) : (
                <RegisterForm
                    onSwitchToLogin={handleSwitchToLogin}
                    onRegisterSuccess={handleAuthSuccess}
                />
            )}
        </AuthContainer>
    );
};

export default AuthCard;
