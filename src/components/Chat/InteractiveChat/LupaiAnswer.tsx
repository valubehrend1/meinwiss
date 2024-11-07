import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { Paper, Box, Typography } from '@mui/material';
import LupaiResources from './LupaiResources';

import {
  selectAssistantResponse
} from '../../../config/features/ChatSlice';

import logo from '../../../assets/logo.png';
import theme from '../../../theme';

const Container = styled(Paper)({
  width: 'auto',
  display: 'flex',
  alignItems: 'left',
  marginTop: theme.spacing(6),
  gap: theme.spacing(2),
  textTransform: 'none',
  boxShadow: 'none',
});

interface LupaiAnswerProps {
  content: string;
}

const LupaiAnswer: React.FC<LupaiAnswerProps> = ({ content }) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  const assistanceResponse = useSelector(selectAssistantResponse);
  const retrieverItems = assistanceResponse?.retriever_items || []; // Use an empty array as a fallback

  useEffect(() => {
    console.log(assistanceResponse);
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
        <ReactMarkdown>{displayedText}</ReactMarkdown>
        This response is based on different resources:
        <LupaiResources retrieverItems={retrieverItems} />
      </Typography>
    </Container>
  );
};

export default LupaiAnswer;
