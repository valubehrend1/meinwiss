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
import theme, { orange } from '../../../../../theme';

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

      <MainGridContaineSectionOne container xs={12}>

        <Grid xs={12} md={5} sx={{ display: 'flex' }}>
          <Grid container spacing={2} sx={{ width: '100%' }}>
            <StyledGridItem item xs={12} >
              <Box>
                <Typography variant='h3' sx={{ color: theme.palette.primary.main }}>
                  Ask Lupai like you would
                </Typography>
                <Typography variant='h3' sx={{ color: orange }}>
                  ask a friend
                </Typography>
              </Box>
              <Typography>
                Just type a question about anything you want to know using the words that come to you. You don't need to use specialized language. Provide all necessary contextual information so that Lupai can find relevant information sources for your specific case. Ask in the language you are most comfortable with. Although most sources are in English and German, Lupai will answer you in the language of your question.
              </Typography>
            </StyledGridItem>
          </Grid>
        </Grid>

        <StyledGridItem md={6}>

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
