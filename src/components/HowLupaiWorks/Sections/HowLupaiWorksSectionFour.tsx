import React from 'react';
import { Grid, CardContent, Box, Typography } from '@mui/material';

import {
  MainCard,
  StyledGridContainer,
  StyledGridItem,
  CenteredCardContent
} from '../HowlupaiWorksSectionStyles';


import theme, { orange } from '../../../theme';

const HowLupaiWorksSectionFour: React.FC = () => {
  return (
    <>
      <StyledGridContainer container>

        <StyledGridItem xs={12} md={6}>

          <MainCard elevation={3}>
            <Grid container spacing={2} sx={{ width: '100%' }}>
              <CardContent sx={{ width: '100%' }}>
                <CenteredCardContent item xs={12}>
                  <Typography variant='h4' sx={{ textAlign: 'center' }}>
                    Otherwise you can <span style={{ color: orange, textDecoration: 'underline' }}>save this conversation as a PDF</span>
                  </Typography>
                  <Typography variant='h4' sx={{ textAlign: 'center' }}>
                    and start a new search
                  </Typography>
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
                  Want to save Lupai's answers
                </Typography>
                <Typography variant='h3'>
                  <span>for later?</span>
                  <span style={{ color: orange }}> Download </span>
                  <span>the chat</span>
                </Typography>
              </Box>
              <Typography>
                Since Lupai doesn't ask you to log in to ask a question, it can't save your chat history. To keep your answers, you need to download them. You will find a link to do this in every chat.
              </Typography>
            </StyledGridItem>
          </Grid>
        </Grid>


      </StyledGridContainer >
    </ >
  );
};

export default HowLupaiWorksSectionFour;
