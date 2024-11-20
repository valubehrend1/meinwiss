import React, { useState, useEffect } from 'react';


import TypingDots from './TypingDots'
import { LupaiAnswerContainer, StyledMarkdown } from './ChatStyles'
import { Box } from '@mui/material/';
import Typography from '@mui/material/Typography';


import logo from '../../../assets/logo.png'

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
    <LupaiAnswerContainer>
      <Box>
        <img src={logo} alt="Logo" style={{ width: '20px' }} />
      </Box>
      {!content ? (
        <TypingDots />
      ) : (
        <Typography variant="h5" style={{ color: '#333', marginTop: '0px' }}>
          <StyledMarkdown>{displayedText}</StyledMarkdown>
        </Typography>
      )}
    </LupaiAnswerContainer>
  );
};

export default LupaiAnswer;
