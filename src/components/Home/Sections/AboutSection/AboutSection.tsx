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

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import { orange } from '../../../../theme';

import { useTranslation } from 'react-i18next';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  const cardsData = [
    {
      icon: <ContactSupportRoundedIcon sx={{ fontSize: '60px', color: orange, marginRight: '32px' }} />,
      title: t('multilingual_title'),
      description: t('multilingual_description')
    },
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: '60px', color: orange, marginRight: '32px' }} />,
      title: t('reliable_info_title'),
      description: t('reliable_info_description')
    },
    {
      icon: <DonutLargeOutlinedIcon sx={{ fontSize: '60px', color: orange, marginRight: '32px' }} />,
      title: t('real_experiences_title'),
      description: t('real_experiences_description'),
    },
    {
      icon: <DonutLargeOutlinedIcon sx={{ fontSize: '60px', color: orange, marginRight: '32px' }} />,
      title: t('private_title'),
      description: t('private_description'),
    }
  ];

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
