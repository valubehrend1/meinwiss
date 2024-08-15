import React from 'react';

import { FooterContainer, SocialMediaContainer } from './FooterStyles';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Typography variant="h5">
        Copyright © 2024 Lupai | All Rights Reserved
      </Typography>
      <SocialMediaContainer>
        <IconButton color="inherit" aria-label="facebook">
          <FacebookIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="twitter">
          <TwitterIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="instagram">
          <InstagramIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="linkedin">
          <LinkedInIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="youtube">
          <YouTubeIcon />
        </IconButton>
      </SocialMediaContainer>
    </FooterContainer>
  );
};

export default Footer;

