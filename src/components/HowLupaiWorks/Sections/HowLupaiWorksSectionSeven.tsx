import React from 'react';

import { Grid, Box, Typography } from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import {
  LookingForACommunityCard,
  StyledGridContainer,
  StyledGridItem,
  StyledGreenCardSectionSeven,
  StyledGradientCardSectionSeven,
  StyledGreenCardContent,
  StyledGradientCardContent,
  FAQSLink
} from '../HowlupaiWorksSectionStyles';

import { useNavigate } from 'react-router-dom';

import theme from '../../../theme';

const HowLupaiWorksSectionSeven: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledGridContainer container>

        <Grid item xs={12} md={5} sx={{ display: 'flex' }}>
          <Grid container spacing={2} sx={{ width: '100%' }}>
            <StyledGridItem item xs={12}>
              <Box>
                <Typography variant='h3' sx={{ color: theme.palette.primary.main }}>
                  Do you have more questions or want to know how the technology behind Lupai
                </Typography>
                <Typography variant='h3'>
                  works? Check out the
                  <FAQSLink onClick={() => navigate('/about')}> FAQs.</FAQSLink>
                </Typography>
              </Box>
              <Typography>
                In the Frequently Asked Questions we explain various aspects of Lupai, such as how the AI works, which technologies are used, how the privacy of your questions is protected, and more.
              </Typography>
            </StyledGridItem>
          </Grid>
        </Grid>


        <Grid item xs={12} md={6}>
          <LookingForACommunityCard elevation={3}>
            <StyledGreenCardSectionSeven>
              <StyledGreenCardContent>
                <Typography variant='h4'>Which AI technologies does Lupai use? </Typography>
                <AddCircleIcon sx={{ fontSize: '50px', color: '#FFF' }} />
              </StyledGreenCardContent>
            </StyledGreenCardSectionSeven>
            <StyledGradientCardSectionSeven >
              <StyledGradientCardContent>
                <Typography variant='h4'>Lupai combines different AI technologies and implements the most suitable state-of-the-art technology for each task. It is built in a modular way, which makes it easy to change the different modules according to the technical progress... </Typography>
              </StyledGradientCardContent>
            </StyledGradientCardSectionSeven>
          </LookingForACommunityCard>
        </Grid>

      </StyledGridContainer >
    </ >
  );
};

export default HowLupaiWorksSectionSeven;
