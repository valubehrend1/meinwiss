import React from 'react';

import { Box, CardContent, Typography } from '@mui/material';

import {
  WhatIsLupaiTextContainer,
  StarsIcon,
  Title,
  TitleSegment,
  WhatIsLupaiText,
  LearnMoreButton,
  CardsContainer,
  CardDescription,
  StyledCard,
  ButtonContainer
} from './WhatIsLupaiStyles';

import { cardsData } from './CardsContent';

import { SectionMainContainer } from './WhatIsLupaiStyles';

const WhatIsLupaiSection: React.FC = () => {
  return (
    <SectionMainContainer>
      <Box sx={{ width: '100%' }}>
        <WhatIsLupaiTextContainer className='what-is-lupai-text-container'>
          <StarsIcon />
          <WhatIsLupaiText>What is Lupai?</WhatIsLupaiText>
        </WhatIsLupaiTextContainer>
        <Title>
          <TitleSegment>LUPAI is an application designed</TitleSegment>
          <TitleSegment>to help you understand German</TitleSegment>
          <TitleSegment> bureaucracy and know your rights.</TitleSegment>
        </Title>
      </Box>

      <CardsContainer className='cards-container'>
        {cardsData.map((card, index) => (
          <StyledCard key={index} elevation={0}>
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
      <ButtonContainer>
        <LearnMoreButton variant='contained' color='secondary'>Learn more about LUPAI</LearnMoreButton>
      </ButtonContainer>
    </SectionMainContainer>
  );
};

export default WhatIsLupaiSection;
