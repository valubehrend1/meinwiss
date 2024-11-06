import React from 'react';
import { Grid, CardContent, Box, Typography } from '@mui/material';

import {
  MainCard,
  GradientBorderBox,
  GradientBorderBoxTop,
  QuestionsTextContainer,
  StyledGridContainer,
  StyledGridItem,
  CenteredCardContent
} from '../HowlupaiWorksSectionStyles';

import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

import theme, { orange } from '../../../theme';

const HowLupaiWorksSectionTwo: React.FC = () => {
  return (
    <>
      <StyledGridContainer container xs={12}>

        <StyledGridItem xs={12} md={6}>

          <MainCard elevation={3}>
            <Grid container spacing={2} sx={{ width: '100%' }}>
              <CardContent sx={{ width: '100%' }}>
                <CenteredCardContent item xs={12}>
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
                </CenteredCardContent>
              </CardContent>
            </Grid>
          </MainCard>
        </StyledGridItem>

        <Grid xs={12} md={5} sx={{ display: 'flex' }}>
          <Grid container spacing={2} sx={{ width: '100%' }}>
            <StyledGridItem item xs={12}>
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
            </StyledGridItem>
          </Grid>
        </Grid>


      </StyledGridContainer >
    </ >
  );
};

export default HowLupaiWorksSectionTwo;
