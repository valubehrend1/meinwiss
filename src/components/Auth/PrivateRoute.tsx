import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../../utils/authUtils';

/**
 * Route component that checks if user is authenticated
 * Redirects to login page if not authenticated
 */
const PrivateRoute: React.FC = () => {
    const isUserAuthenticated = isAuthenticated();

    return isUserAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
