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

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';

import { useTranslation } from 'react-i18next';

import { useNavigate } from 'react-router-dom';

import { SectionMainContainer } from './WhatIsLupaiStyles';

const WhatIsLupaiSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const cardsData = [
    {
      icon: <ContactSupportRoundedIcon sx={{ fontSize: '40px' }} />,
      title: t('find_info_first_part'),
      description: t('find_info_description'),
      cardButtonText: t('join_as_a_beta_tester')
    },
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: '40px' }} />,
      title: t('for_support_seekers_first_part'),
      description: t('for_support_seekers_description'),
      cardButtonText: t('join_waitlist')
    },
    {
      icon: <DonutLargeOutlinedIcon sx={{ fontSize: '40px' }} />,
      title: t('for_organisations_first_part'),
      description: t('for_organisations_description'),
      cardButtonText: t('join_waitlist')
    }
  ];

  const handleNavigateToAboutUs = () => {
    navigate('/contact');
  };

  return (
    <SectionMainContainer>
      <Box sx={{ width: '100%' }}>
        <WhatIsLupaiTextContainer className='what-is-lupai-text-container'>
          <StarsIcon />
          <WhatIsLupaiText>{t('what_is_lupai')}</WhatIsLupaiText>
        </WhatIsLupaiTextContainer>
        <Title>
          <TitleSegment>{t('what_is_lupai_answer_first')}</TitleSegment>
          <TitleSegment>{t('what_is_lupai_answer_second')}</TitleSegment>
          <TitleSegment>{t('what_is_lupai_answer_third')}</TitleSegment>
          <TitleSegment>{t('what_is_lupai_answer_fourth')}</TitleSegment>
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
              </Box>
              <CardDescription variant="h4">
                {card.description}
              </CardDescription>
              <LearnMoreButton
                variant='contained'
                color='secondary'
                onClick={handleNavigateToAboutUs}
              >
                {card.cardButtonText}
              </LearnMoreButton>
            </CardContent>
          </StyledCard>
        ))}
      </CardsContainer>
      <ButtonContainer>
      </ButtonContainer>
    </SectionMainContainer>
  );
};

export default WhatIsLupaiSection;
