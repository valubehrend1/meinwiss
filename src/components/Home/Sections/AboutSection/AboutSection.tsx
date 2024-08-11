import React from 'react';
import { Box, CardContent, Typography } from '@mui/material';
import {
  SectionMainContainer,
  LupaiFeaturesTextContainer,
  StarsIcon,
  Title,
  FeaturesText,
  CardsContainer,
  CardDescription,
  StyledCard,
} from './AboutSectionStyles';
import { cardsData } from './CardsContent';

const AboutSection: React.FC = () => {
  return (
    <SectionMainContainer>
      <Box sx={{ width: '100%' }}>
        <LupaiFeaturesTextContainer>
          <StarsIcon />
          <FeaturesText>What are Lupai features?</FeaturesText>
        </LupaiFeaturesTextContainer>
        <Title>
          What you can expect from Lupai
        </Title>
      </Box>

      <CardsContainer className='cards-container-about-section'>
        {cardsData.map((card, index) => (
          <StyledCard key={index} elevation={0} className='card-about-section'>
            <CardContent>
              <Box>
                {card.icon}
                <Typography variant='h3' sx={{ marginTop: '16px' }}>
                  {card.title}
                </Typography>
                <Typography variant='h3' sx={{ fontFamily: 'MartinaPlantijn' }}>
                  {card.secondTitle}
                </Typography>
              </Box>
              <CardDescription variant="h4">
                {card.description}
              </CardDescription>
            </CardContent>
          </StyledCard>
        ))}
      </CardsContainer>
    </SectionMainContainer>
  );
};

export default AboutSection;
