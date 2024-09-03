import React from 'react';
import { Grid, Box } from '@mui/material';

import { useTranslation } from 'react-i18next';

import { IntroContainer, FirstColumn, Title, Image, IntroText } from './IntroductionStyles';
import union from '../../../assets/Union.png';


const Introduction: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IntroContainer container>
      <FirstColumn item xs={12} md={6}>
        <Title color='primary' variant="h1">{t('about')} Lupai</Title>
        <Box>
          <Image src={union} alt="Lupai Logo" />
        </Box>
      </FirstColumn>
      <Grid item xs={12} md={6}>
        <IntroText variant="h3">
          {t('about_lupai_description')}
        </IntroText>
      </Grid>
    </IntroContainer>
  );
};

export default Introduction;
