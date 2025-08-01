import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectStepsCompleted } from '../../config/features/ChatSlice';
import { isAuthenticated } from '../../utils/authUtils';

/**
 * Route component that checks if user is authenticated
 * Redirects to login page if not authenticated
 */
const PrivateRoute: React.FC = () => {
    const isUserAuthenticated = isAuthenticated();
    const stepsCompleted = useSelector(selectStepsCompleted);
    const location = useLocation();

    const isAttemptingChat = location.pathname === '/ask-lupai/chat';

    if (isUserAuthenticated && isAttemptingChat && !stepsCompleted) {
        return <Navigate to="/ask-lupai" />;
    }

    return isUserAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
