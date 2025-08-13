import React, { useState } from 'react';
import { AuthCardProps } from '../../types/components';
import { AuthContainer } from './AuthStyles';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { saveAuthToken } from '../../utils/authUtils';
import { useNavigate } from 'react-router-dom';

const AuthCard: React.FC<AuthCardProps> = ({ initialMode = 'login' }) => {
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
        navigate('/chat');
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
