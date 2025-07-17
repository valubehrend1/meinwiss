import React from 'react';
import { Box } from '@mui/material';
import TitleAndButton from './TitleAndButton';
import ImageGrid from './ImageGrid';
import { SectionMainContainer } from './FindAnswerSectionStyles';

const FindAnswerSectionSection: React.FC = () => {
  return (
    <SectionMainContainer display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
      <Box flex={1}>
        <TitleAndButton />
      </Box>
      <Box flex={1}>
        <ImageGrid />
      </Box>
    </SectionMainContainer>
  );
};

export default FindAnswerSectionSection;
