import React from 'react';
import { CardContent, Box } from '@mui/material';

import {
  SectionMainContainer,
  HowItWorksTextContainer,
  StarsIcon,
  Title,
  HowItWorksText,
  MainCardMobile,
  LeftGrid,
  LeftCardText,
  LeftCardTextOrange,
  SearchMoreButton,
} from './HowlupaiWorksSectionStyles';
import { ButtonContainer } from '../WhatIsLupaiSection/WhatIsLupaiStyles';

const HowlupaiWorksSection: React.FC = () => {

  const cardData = [
    {
      primaryText: "Ask Lupai like you would",
      secondaryText: "ask a friend"
    },
    {
      primaryText: "Not satisfied with the answer?",
      secondaryText: "Try to edit your question"
    },
    {
      primaryText: "Want to save Lupai’s answer for later?",
      secondaryText: "Download the chat"
    }
  ];


  return (
    <SectionMainContainer>
      <HowItWorksTextContainer>
        <StarsIcon />
        <HowItWorksText>You don’t know how to use AI?</HowItWorksText>
      </HowItWorksTextContainer>
      <Title>
        How Lupai works
      </Title>
      {cardData.map((card, index) => (
        <MainCardMobile key={index}>
          <CardContent>
            <LeftGrid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
                <LeftCardText>
                  {card.primaryText}
                </LeftCardText>
                <LeftCardTextOrange>
                  {card.secondaryText}
                </LeftCardTextOrange>
              </Box>
            </LeftGrid>
          </CardContent>
        </MainCardMobile>
      ))}

      <ButtonContainer>
        <SearchMoreButton variant='contained' color='secondary'>Search</SearchMoreButton>
      </ButtonContainer>
    </SectionMainContainer >
  );
};

export default HowlupaiWorksSection;
