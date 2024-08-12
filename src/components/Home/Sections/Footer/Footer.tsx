import React from 'react';

import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

// Styled components
const FooterContainer = styled(Box)({
  backgroundColor: '#00301E', // Dark green background
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  fontSize: '14px'
});

const SocialMediaContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center'
});

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Typography variant="body2">
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

