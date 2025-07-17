import React from 'react';
import { Grid, CardContent, Box, Typography } from '@mui/material';

import {
  MainCard,
  NewSearchButton,
  GradientBorderBox,
  GradientBorderBoxTop,
  QuestionsTextContainer,
  StyledGridContainer,
  StyledGridItem,
  CenteredCardContent
} from '../HowlupaiWorksSectionStyles';

import { useTranslation } from 'react-i18next';
import theme, { orange } from '../../../../theme';

const HowlupaiWorksSectionThree: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>

      <StyledGridContainer container >

        <StyledGridItem item xs={12} md={6}>

          <MainCard elevation={3}>
            <Grid container spacing={2} sx={{ width: '100%' }}>
              <CardContent sx={{ width: '100%' }}>
                <CenteredCardContent item xs={12}>
                  <Typography variant='h4' sx={{ textAlign: 'center' }}>
                    {t('new_search_warning')}</Typography>
                  <Typography variant='h4' sx={{ textAlign: 'center', marginTop: '1rem' }}>
                    {t('confirm_new_search')}
                  </Typography>

                  <Box sx={{ display: 'flex', gap: '1rem' }}>
                    <NewSearchButton variant='contained' color='primary'>{t('search')}</NewSearchButton>

                    <Box sx={{ marginTop: '2rem' }}>
                      <GradientBorderBox>
                        <GradientBorderBoxTop>

                          <QuestionsTextContainer>
                            <Typography variant='h5'>
                              {t('download_conversation')}
                            </Typography>
                          </QuestionsTextContainer>

                        </GradientBorderBoxTop>
                      </GradientBorderBox>
                    </Box>

                  </Box>
                </CenteredCardContent>
              </CardContent>
            </Grid>
          </MainCard>
        </StyledGridItem>


        <Grid item xs={12} md={5} sx={{ display: 'flex' }}>
          <Grid container spacing={2} sx={{ width: '100%' }}>
            <StyledGridItem item xs={12}>
              <Box>
                <Typography variant='h3' sx={{ color: theme.palette.primary.main }}>
                  {t('how_to_make_a_new_question_title_one')}
                </Typography>
                <Typography variant='h3' sx={{ color: orange }}>
                  {t('how_to_make_a_new_question_title_two')}
                </Typography>
              </Box>
              <Typography>
                {t('how_to_make_a_new_question_explanation')}
              </Typography>
            </StyledGridItem>
          </Grid>
        </Grid>

      </StyledGridContainer >
    </ >
  );
};

export default HowlupaiWorksSectionThree;
