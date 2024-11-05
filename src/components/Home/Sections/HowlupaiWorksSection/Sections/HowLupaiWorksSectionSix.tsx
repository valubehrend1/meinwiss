import React from 'react';

import { Grid, Box, Typography } from '@mui/material';
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

import {
  LookingForACommunityCard,
  StyledGridContainer,
  StyledGridItem,
  StyledInnerCard
} from '../HowlupaiWorksSectionStyles';


import theme, { orange } from '../../../../../theme';

const HowLupaiWorksSectionSix: React.FC = () => {
  return (
    <>
      <StyledGridContainer container xs={12}>

        <Grid xs={12} md={6}>
          <LookingForACommunityCard elevation={3}>
            <StyledInnerCard>
              <Box sx={{ display: 'flex' }}>
                <Typography variant='h3'>Are you looking for a supportive community around this topic? </Typography>
                <BackHandOutlinedIcon sx={{ fontSize: '50px' }} />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='h4'>Check these organisations</Typography>
                <ArrowForwardOutlinedIcon />
              </Box>
            </StyledInnerCard>

          </LookingForACommunityCard>
        </Grid>


        <Grid xs={12} md={5} sx={{ display: 'flex' }}>
          <Grid container spacing={2} sx={{ width: '100%' }}>
            <StyledGridItem item xs={12}>
              <Box>
                <Typography variant='h3' sx={{ color: theme.palette.primary.main }}>
                  Do you need more help or connect with a community? Check out Lupai's
                </Typography>
                <Typography variant='h3' sx={{ color: orange }}>
                  recommendations
                </Typography>
              </Box>
              <Typography>
                Besides information sources, Lupai matches your question with organizations, initiatives and professionals working on topics related to your questions. For example, you can find recommendations for lawyers who specialize in migration and/or asylum or work-related issues, advice centers that can provide guidance on administrative procedures, and self-organized initiatives for social engagement to improve the living and working conditions of migrants and precarious workers.
              </Typography>
            </StyledGridItem>
          </Grid>
        </Grid>

      </StyledGridContainer >
    </ >
  );
};

export default HowLupaiWorksSectionSix;
