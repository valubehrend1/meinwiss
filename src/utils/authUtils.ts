import {
  LoginFormData,
  RegisterFormData,
  AuthResponse,
} from '../types/components';

/**
 * Simulates a login API call
 * In a real application, this would make an actual API request
 */
export const loginUser = async (data: LoginFormData): Promise<AuthResponse> => {
  // Simulación de validación con variables de entorno
  const validEmail = import.meta.env.VITE_VALID_EMAIL;
  const validPassword = import.meta.env.VITE_VALID_PASSWORD;

  // Simulación de latencia de red
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (data.email === validEmail && data.password === validPassword) {
    // Simulación de respuesta exitosa
    return {
      token: 'secureAuthToken',
      user: {
        id: '1',
        email: data.email,
        name: 'Test User',
      },
    };
  } else {
    // Simulación de error
    throw new Error('Invalid email or password');
  }
};

/**
 * Simulates a register API call
 * In a real application, this would make an actual API request
 */
export const registerUser = async (
  data: RegisterFormData
): Promise<AuthResponse> => {
  // Simulación de validación
  if (data.password !== data.confirmPassword) {
    throw new Error('Passwords do not match');
  }

  if (data.password.length < 6) {
    throw new Error('Password must be at least 6 characters long');
  }

  // Simulación de latencia de red
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simulación de respuesta exitosa
  return {
    token: 'newUserAuthToken',
    user: {
      id: '2',
      email: data.email,
      name: data.name || 'New User',
    },
  };
};

/**
 * Saves authentication token to local storage
 */
export const saveAuthToken = (token: string): void => {
  localStorage.setItem('authToken', token);
};

/**
 * Retrieves authentication token from local storage
 */
export const getAuthToken = (): string | null => {
  return localStorage.getItem('authToken');
};

/**
 * Checks if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  return !!getAuthToken();
};

/**
 * Removes authentication token from local storage
 */
export const logout = (): void => {
  localStorage.removeItem('authToken');
};
