import React from 'react';

import { Box } from '@mui/material';
import { FirstTitle, SecondTitle, CopyText, FindAnswerSectionContainer, TryButton } from './FindAnswerSectionStyles';
import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const FindAnswerSectionSection: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToAskLupaiPage = () => {
    navigate('/ask-lupai');
  };

  const { t } = useTranslation();
  return (
    <FindAnswerSectionContainer className='find-answer-text-container'>
      <Box>
        <FirstTitle gutterBottom>
          {t('find_answer')}
        </FirstTitle>
        <SecondTitle gutterBottom>
          {t('connect')}
        </SecondTitle>
      </Box>
      <Box>
        <CopyText gutterBottom>
          {t('inspired_powered_first')}
        </CopyText>
        <CopyText gutterBottom>
          {t('inspired_powered_second')}

        </CopyText>
      </Box>
      <TryButton variant="contained" color="primary" onClick={handleNavigateToAskLupaiPage}>
        Try it now
      </TryButton>
    </FindAnswerSectionContainer>
  );
};

export default FindAnswerSectionSection;
