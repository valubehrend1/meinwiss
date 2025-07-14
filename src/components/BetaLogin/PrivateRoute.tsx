import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectStepsCompleted } from '../../config/features/ChatSlice';

const PrivateRoute: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem('authToken');
  const stepsCompleted = useSelector(selectStepsCompleted);
  const location = useLocation();

  const isAttemptingChat = location.pathname === '/ask-lupai/chat';

  if (isAuthenticated && isAttemptingChat && !stepsCompleted) {
    return <Navigate to="/ask-lupai" />;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
