import React from 'react';

import { Grid, Box, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import {
  SourcesCard,
  StyledGridContainer,
  StyledGridItem,
  ReferenceCardOrange,
  ReferenceCardPurple,
  ReferenceCardGold
} from '../HowlupaiWorksSectionStyles';

import { useTranslation } from 'react-i18next';


import theme from '../../../../theme';

const HowLupaiWorksSectionFive: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <StyledGridContainer container>

        <Grid item xs={12} md={6}>
          <SourcesCard elevation={3}>
            <ReferenceCardOrange>
              <Typography>State Laws</Typography>
              <ArrowForwardIosIcon sx={{ color: '#FFF' }} />
            </ReferenceCardOrange>
            <ReferenceCardPurple>
              <Typography>Government Ministeries</Typography>
              <ArrowForwardIosIcon sx={{ color: '#FFF' }} />

            </ReferenceCardPurple>
            <ReferenceCardGold>
              <Typography>Consultancy services</Typography>
              <ArrowForwardIosIcon sx={{ color: '#FFF' }} />
            </ReferenceCardGold>
          </SourcesCard>
        </Grid>

        <Grid item xs={12} md={5} sx={{ display: 'flex' }}>
          <Grid container spacing={2} sx={{ width: '100%' }}>
            <StyledGridItem item xs={12}>
              <Box>
                <Typography variant='h3' sx={{ color: theme.palette.primary.main }}>
                  {t('need_more_info')}
                </Typography>
                <Typography variant='h3'>
                  {t('check_the_original')}
                </Typography>
              </Box>
              <Typography>
                {t('sources_info')}
              </Typography>
            </StyledGridItem>
          </Grid>
        </Grid>

      </StyledGridContainer >
    </ >
  );
};

export default HowLupaiWorksSectionFive;
