import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import {
  SectionMainContainer,
  HowItWorksTextContainer,
  StarsIcon,
  Title,
  HowItWorksText,
  GradientBorderBox,
  GradientBorderBoxTop,
  QuestionsTextContainer,
  ButtonContainer,
  SearchMoreButton
} from './HowlupaiWorksSectionStyles';
import theme, { orange, purple } from '../../../../theme';

const HowlupaiWorksSection: React.FC = () => {
  return (
    <SectionMainContainer>

      <HowItWorksTextContainer>
        <StarsIcon />
        <HowItWorksText>You don’t know how to use AI?</HowItWorksText>
      </HowItWorksTextContainer>
      <Title>
        How Lupai works
      </Title>
      <Card sx={{ padding: '4rem 5.75rem', borderRadius: '1.25rem', width: '100%' }}>
        <CardContent>
          <Grid container spacing={2} sx={{ width: '100%' }}>
            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ color: theme.palette.primary.main, fontSize: '36px', lineHeight: '42px' }}>
                  Ask Lupai like you would
                </Typography>
                <Typography sx={{ color: '#F1683F', fontSize: '36px', lineHeight: '42px' }}>
                  ask a friend
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <GradientBorderBox>
                <GradientBorderBoxTop>
                  <SearchIcon sx={{ color: theme.palette.primary.main, fontSize: '30px' }} />

                  <QuestionsTextContainer>
                    <Typography sx={{ color: orange, fontSize: '18px' }}>
                      “¿Qué papeles necesito para la visa de estudiante?”,
                    </Typography>
                    <Typography sx={{ color: purple, fontSize: '18px' }}>
                      "Wie beantrage ich die Rote Karte?”
                    </Typography>
                  </QuestionsTextContainer>

                </GradientBorderBoxTop>
              </GradientBorderBox>
              <ButtonContainer>
                <SearchMoreButton variant='contained' color='secondary'>Search</SearchMoreButton>
              </ButtonContainer>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </SectionMainContainer >
  );
};

export default HowlupaiWorksSection;
