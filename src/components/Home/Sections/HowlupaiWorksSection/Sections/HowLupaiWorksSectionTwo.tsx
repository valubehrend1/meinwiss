import React from 'react';
import { Grid, CardContent, Box, Typography } from '@mui/material';

import {
  MainCard,
  GradientBorderBox,
  GradientBorderBoxTop,
  QuestionsTextContainer,
} from '../HowlupaiWorksSectionStyles';

import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

import theme, { orange } from '../../../../../theme';

const HowLupaiWorksSectionTwo: React.FC = () => {
  return (
    <>
      <Grid container xs={12} sx={{
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '120px',
        marginBottom: '120px'
      }}>

        <Grid xs={6} sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

          <MainCard>
            <Grid container spacing={2} sx={{ width: '100%' }}>
              <CardContent sx={{ width: '100%' }}>
                <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 'center' }}>
                  <BorderColorOutlinedIcon sx={{ fontSize: '2.25rem', marginBottom: '1.75rem' }} />
                  <Typography variant='h4' sx={{ textAlign: 'center' }}>
                    You are not satisfied with the answer?
                  </Typography>
                  <Typography variant='h4' sx={{ textAlign: 'center' }}>
                    Try to rephrase your question
                  </Typography>
                  <Box sx={{ marginTop: '2rem' }}>
                    <GradientBorderBox>
                      <GradientBorderBoxTop>

                        <QuestionsTextContainer>
                          <Typography variant='h5'>
                            Rephrase
                          </Typography>

                        </QuestionsTextContainer>

                      </GradientBorderBoxTop>
                    </GradientBorderBox>
                  </Box>
                </Grid>
              </CardContent>
            </Grid>
          </MainCard>
        </Grid>

        <Grid xs={5} sx={{ display: 'flex' }}>
          <Grid container spacing={2} sx={{ width: '100%' }}>
            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <Box>
                <Typography variant='h3' sx={{ color: theme.palette.primary.main }}>
                  Not satisfied with the answer?
                </Typography>
                <Typography variant='h3' sx={{ color: orange }}>
                  Try to rephrase
                </Typography>
              </Box>
              <Typography>
                When you are done with a question and want to move on to another, select the "New Question" option. This will open a new empty conversation to prevent Lupai from getting mixed up with the context of the previous question. But before you do that, be sure to download the answer as a PDF so you can save it if you want to. Don't worry, you will be asked to confirm that you want to move to a new question before deleting the chat.
              </Typography>
            </Grid>
          </Grid>
        </Grid>


      </Grid >
    </ >
  );
};

export default HowLupaiWorksSectionTwo;
