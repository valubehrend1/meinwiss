import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Typography, Grid, Box, Snackbar, Alert, CircularProgress, Backdrop } from '@mui/material';
import {
  MainContainer,
  StyledTextField,
  StyledButton,
  GradientWrapper,
  FormContainer,
  GridImageContainer,
  FirstColumn,
  SecondColumn
} from './ContactStyles';
import handsPhoto from '../../assets/hands.jpg';
import lookingPhoto from '../../assets/looking-phone.jpg';

import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';


const images = [handsPhoto, lookingPhoto];

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const [loading, setLoading] = useState(false);
  const [loadedImage, setLoadedImage] = useState(false);


  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      setLoading(true);
      try {
        const result = await emailjs.sendForm(
          'service_dq1jion',
          'template_yzgaxob',
          form.current,
          'sgzKXm1IE02oZoGlY'
        );

        console.log('SUCCESS!', result.text);
        setSnackbarMessage(t('Message sent successfully!'));
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
        setFormData({ from_name: '', from_email: '', message: '' }); // Reset state
        form.current.reset();
      } catch (error) {
        console.error('FAILED...', error);
        setSnackbarMessage(t('There was an error sending the message. Please try again later.'));
        setSnackbarSeverity('error');
      } finally {
        setLoading(false);
        setSnackbarOpen(true);
      }
    }
  };

  const handleCloseSnackbar = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <MainContainer className='contact-main-grid-container'>
      <Backdrop
        open={loading}
        sx={{
          zIndex: 1200,
          color: '#fff',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress color='secondary' />
      </Backdrop>
      <Grid item xs={12} md={6} sx={{ width: '100%' }} className='form-grid-container'>
        <Typography variant="h1">
          {t('get_in_touch_message')}
        </Typography>
        <Typography variant="h1" sx={{ mb: 4, fontFamily: 'MartinaPlantijn' }}>
          {t('get_in_touch_message_second')}
        </Typography>
        <Typography variant="h4">
          {t('we_are_here_to_help')}
        </Typography>
        <Typography variant="h4" sx={{ mb: 4 }}>
          {t('fill_the_form')}
        </Typography>
        <form ref={form} onSubmit={sendEmail}>
          <FormContainer>
            <GradientWrapper>
              <StyledTextField
                fullWidth
                variant="outlined"
                placeholder={t('name')}
                type='text'
                name='from_name'
                value={formData.from_name}
                onChange={handleChange}
                required
              />
            </GradientWrapper>

            <GradientWrapper>
              <StyledTextField
                fullWidth
                variant="outlined"
                placeholder={t('email')}
                type='email'
                name='from_email'
                value={formData.from_email}
                onChange={handleChange}
                required
              />
            </GradientWrapper>

            <GradientWrapper>
              <StyledTextField
                fullWidth
                variant="outlined"
                multiline
                rows={4}
                placeholder={t('type_your_message')}
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
              />
            </GradientWrapper>
            <StyledButton type="submit" variant="contained">
              {t('send_message')}
            </StyledButton>
          </FormContainer>
        </form>
      </Grid>

      <Grid item xs={12} md={6} sx={{ width: '100%' }}>
        <GridImageContainer className='image-grid-container'>
          <FirstColumn className='first-column'>
            <Box>
              <motion.img src={images[0]}
                alt={t('hands_image_alt')}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: loadedImage ? 1 : 0, scale: loadedImage ? 1 : 0.95 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                onLoad={() => setLoadedImage(true)} />
            </Box>
            <Box>
              <motion.img
                src={images[1]} alt={t('looking_phone_image_alt')}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: loadedImage ? 1 : 0, scale: loadedImage ? 1 : 0.95 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                onLoad={() => setLoadedImage(true)} />
            </Box>
          </FirstColumn>

          <SecondColumn className='second-column'>
            <Typography variant="h3">
              {t('your_ai_guidance_first')}
            </Typography>
            <Typography variant="h3">
              {t('your_ai_guidance_second')}
            </Typography>
          </SecondColumn>
        </GridImageContainer>
      </Grid>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </MainContainer>
  );
};

export default Contact;
