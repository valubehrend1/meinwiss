import React from 'react';
import { Grid, CardContent, Box, Typography, Button } from '@mui/material';

import {
  MainCard,
  MainGridContaineSectionOne,
  StyledGridItem,
  CenteredCardContent,
  SectionMainContainer
} from '../HowLupaiWorks/HowlupaiWorksSectionStyles';

import {
  NotJustABotTitle,
  ItemsContainer,
  Item,
} from './LupaiForOrganizationsStyles'

import { useTranslation } from 'react-i18next';
import theme, { orange } from '../../../theme';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const LupaiForOrganizations: React.FC = () => {
  const { t } = useTranslation();

  const descriptions: string[][] = [
    [t('not_just_another_bot_items.one_strong'), t('not_just_another_bot_items.one')],
    [t('not_just_another_bot_items.two_strong'), t('not_just_another_bot_items.two')],
    [t('not_just_another_bot_items.three_strong'), t('not_just_another_bot_items.three')],
    [t('not_just_another_bot_items.four_strong'), t('not_just_another_bot_items.four')],
  ];



  return (
    <SectionMainContainer>

      <MainGridContaineSectionOne container >

        <Grid item xs={12} md={5} sx={{ display: 'flex' }}>
          <Grid container spacing={2} sx={{ width: '100%' }}>
            <StyledGridItem item xs={12}>
              <Box>
                <Typography variant='h3' sx={{ color: theme.palette.primary.main }}>
                  {t('lupai_for_organizations')}
                </Typography>
                <Typography variant='h3' sx={{ color: orange }}>
                  {t('ai_powered_information_assistance')}
                </Typography>
              </Box>
              <Typography variant='h4' sx={{ color: theme.palette.primary.main }}>
                {t('integrate_lupai_ecosystem')}
              </Typography>
              <Typography>
                {t('what_is_lupai_for_organizations')}
              </Typography>
              <Box>
                <Button
                  variant='contained'
                  sx={{ textTransform: 'capitalize', boxShadow: 'none' }}
                  component='a'
                  href='https://www.aureka.ai/request-consultation-call' target='_blank'>
                  {t('consultation_call')}
                </Button>
              </Box>
            </StyledGridItem>
          </Grid>
        </Grid>

        <StyledGridItem item xs={12} md={6}>

          <MainCard elevation={3}>
            <Grid container spacing={2} sx={{ width: '100%' }}>
              <CardContent sx={{ width: '100%' }}>
                <CenteredCardContent item xs={12}>
                  <NotJustABotTitle variant='h4'>
                    {t('not_just_another_bot')}
                  </NotJustABotTitle>
                  <Typography variant='h4' sx={{ textAlign: 'center', marginTop: '1rem' }}>
                    {t('not_just_another_bot_description')}
                  </Typography>

                </CenteredCardContent>
                <ItemsContainer>
                  {descriptions.map(([title, text], index) => (
                    <Item key={index}>
                      <CheckCircleIcon sx={{ color: theme.palette.secondary.main }} />
                      <Typography variant="h4">
                        <strong>{title}</strong>: {text}
                      </Typography>
                    </Item>
                  ))}
                </ItemsContainer>
              </CardContent>
            </Grid>
          </MainCard>
        </StyledGridItem>

        <Grid item xs={12} md={12} sx={{ display: 'flex' }}>
          <Grid container spacing={2} sx={{ width: '100%' }}>
            <StyledGridItem item xs={12}>
              <Box>
                <Typography variant='h3' sx={{ color: theme.palette.primary.main }}>
                  {t('organizations_use_cases.title')}
                </Typography>
              </Box>
              {['one', 'two', 'three', 'four'].map((item, index) => (
                <Typography key={index} variant="h4" sx={{ color: theme.palette.primary.main }}>
                  <strong>{t(`organizations_use_cases.item_${item}_strong`)}</strong>: {t(`organizations_use_cases.item_${item}`)}
                </Typography>
              ))}

              <Typography variant='h3' sx={{ color: orange }}>
                {t('bring_lupai_to_your_organization.title')}
              </Typography>
              <Typography variant='h4'>
                {t('bring_lupai_to_your_organization.get_in_touch')}
              </Typography>
              <Box>
                <Button variant='contained'
                  sx={{
                    textTransform: 'capitalize',
                    backgroundColor: theme.palette.primary.main,
                    boxShadow: 'none'
                  }}
                  component='a'
                  href='https://www.aureka.ai/request-consultation-call' target='_blank'>
                  {t('bring_lupai_to_your_organization.contact_us')}
                </Button>
              </Box>
            </StyledGridItem>
          </Grid>
        </Grid>


      </MainGridContaineSectionOne >
    </SectionMainContainer>
  );
};

export default LupaiForOrganizations;
