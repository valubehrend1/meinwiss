import React from 'react';

import { FooterContainer, SocialMediaContainer } from './FooterStyles';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';

import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <FooterContainer>
      <Typography variant="h5">
        {t('copyright')}
      </Typography>
      <SocialMediaContainer>
        <IconButton
          color="inherit"
          aria-label="instagram"
          href='https://www.instagram.com/lupai.de/'
          target='blank'>
          <InstagramIcon />
        </IconButton>
      </SocialMediaContainer>
    </FooterContainer>
  );
};

export default Footer;
