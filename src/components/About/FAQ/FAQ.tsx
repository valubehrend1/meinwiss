import React from 'react';

import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@mui/material';

import QuestionDropdown from './QuestionDropdown';
import { FAQContainer } from './FaqStyles'

const Faq: React.FC = () => {
  const { t } = useTranslation()
  return (
    <FAQContainer>
      <Typography variant="h3" sx={{ mb: 4, fontWeight: 700 }}> {t('faq')}</Typography>
      <Typography variant="h4" sx={{ mb: 10 }}> {t('faq_subtitle')}</Typography>
      <Grid container spacing={2}>
        <QuestionDropdown />
      </Grid>
    </FAQContainer>
  );
};

export default Faq;
