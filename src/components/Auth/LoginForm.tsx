import React, { useState } from 'react';
import { Typography, Alert } from '@mui/material';
import { LoginFormProps } from '../../types/components';
import {
    StyledTextField,
    SubmitButton,
    FormContainer,
    StyledLink,
    SwitchModeContainer
} from './AuthStyles';
import useAuth from '../../hooks/useAuth';

const LoginForm: React.FC<LoginFormProps> = ({
    onSwitchToRegister,
    onLoginSuccess
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loading, error, login, clearError } = useAuth();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        clearError();

        try {
            await login({ email, password });
            onLoginSuccess('secureAuthToken'); // Pass the token back to parent
        } catch {
            // Error is handled in the hook
        }
    };

    return (
        <FormContainer component="form" onSubmit={handleSubmit}>
            <Typography variant="h5" gutterBottom align="center">
                Login
            </Typography>

            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}

            <StyledTextField
                label="Email"
                type="email"
                variant="outlined"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
            />

            <StyledTextField
                label="Password"
                type="password"
                variant="outlined"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
            />

            <SubmitButton
                type="submit"
                variant="contained"
                disabled={loading}
            >
                {loading ? 'Signing in...' : 'Sign In'}
            </SubmitButton>

            <SwitchModeContainer>
                <Typography variant="body2" color="textSecondary">
                    Don't have an account?
                    <StyledLink onClick={(e) => {
                        e.preventDefault();
                        onSwitchToRegister();
                    }}>
                        Sign up here
                    </StyledLink>
                </Typography>
            </SwitchModeContainer>
        </FormContainer>
    );
};

export default LoginForm;
