import React from 'react';

import { Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

import { useTranslation } from 'react-i18next';

import QuestionDropdown from './QuestionDropdown';

const FAQContainer = styled(Box)(({ theme }) => ({
  padding: '7.5rem 6.5rem',
  [theme.breakpoints.down('sm')]: {
    padding: '5rem 1.5rem',
  },
}));

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
