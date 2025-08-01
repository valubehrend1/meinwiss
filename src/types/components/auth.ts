// Types for authentication related components

/**
 * Props for the AuthCard component
 */
export interface AuthCardProps {
  initialMode?: 'login' | 'register';
}

/**
 * Props for the LoginForm component
 */
export interface LoginFormProps {
  onSwitchToRegister: () => void;
  onLoginSuccess: (token: string) => void;
}

/**
 * Props for the RegisterForm component
 */
export interface RegisterFormProps {
  onSwitchToLogin: () => void;
  onRegisterSuccess: (token: string) => void;
}

/**
 * Form data for login
 */
export interface LoginFormData {
  email: string;
  password: string;
}

/**
 * Form data for registration
 */
export interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  name?: string;
}

/**
 * Authentication response from API
 */
export interface AuthResponse {
  token: string;
  user?: {
    id: string;
    email: string;
    name?: string;
  };
}
