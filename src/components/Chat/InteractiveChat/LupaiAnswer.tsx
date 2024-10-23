import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Paper, Box } from '@mui/material/';
import Typography from '@mui/material/Typography';


import logo from '../../../assets/logo.png'
import theme from '../../../theme';
const Container = styled(Paper)({
  width: 'auto',
  display: 'flex',
  alignItems: 'left',
  marginTop: theme.spacing(6),
  gap: theme.spacing(2),
  textTransform: 'none',
  boxShadow: 'none'
});

interface LupaiAnswerProps {
  content: string;
}

const LupaiAnswer: React.FC<LupaiAnswerProps> = ({ content }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  //Actualización de estado para mostrar la respuesta del agente letra por letra
  useEffect(() => {
    if (index < content.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + content[index]);
        setIndex((prev) => prev + 1);
      }, 5);

      return () => clearTimeout(timeout);
    }
  }, [index, content]);

  return (
    <Container>
      <Box>
        <img src={logo} alt="Logo" style={{ width: '20px' }} />
      </Box>
      <Typography variant="h5" style={{ color: '#333' }}>
        {displayedText}
      </Typography>
    </Container>
  );
};

export default LupaiAnswer;
