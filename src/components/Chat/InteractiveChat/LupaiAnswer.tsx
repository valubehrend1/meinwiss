import React, { useState, useEffect } from 'react';

/* import TypingDots from './TypingDots' */
import { LupaiAnswerContainer, StyledMarkdown } from './ChatStyles'
import { Box } from '@mui/material/';
import Typography from '@mui/material/Typography';

import LupaiResources from './LupaiResources';

import { RetrieverItem } from '../../../config/features/ChatSlice';

import theme from '../../../theme';

import logo from '../../../assets/logo.png'


interface LupaiAnswerProps {
  content: string;
  sources: RetrieverItem[];
  answerFound?: boolean;
  isFinalResponse: boolean;
  isClarification?: boolean;
  status?: unknown;
  displayedStatus?: string;
}


const LupaiAnswer: React.FC<LupaiAnswerProps> = ({ content, sources, answerFound, isFinalResponse, isClarification, status, displayedStatus }) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    console.log("status in component:", status);
    console.log("displayedStatus in component:", displayedStatus);
  }, [displayedStatus, status]);


  useEffect(() => {
    if (index < content.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + content[index]);
        setIndex((prev) => prev + 1);
      }, 5);

      return () => clearTimeout(timeout);
    }
  }, [index, content]);

  const showReferences = (): boolean => {
    return !answerFound && isFinalResponse && !isClarification;
  };

  return (
    <LupaiAnswerContainer>
      <Box>
        <img src={logo} alt="Logo" style={{ width: '20px' }} />
      </Box>

      {status !== null && displayedStatus !== null &&
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.primary.main,
              animation: 'pulse 1.5s infinite',
              '@keyframes pulse': {
                '0%': { opacity: 0.5 },
                '50%': { opacity: 1 },
                '100%': { opacity: 0.5 },
              },
            }}
          >
            {displayedStatus}
          </Typography>
        </Box>
      }

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h5" style={{ color: '#333' }}>
          <StyledMarkdown>{displayedText}</StyledMarkdown>
        </Typography>
        {showReferences() &&
          <LupaiResources retrieverItems={sources} />
        }
      </Box>

    </LupaiAnswerContainer>
  );
};

export default LupaiAnswer;
