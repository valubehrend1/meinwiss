
import React from 'react';

import { Typography } from '@mui/material';

import DescriptionIcon from '@mui/icons-material/Description';

import { GerInTouchMainContainer, ContactButton } from './GetInTouchStyles';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const GetInTouch: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigateToContactForm = () => {
    navigate('/contact');
  };

  return (
    <GerInTouchMainContainer>
      <DescriptionIcon sx={{ fontSize: '36px' }} />
      <Typography variant='h3'>{t('get_in_touch_button')}</Typography>
      <Typography variant='h5' sx={{ textAlign: 'center' }}>{t('fast_response')}</Typography>
      <ContactButton
        variant='contained'
        onClick={handleNavigateToContactForm}
      >
        {t('contact')
        }</ContactButton>
    </GerInTouchMainContainer>
  );
}

export default GetInTouch;