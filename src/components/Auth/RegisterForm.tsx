import React, { useState } from 'react';
import { Typography, Alert } from '@mui/material';
import { RegisterFormProps } from '../../types/components';
import {
    StyledTextField,
    SubmitButton,
    FormContainer,
    StyledLink,
    SwitchModeContainer
} from './AuthStyles';
import useAuth from '../../hooks/useAuth';

const RegisterForm: React.FC<RegisterFormProps> = ({
    onSwitchToLogin,
    onRegisterSuccess
}) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { loading, error, register, clearError } = useAuth();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        clearError();

        if (password !== confirmPassword) {
            // This is also checked in the hook, but we can provide immediate feedback
            return;
        }

        try {
            await register({ email, name, password, confirmPassword });
            onRegisterSuccess('newUserAuthToken'); // Pass the token back to parent
        } catch {
            // Error is handled in the hook
        }
    };

    return (
        <FormContainer component="form" onSubmit={handleSubmit}>
            <Typography variant="h5" gutterBottom align="center">
                Register
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
                label="Name"
                type="text"
                variant="outlined"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
            />

            <StyledTextField
                label="Password"
                type="password"
                variant="outlined"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
            />

            <StyledTextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={loading}
                error={password !== confirmPassword && confirmPassword !== ''}
                helperText={
                    password !== confirmPassword && confirmPassword !== ''
                        ? 'Passwords do not match'
                        : ''
                }
            />

            <SubmitButton
                type="submit"
                variant="contained"
                disabled={loading || (password !== confirmPassword && confirmPassword !== '')}
            >
                {loading ? 'Registering...' : 'Register'}
            </SubmitButton>

            <SwitchModeContainer>
                <Typography variant="body2" color="textSecondary">
                    Already have an account?
                    <StyledLink onClick={(e) => {
                        e.preventDefault();
                        onSwitchToLogin();
                    }}>
                        Sign in here
                    </StyledLink>
                </Typography>
            </SwitchModeContainer>
        </FormContainer>
    );
};

export default RegisterForm;
