import React from 'react';

import { Grid, Box, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import {
  SourcesCard,
  StyledGridContainer,
  StyledGridItem,
  ReferenceCardOrange,
  ReferenceCardPurple,
  ReferenceCardGold
} from '../HowlupaiWorksSectionStyles';


import theme, { orange } from '../../../../../theme';

const HowLupaiWorksSectionFive: React.FC = () => {
  return (
    <>
      <StyledGridContainer container>

        <Grid xs={12} md={5} sx={{ display: 'flex' }}>
          <Grid container spacing={2} sx={{ width: '100%' }}>
            <StyledGridItem item xs={12}>
              <Box>
                <Typography variant='h3' sx={{ color: theme.palette.primary.main }}>
                  Need more information?
                </Typography>
                <Typography variant='h3'>
                  Check the original <span style={{ color: orange }}>sources</span>
                </Typography>
              </Box>
              <Typography>
                Below each Lupai answer, the fragments of the sources from which Lupai extracted the information are listed with their respective links. You can navigate to any of them to explore further or to check if the Lupai version is up to date. There are three types of data, marked with different colors: laws, official information provided by ministries, and commented information published by reliable portals.
              </Typography>
            </StyledGridItem>
          </Grid>
        </Grid>


        <Grid xs={12} md={6}>
          <SourcesCard elevation={3}>
            <ReferenceCardOrange>
              <Typography>State Laws</Typography>
              <ArrowForwardIosIcon sx={{ color: '#FFF' }} />
            </ReferenceCardOrange>
            <ReferenceCardPurple>
              <Typography>Government Ministeries</Typography>
              <ArrowForwardIosIcon sx={{ color: '#FFF' }} />

            </ReferenceCardPurple>
            <ReferenceCardGold>
              <Typography>Consultancy services</Typography>
              <ArrowForwardIosIcon sx={{ color: '#FFF' }} />
            </ReferenceCardGold>
          </SourcesCard>
        </Grid>


      </StyledGridContainer >
    </ >
  );
};

export default HowLupaiWorksSectionFive;
