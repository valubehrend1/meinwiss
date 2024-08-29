import React from 'react';

import { Box, Typography } from '@mui/material';
import { LogosTextContainer, StarsIcon, LogosText, Container, Section, Logo, LogoContainer } from './LogosSectionStyles';

import AurekaLogo from '../../../../assets/Logos/Aureka.png';
import Bundesministerium from '../../../../assets/Logos/Bundesministerium.png';
import CivicInnovation from '../../../../assets/Logos/Civicinnovation.png';
import LohanaBerkins from '../../../../assets/Logos/LohanaBerkins.png';

import { primary_color_dark } from '../../../../theme';

import { useTranslation } from 'react-i18next';


const LogosSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>

      <Section>
        <Box>
          <LogosTextContainer>
            <StarsIcon />
            <LogosText>{t('who_support_us')}</LogosText>
          </LogosTextContainer>
          <Typography variant='h3' sx={{ color: primary_color_dark }}>{t('lupai_founded_by')}</Typography>
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
            <LogosText>{t('who_is_behind_lupai')}</LogosText>
          </LogosTextContainer>
          <Typography variant='h3' sx={{ color: primary_color_dark }}>{t('projects_making_lupai')}</Typography>
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
