import React from 'react';
import { Grid, CardContent, Box, Typography } from '@mui/material';

import {
  HowItWorksTextContainer,
  StarsIcon,
  Title,
  HowItWorksText,
  MainCard,
  StyledSearchIcon,
  OrangeQuestion,
  GradientBorderBox,
  GradientBorderBoxTop,
  QuestionsTextContainer,
  ButtonContainer,
  SearchMoreButton,
  PurpleQuestion,
  StyledGridItem,
  MainGridContaineSectionOne,
} from '../HowlupaiWorksSectionStyles';

import { useTranslation } from 'react-i18next';
import theme, { orange } from '../../../../theme';

const HowlupaiWorksSectionOne: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <HowItWorksTextContainer>
        <StarsIcon />
        <HowItWorksText>{t('how_to_use_ai')}</HowItWorksText>
      </HowItWorksTextContainer>
      <Title>
        {t('how_lupai_works')}
      </Title>

      <MainGridContaineSectionOne container>

        <Grid item xs={12} md={5} sx={{ display: 'flex' }}>
          <Grid container spacing={2} sx={{ width: '100%' }}>
            <StyledGridItem item xs={12} >
              <Box>
                <Typography variant='h3' sx={{ color: theme.palette.primary.main }}>
                  {t('ask_lupai_as_a_friend_first')}
                </Typography>
                <Typography variant='h3' sx={{ color: orange }}>
                  {t('ask_lupai_as_a_friend_second')}
                </Typography>
              </Box>
              <Typography>
                {t('just_type_your_question')}
              </Typography>
            </StyledGridItem>
          </Grid>
        </Grid>

        <StyledGridItem item md={6}>

          <MainCard elevation={3}>
            <Grid container spacing={2} sx={{ width: '100%' }}>
              <CardContent>
                <Grid item xs={12}>
                  <GradientBorderBox>
                    <GradientBorderBoxTop>
                      <StyledSearchIcon />

                      <QuestionsTextContainer>
                        <OrangeQuestion>
                          {t('what_papers_do_I_need')}
                        </OrangeQuestion>
                        <PurpleQuestion>
                          {t('how_to_apply_for_a_red_card')}
                        </PurpleQuestion>
                      </QuestionsTextContainer>

                    </GradientBorderBoxTop>
                  </GradientBorderBox>
                  <ButtonContainer>
                    <SearchMoreButton variant='contained' color='secondary'>{t('search')}</SearchMoreButton>
                  </ButtonContainer>
                </Grid>
              </CardContent>
            </Grid>
          </MainCard>
        </StyledGridItem>

      </MainGridContaineSectionOne >
    </ >
  );
};

export default HowlupaiWorksSectionOne;
