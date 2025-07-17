import React from 'react';
import { Grid, CardContent, Box, Typography } from '@mui/material';

import {
  MainCard,
  StyledGridContainer,
  StyledGridItem,
  CenteredCardContent
} from '../HowlupaiWorksSectionStyles';

import { useTranslation } from 'react-i18next';


import theme, { orange } from '../../../../theme';

const HowLupaiWorksSectionFour: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <StyledGridContainer container>

        <Grid item xs={12} md={5} sx={{ display: 'flex' }}>
          <Grid container spacing={2} sx={{ width: '100%' }}>
            <StyledGridItem item xs={12}>
              <Box>
                <Typography variant='h3' sx={{ color: theme.palette.primary.main }}>
                  {t('save_lupai_answers')}
                </Typography>
                <Typography variant='h3'>
                  <span> {t('download_chat.for_later')}</span>
                  <span style={{ color: orange }}> {t('download_chat.download')} </span>
                </Typography>
              </Box>
              <Typography>
                {t('cant_save_chat')}
              </Typography>
            </StyledGridItem>
          </Grid>
        </Grid>


        <StyledGridItem item xs={12} md={6}>
          <MainCard elevation={3}>
            <Grid container spacing={2} sx={{ width: '100%' }}>
              <CardContent sx={{ width: '100%' }}>
                <CenteredCardContent item xs={12}>
                  <Typography variant='h4' sx={{ textAlign: 'center' }}>
                    {t('otherwise')} <span style={{ color: orange, textDecoration: 'underline' }}>{t('save_conversation_pdf')}</span>
                  </Typography>
                  <Typography variant='h4' sx={{ textAlign: 'center' }}>
                    {t('start_a_new_search')}
                  </Typography>
                </CenteredCardContent>
              </CardContent>
            </Grid>
          </MainCard>
        </StyledGridItem>

      </StyledGridContainer >
    </ >
  );
};

export default HowLupaiWorksSectionFour;
