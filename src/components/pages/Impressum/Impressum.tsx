import React from 'react';
import { Typography } from '@mui/material';

import { StyledDataPrivacy, Title } from '../../Chat/DataPrivacy/DataPrivacyStyles';
import { Container, InfoContainer } from './ImpressumStyles';

const Impressum: React.FC = () => {
  return (
    <Container>
      <StyledDataPrivacy>
        <Typography variant="h3" sx={{ fontWeight: '900' }}>
          Impressum
        </Typography>
      </StyledDataPrivacy>

      <InfoContainer>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Angaben gemäß § 5 TMG
        </Typography>
        <Title variant="h5" >
          aureka UG
        </Title>
        <Typography variant="h5" >
          Oranienstr. 46, 10969 Berlin
        </Typography>
        <Typography variant="h5" >
          Telefon: +49 1631385613
        </Typography>
        <Typography variant="h5" >
          E-Mail: info@lupai.de
        </Typography>
      </InfoContainer>
    </Container >
  );
};

export default Impressum;
