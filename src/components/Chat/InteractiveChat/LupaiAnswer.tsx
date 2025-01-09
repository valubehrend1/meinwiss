import React, { useState, useEffect } from 'react';
import { LupaiAnswerContainer, StyledMarkdown } from './ChatStyles';
import { Box } from '@mui/material/';
import { styled } from '@mui/system/';
import Typography from '@mui/material/Typography';

import LupaiResources from './LupaiResources';

import {
  RetrieverItem,
  selectStatusDisplay,
  selectOriginalStatus
} from '../../../config/features/ChatSlice';

import { useSelector } from 'react-redux';

import theme from '../../../theme';
import logo from '../../../assets/logo.png';

interface LupaiAnswerProps {
  content: string;
  sources: RetrieverItem[];
  answerFound?: boolean;
  isFinalResponse: boolean;
  isClarification?: boolean;
  isWaitingForResponse?: boolean;
}

const SpinnerContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

const AnswerContentContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column'
});

const LupaiAnswer: React.FC<LupaiAnswerProps> = ({
  content,
  sources,
  answerFound,
  isFinalResponse,
  isClarification,
}) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  const status = useSelector(selectOriginalStatus);
  const displayedStatus = useSelector(selectStatusDisplay);

  // Simulamos "typo" del contenido
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
    return !!answerFound && isFinalResponse && !isClarification;
  };

  const showSpinner = (): boolean => {
    return status !== null && typeof displayedStatus === 'string' && displayedStatus.length > 0 && !isFinalResponse;
  };

  return (
    <LupaiAnswerContainer>
      <Box>
        <img src={logo} alt="Logo" style={{ width: '20px' }} />
      </Box>
      {showSpinner() && (
        <SpinnerContainer>
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
        </SpinnerContainer>
      )}

      <AnswerContentContainer>
        <Typography variant="h5" style={{ color: '#333' }}>
          <StyledMarkdown>
            {displayedText}
          </StyledMarkdown>
        </Typography>

        {showReferences() && (
          <LupaiResources retrieverItems={sources} />
        )}
      </AnswerContentContainer>
    </LupaiAnswerContainer>
  );
};

export default LupaiAnswer;
