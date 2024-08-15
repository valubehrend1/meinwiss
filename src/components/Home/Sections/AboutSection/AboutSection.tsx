import React from 'react';
import { Grid, CardContent, Typography, Box } from '@mui/material';
import {
  SectionMainContainer,
  LupaiFeaturesTextContainer,
  StarsIcon,
  Title,
  FeaturesText,
  CardDescription,
  StyledCard,
  StyledCardContent,
} from './AboutSectionStyles';
import { cardsData } from './CardsContent';

import { useTranslation } from 'react-i18next';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <SectionMainContainer>
      <Grid container spacing={2} sx={{ width: '100%' }}>
        <Grid item xs={12}>
          <LupaiFeaturesTextContainer>
            <StarsIcon />
            <FeaturesText>{t('lupai_features')}</FeaturesText>
          </LupaiFeaturesTextContainer>
          <Title>
            {t('what_to_expect_from_lupai')}
          </Title>
        </Grid>

        <Grid item xs={12} container spacing={2}>
          {cardsData.map((card, index) => (
            <Grid item xs={12} sm={12} md={6} key={index}>
              <StyledCard elevation={0}>
                <CardContent>
                  <StyledCardContent>
                    <Box>
                      {card.icon}
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography variant='h3' sx={{ marginTop: '16px' }}>
                        {card.title}
                      </Typography>
                      <Typography variant='h3' sx={{ fontFamily: 'MartinaPlantijn' }}>
                        {card.secondTitle}
                      </Typography>
                      <CardDescription variant="h4">
                        {card.description}
                      </CardDescription>
                    </Box>
                  </StyledCardContent>

                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </SectionMainContainer>
  );
};

export default AboutSection;
