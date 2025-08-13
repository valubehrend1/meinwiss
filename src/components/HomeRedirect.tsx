import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/authUtils';

const HomeRedirect: React.FC = () => {
    // Verificar si el usuario está autenticado
    const userIsAuthenticated = isAuthenticated();

    // Redirigir según el estado de autenticación
    if (userIsAuthenticated) {
        return <Navigate to="/chat" replace />;
    } else {
        return <Navigate to="/login" replace />;
    }
};

export default HomeRedirect;
