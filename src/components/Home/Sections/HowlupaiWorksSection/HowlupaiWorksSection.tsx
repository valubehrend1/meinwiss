import React from 'react';
import { Grid, CardContent, Box } from '@mui/material';

import {
  SectionMainContainer,
  HowItWorksTextContainer,
  StarsIcon,
  Title,
  HowItWorksText,
  MainCard,
  LeftGrid,
  LeftCardText,
  LeftCardTextOrange,
  StyledSearchIcon,
  OrangeQuestion,
  GradientBorderBox,
  GradientBorderBoxTop,
  QuestionsTextContainer,
  ButtonContainer,
  SearchMoreButton,
  PurpleQuestion
} from './HowlupaiWorksSectionStyles';

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
      <MainCard>
        <CardContent>
          <Grid container spacing={2} sx={{ width: '100%' }}>
            <LeftGrid item xs={6}>
              <Box sx={{ textAlign: 'center' }}>
                <LeftCardText>
                  Ask Lupai like you would
                </LeftCardText>
                <LeftCardTextOrange>
                  ask a friend
                </LeftCardTextOrange>
              </Box>
            </LeftGrid>

            <Grid item xs={6}>
              <GradientBorderBox>
                <GradientBorderBoxTop>
                  <StyledSearchIcon />

                  <QuestionsTextContainer>
                    <OrangeQuestion>
                      “¿Qué papeles necesito para la visa de estudiante?”,
                    </OrangeQuestion>
                    <PurpleQuestion>
                      "Wie beantrage ich die Rote Karte?”
                    </PurpleQuestion>
                  </QuestionsTextContainer>

                </GradientBorderBoxTop>
              </GradientBorderBox>
              <ButtonContainer>
                <SearchMoreButton variant='contained' color='secondary'>Search</SearchMoreButton>
              </ButtonContainer>
            </Grid>
          </Grid>
        </CardContent>
      </MainCard>
    </SectionMainContainer >
  );
};

export default HowlupaiWorksSection;
