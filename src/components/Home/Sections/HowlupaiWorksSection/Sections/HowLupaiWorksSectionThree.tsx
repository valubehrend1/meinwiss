import React from 'react';
import { Grid, CardContent, Box, Typography } from '@mui/material';

import {
  MainCard,
  NewSearchButton,
  GradientBorderBox,
  GradientBorderBoxTop,
  QuestionsTextContainer,
} from '../HowlupaiWorksSectionStyles';


import { useTranslation } from 'react-i18next';
import theme, { orange } from '../../../../../theme';

const HowlupaiWorksSectionThree: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>

      <Grid container xs={12} sx={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '120pxx' }}>

        <Grid xs={5} sx={{ display: 'flex' }}>
          <Grid container spacing={2} sx={{ width: '100%' }}>
            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <Box>
                <Typography variant='h3' sx={{ color: theme.palette.primary.main }}>
                  Want to move on to another
                </Typography>
                <Typography variant='h3' sx={{ color: orange }}>
                  topic? Start a new question
                </Typography>
              </Box>
              <Typography>
                When you are done with a question and want to move on to another, select the "New Question" option. This will open a new empty conversation to prevent Lupai from getting mixed up with the context of the previous question. But before you do that, be sure to download the answer as a PDF so you can save it if you want to. Don't worry, you will be asked to confirm that you want to move to a new question before deleting the chat.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid xs={6} sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

          <MainCard>
            <Grid container spacing={2} sx={{ width: '100%' }}>
              <CardContent sx={{ width: '100%' }}>
                <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 'center' }}>
                  <Typography variant='h4' sx={{ textAlign: 'center' }}>
                    When you start a new search, your current search will disappear and you will not be able to read the results again.                  </Typography>
                  <Typography variant='h4' sx={{ textAlign: 'center', marginTop: '1rem' }}>
                    Are you sure you want to start a new search?
                  </Typography>

                  <Box sx={{ display: 'flex', gap: '1rem' }}>
                    <NewSearchButton variant='contained' color='primary'>{t('search')}</NewSearchButton>

                    <Box sx={{ marginTop: '2rem' }}>
                      <GradientBorderBox>
                        <GradientBorderBoxTop>

                          <QuestionsTextContainer>
                            <Typography variant='h5'>
                              Download this conversation
                            </Typography>
                          </QuestionsTextContainer>

                        </GradientBorderBoxTop>
                      </GradientBorderBox>
                    </Box>

                  </Box>
                </Grid>
              </CardContent>
            </Grid>
          </MainCard>
        </Grid>

      </Grid >
    </ >
  );
};

export default HowlupaiWorksSectionThree;
