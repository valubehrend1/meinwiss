import React, { useState/* , useEffect */ } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

import { LoginContainer, StyledTextField, SubmitButton } from './LoginFormStyles'
/* import LoginModal from './LoginModal'; */

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  /* const [isModalOpen, setIsModalOpen] = useState(false); */
  const navigate = useNavigate();

  /*   useEffect(() => {
      setIsModalOpen(true);
    }, []); */

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Simula la validación de credenciales
    const validEmail = import.meta.env.VITE_VALID_EMAIL;
    const validPassword = import.meta.env.VITE_VALID_PASSWORD;

    if (email === validEmail && password === validPassword) {
      // Autenticación exitosa
      localStorage.setItem('authToken', 'secureAuthToken'); // Guarda el token de autenticación
      navigate('/ask-lupai');
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <LoginContainer>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <StyledTextField
          label="Email"
          type="email"
          variant="outlined"
          autoComplete="current-user"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <StyledTextField
          label="Password"
          type="password"
          variant="outlined"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <SubmitButton type="submit" variant="contained">
          Sign In
        </SubmitButton>
      </form>

      {/* Modal informativo */}
      {/*  <LoginModal open={isModalOpen} setIsOpen={setIsModalOpen} /> */}
    </LoginContainer>
  );
};

export default LoginForm;
