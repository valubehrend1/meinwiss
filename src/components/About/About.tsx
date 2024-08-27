import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

import Introduction from './Introduction/Introduction';
import ProjectsMakingLupai from './ProjectsMakingLupai/ProjectsMakingLupai';
import Funding from './Funding/Funding';
import Faq from './FAQ/FAQ';
import Team from './Team';

const MainContainer = styled(Box)({
  width: '100%',
  overflowX: 'hidden',
});

const About: React.FC = () => {
  return (
    <MainContainer>
      <Introduction />
      <ProjectsMakingLupai />
      <Funding />
      <Faq />
      <Team />
    </MainContainer>
  );
};

export default About;
