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

/* import { cardsData } from './CardsContent'; */

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
      secondTitle: t('find_info_second_part'),
      description: t('find_info_description')
    },
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: '40px' }} />,
      title: t('answer_doubts_fitst_part'),
      secondTitle: t('answer_doubts_second_part'),
      description: t('answer_doubts_description')
    },
    {
      icon: <DonutLargeOutlinedIcon sx={{ fontSize: '40px' }} />,
      title: t('connect_with_institutions_first_part'),
      secondTitle: t('connect_with_institutions_second_part'),
      description: t('connect_with_institutions_description')
    }
  ];

  const handleNavigateToAboutUs = () => {
    navigate('/about');
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
        <LearnMoreButton
          variant='contained'
          color='secondary'
          onClick={handleNavigateToAboutUs}
        >
          {t('learn_more_about_lupai')}
        </LearnMoreButton>
      </ButtonContainer>
    </SectionMainContainer>
  );
};

export default WhatIsLupaiSection;
