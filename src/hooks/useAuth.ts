import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginFormData, RegisterFormData } from '../types/components';
import { loginUser, registerUser, saveAuthToken } from '../utils/authUtils';

interface UseAuthReturn {
  loading: boolean;
  error: string | null;
  login: (data: LoginFormData) => Promise<void>;
  register: (data: RegisterFormData) => Promise<void>;
  clearError: () => void;
}

/**
 * Custom hook for handling authentication logic
 */
export const useAuth = (): UseAuthReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const clearError = () => setError(null);

  const login = async (data: LoginFormData) => {
    try {
      setLoading(true);
      clearError();
      const response = await loginUser(data);
      saveAuthToken(response.token);
      navigate('/chat'); // Redirect to the main app
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: RegisterFormData) => {
    try {
      setLoading(true);
      clearError();
      // Validate passwords match
      if (data.password !== data.confirmPassword) {
        throw new Error('Passwords do not match');
      }

      const response = await registerUser(data);
      saveAuthToken(response.token);
      navigate('/chat'); // Redirect to the main app
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    login,
    register,
    clearError,
  };
};

export default useAuth;
