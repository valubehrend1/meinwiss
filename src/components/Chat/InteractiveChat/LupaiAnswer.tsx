import React, { useState, useEffect } from 'react';

import TypingDots from './TypingDots'
import { LupaiAnswerContainer, StyledMarkdown } from './ChatStyles'
import { Box } from '@mui/material/';
import Typography from '@mui/material/Typography';

import LupaiResources from './LupaiResources';

import { RetrieverItem } from '../../../config/features/ChatSlice';

import logo from '../../../assets/logo.png'

import { useTranslation } from 'react-i18next';

interface LupaiAnswerProps {
  content: string;
  sources: RetrieverItem[];
  answerFound?: boolean;
  isFinalResponse: boolean;
  isClarification?: boolean;
}


const LupaiAnswer: React.FC<LupaiAnswerProps> = ({ content, sources, answerFound, isFinalResponse, isClarification }) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);
  const { t } = useTranslation();

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

      {!content && !isFinalResponse ? (
        <TypingDots />
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h5" style={{ color: '#333' }}>
            <StyledMarkdown>{displayedText}</StyledMarkdown>
          </Typography>
          {!answerFound && isFinalResponse && !isClarification &&
            <>
              <Box sx={{ gap: '15px', display: 'flex', flexDirection: 'column' }}>
                <Typography>{t('response_based_on_resources')}</Typography>
                <LupaiResources retrieverItems={sources} />
              </Box>
            </>
          }
        </Box>
      )}
    </LupaiAnswerContainer>
  );
};

export default LupaiAnswer;
