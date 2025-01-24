import React from 'react';

import { Grid, Box, Typography } from '@mui/material';
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

import {
  LookingForACommunityCard,
  StyledGridContainer,
  StyledGridItem,
  StyledInnerCard
} from '../HowlupaiWorksSectionStyles';

import { useTranslation } from 'react-i18next';

import theme, { orange } from '../../../theme';

const HowLupaiWorksSectionSix: React.FC = () => {
  const { t } = useTranslation();
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
                <Typography variant='h3' sx={{ color: orange }}>
                  {t('need_more_info_extended_word')}
                </Typography>
              </Box>
              <Typography>
                {t('matching_people_with_orgas')}
              </Typography>
            </StyledGridItem>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <LookingForACommunityCard elevation={3}>
            <StyledInnerCard>
              <Box sx={{ display: 'flex' }}>
                <Typography variant='h3'>{t('supportive_offline_community')}</Typography>
                <BackHandOutlinedIcon sx={{ fontSize: '50px' }} />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='h4'> {t('check_the_original')}</Typography>
                <ArrowForwardOutlinedIcon />
              </Box>
            </StyledInnerCard>

          </LookingForACommunityCard>
        </Grid>

      </StyledGridContainer >
    </ >
  );
};

export default HowLupaiWorksSectionSix;
