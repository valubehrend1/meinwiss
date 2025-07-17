import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {
  ProjectsContainer,
  ProjectCard,
  LogosTextContainer,
  LogosText,
  StarsIcon,
  ProjectsMakingLupaiTitle,
  LohanaLogo,
  AurekaLogoImage,
  CardContent,
  LearnMoreButtonContainer,
  LearnMoreButton
} from './ProjectsMakingLupaiStyles';
import AurekaLogo from '../../../../assets/Logos/Aureka.png';
import LohanaBerkins from '../../../../assets/Logos/LohanaBerkins.png'

import { useTranslation } from 'react-i18next'

const ProjectsMakingLupai: React.FC = () => {
  const { t } = useTranslation()

  const handleRedirectoToLohana = () => {
    window.open('https://www.ceplohanaberkins.org/es/home-es/', '_blank')
  }

  const handleRedirectoToAureka = () => {
    window.open('https://www.aureka.ai/', '_blank')
  }
  return (
    <ProjectsContainer>
      <LogosTextContainer>
        <StarsIcon />
        <LogosText>{t('who_support_us')}</LogosText>
      </LogosTextContainer>
      <ProjectsMakingLupaiTitle variant="h2" >{t('projects_making_lupai')}</ProjectsMakingLupaiTitle>
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 12 }}>
        <Grid item xs={12} md={6}>
          <ProjectCard>
            <LohanaLogo src={LohanaBerkins} alt="logo-lohana-berkins" />
            <CardContent>
              <Typography variant="h3">{t('center_for_popular_education')}</Typography>
              <Typography variant="h4" sx={{ my: 2 }}>
                {t('center_for_popular_education_description')}
              </Typography>
              <Box sx={{ display: 'flex' }}>
                <LearnMoreButton variant="contained" onClick={handleRedirectoToLohana}>
                  {t('more_information')}
                  <ArrowForwardIcon />
                </LearnMoreButton>
              </Box>
            </CardContent>
          </ProjectCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <ProjectCard>
            <CardContent>
              <AurekaLogoImage src={AurekaLogo} alt="logo-lohana-berkins" />
              <Typography variant="h3">aureka</Typography>
              <Typography variant="h4" /* sx={{ my: 2 }} */>
                {t('aureka_description')}
              </Typography>
              <LearnMoreButtonContainer>
                <LearnMoreButton variant="contained" onClick={handleRedirectoToAureka}>
                  {t('more_information')}
                  <ArrowForwardIcon />
                </LearnMoreButton>
              </LearnMoreButtonContainer>
            </CardContent>
          </ProjectCard>
        </Grid>
      </Grid>
    </ProjectsContainer>
  );
};

export default ProjectsMakingLupai;
