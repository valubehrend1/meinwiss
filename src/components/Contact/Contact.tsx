import React from 'react';
import { Typography, Grid, Box } from '@mui/material';

import { MainContainer, StyledTextField, StyledButton, GradientWrapper, FormContainer, GridImageContainer, FirstColumn, SecondColumn } from './ContactStyles';

import handsPhoto from '../../assets/hands.jpg';
import lookingPhoto from '../../assets/looking-phone.jpg';

import { useTranslation } from 'react-i18next';

const images = [
  handsPhoto,
  lookingPhoto,
];

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <MainContainer xs={12} className='contact-main-grid-container'>

      <Grid item xs={12} md={6} sx={{ width: '100%' }} className='form-grid-container'>
        <Typography variant="h1">
          {t('get_in_touch_message')}
        </Typography>
        <Typography variant="h1" sx={{ mb: 4, fontFamily: 'MartinaPlantijn' }}>
          {t('get_in_touch_message_second')}
        </Typography>
        <Typography variant="h4" >
          {t('we_are_here_to_help')} {/* falta en es y de */}
        </Typography>
        <Typography variant="h4" sx={{ mb: 4 }}>
          {t('fill_the_form')} {/* falta en es y de */}
        </Typography>

        <FormContainer>
          <GradientWrapper>
            <StyledTextField
              fullWidth
              variant="outlined"
              placeholder="Name"
            />
          </GradientWrapper>

          <GradientWrapper>
            <StyledTextField
              fullWidth
              variant="outlined"
              placeholder="Email"
            />
          </GradientWrapper>

          <GradientWrapper>
            <StyledTextField
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              placeholder={t('type_your_message')} // falta en es y de
            />
          </GradientWrapper>
          <StyledButton variant="contained">
            {t('send_message')} {/* falta en es y de */}
          </StyledButton>
        </FormContainer>
      </Grid>

      <Grid item xs={12} md={6} sx={{ width: '100%' }}>
        <GridImageContainer className='image-grid-container'>
          <FirstColumn className='first-column'>
            <Box>
              <img src={images[0]} alt={images[0]} />
            </Box>
            <Box>
              <img src={images[1]} alt={images[1]} />
            </Box>
          </FirstColumn>

          <SecondColumn className='second-column'>
            <Typography variant="h3">
              {t('your_ai_guidance_first')} {/* falta en es y de */}
            </Typography>
            <Typography variant="h3">
              {t('your_ai_guidance_second')} {/* falta en es y de */}
            </Typography>
          </SecondColumn>
        </GridImageContainer>
      </Grid>

    </MainContainer>
  );
};

export default Contact;