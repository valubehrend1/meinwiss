import React from 'react';

import { Grid, Box, Typography } from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import {
  LookingForACommunityCard,
  StyledGridContainer,
  StyledGridItem,
  StyledGreenCardSectionSeven,
  StyledGradientCardSectionSeven,
  StyledGreenCardContent,
  StyledGradientCardContent,
  FAQSLink
} from '../HowlupaiWorksSectionStyles';

import { useTranslation } from 'react-i18next';

import { useNavigate } from 'react-router-dom';

import theme from '../../../theme';

const HowLupaiWorksSectionSeven: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <StyledGridContainer container>

        <Grid item xs={12} md={5} sx={{ display: 'flex' }}>
          <Grid container spacing={2} sx={{ width: '100%' }}>
            <StyledGridItem item xs={12}>
              <Box>
                <Typography variant='h3' sx={{ color: theme.palette.primary.main }}>
                  {t('need_more_info_extended')}
                </Typography>
                <Typography variant='h3'>
                  {t('check_out_the_faqs')}
                  <FAQSLink onClick={() => navigate('/about')}> FAQs.</FAQSLink>
                </Typography>
              </Box>
              <Typography>
                {t('what_the_faqs_are')}
              </Typography>
            </StyledGridItem>
          </Grid>
        </Grid>


        <Grid item xs={12} md={6}>
          <LookingForACommunityCard elevation={3}>
            <StyledGreenCardSectionSeven>
              <StyledGreenCardContent>
                <Typography variant='h4'>{t('which_technology_use')} </Typography>
                <AddCircleIcon sx={{ fontSize: '50px', color: '#FFF' }} />
              </StyledGreenCardContent>
            </StyledGreenCardSectionSeven>
            <StyledGradientCardSectionSeven >
              <StyledGradientCardContent>
                <Typography variant='h4'>{t('lupai_combines_technology')} </Typography>
              </StyledGradientCardContent>
            </StyledGradientCardSectionSeven>
          </LookingForACommunityCard>
        </Grid>

      </StyledGridContainer >
    </ >
  );
};

export default HowLupaiWorksSectionSeven;
