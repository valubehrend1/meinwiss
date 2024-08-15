
import React from 'react';

import { Typography } from '@mui/material';

import DescriptionIcon from '@mui/icons-material/Description';

import { GerInTouchMainContainer, ContactButton } from './GetInTouchStyles';

const GetInTouch: React.FC = () => {
  return (
    <GerInTouchMainContainer>
      <DescriptionIcon sx={{ fontSize: '36px' }} />
      <Typography variant='h3'>Get in touch</Typography>
      <Typography variant='h5' sx={{ textAlign: 'center' }}>We will respond your enquiries as soon as possible</Typography>
      <ContactButton variant='contained'>Contact</ContactButton>
    </GerInTouchMainContainer>
  );
}

export default GetInTouch;