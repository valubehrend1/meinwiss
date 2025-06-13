import React from 'react';

import { FooterContainer, SocialMediaContainer } from './FooterStyles';

import { IconButton, Typography, Box } from '@mui/material/';
import { styled } from '@mui/system/';
import InstagramIcon from '@mui/icons-material/Instagram';

import { useTranslation } from 'react-i18next';

const Link = styled('a')({
  color: '#fff'
});

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <FooterContainer>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h5">
          {t('copyright')}
        </Typography>
        <Link
          href="/impressum" target="_blank" rel="noreferrer">
          Impressum
        </Link>
        <Link href="/terms" target="_blank" rel="noreferrer">
          {t('data_privacy')}
        </Link>
      </Box>
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
