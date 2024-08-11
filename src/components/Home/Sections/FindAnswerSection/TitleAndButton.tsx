import React from 'react';
import { Box } from '@mui/material';
import { FirstTitle, SecondTitle, CopyText, FindAnswerSectionContainer, TryButton } from './FindAnswerSectionStyles'

const FindAnswerSectionSection: React.FC = () => {
  return (
    <FindAnswerSectionContainer className='find-answer-text-container'>
      <Box>
        <FirstTitle gutterBottom>
          Find. Answer.
        </FirstTitle>
        <SecondTitle gutterBottom>
          Connect.
        </SecondTitle>
      </Box>
      <Box>
        <CopyText gutterBottom>
          Inspired by communities’
        </CopyText>
        <CopyText gutterBottom>
          solidarity. Powered by AI.
        </CopyText>
      </Box>
      <TryButton variant="contained" color="primary" >
        Try it now
      </TryButton>
    </FindAnswerSectionContainer>
  );
};

export default FindAnswerSectionSection;
