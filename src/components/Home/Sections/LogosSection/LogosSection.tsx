import React from 'react';

import { Box, Typography } from '@mui/material';
import { LogosTextContainer, StarsIcon, LogosText, Container, Section, Logo, LogoContainer } from './LogosSectionStyles';

import AurekaLogo from '../../../../assets/Logos/Aureka.png';
import Bundesministerium from '../../../../assets/Logos/Bundesministerium.png';
import CivicInnovation from '../../../../assets/Logos/Civicinnovation.png';
import LohanaBerkins from '../../../../assets/Logos/LohanaBerkins.png';

import { primary_color_dark } from '../../../../theme';


const LogosSection: React.FC = () => {
  return (
    <Container>

      <Section>
        <Box>
          <LogosTextContainer>
            <StarsIcon />
            <LogosText>You don’t know how to use AI?</LogosText>
          </LogosTextContainer>
          <Typography variant='h3' sx={{ color: primary_color_dark }}>Lupai is funded by</Typography>
        </Box>
        <LogoContainer>
          <Logo src={CivicInnovation} alt="Civic Innovation" />
          <Logo src={Bundesministerium} alt="Bundesministerium für Arbeit und Soziales" />
        </LogoContainer>
      </Section>

      <Section>
        <Box>
          <LogosTextContainer>
            <StarsIcon />
            <LogosText>Projects making Lupai</LogosText>
          </LogosTextContainer>
          <Typography variant='h3' sx={{ color: primary_color_dark }}>Projects making Lupai</Typography>
        </Box>
        <LogoContainer>
          <Logo src={LohanaBerkins} alt="LohanaBerkins" />
          <Logo src={AurekaLogo} alt="Aureka" />
        </LogoContainer>
      </Section>

    </Container>
  );
};

export default LogosSection;
