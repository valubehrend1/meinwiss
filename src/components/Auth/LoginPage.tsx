import React from 'react';
import { Container } from '@mui/material';
import AuthCard from './AuthCard';
import { AuthPageContainer } from './AuthStyles';

const LoginPage: React.FC = () => {
    return (
        <Container maxWidth="md">
            <AuthPageContainer>
                <AuthCard initialMode="login" />
            </AuthPageContainer>
        </Container >
    );
};

export default LoginPage;
