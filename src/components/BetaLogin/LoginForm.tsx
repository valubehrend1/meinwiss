import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

import { LoginContainer, StyledTextField, SubmitButton } from './LoginFormStyles'
/* import LoginModal from './LoginModal'; */

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Mostrar el modal automáticamente al cargar el componente
    setIsModalOpen(true);
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Simula la validación de credenciales
    const validEmail = 'user@lupai.com';
    const validPassword = '*O71@h3bV!Vd';

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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <StyledTextField
          label="Password"
          type="password"
          variant="outlined"
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
