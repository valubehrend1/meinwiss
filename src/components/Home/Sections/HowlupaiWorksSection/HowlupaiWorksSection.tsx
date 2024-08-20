import React from 'react';
import { Grid, CardContent, Box } from '@mui/material';

import {
  SectionMainContainer,
  HowItWorksTextContainer,
  StarsIcon,
  Title,
  HowItWorksText,
  MainCard,
  LeftGrid,
  LeftCardText,
  LeftCardTextOrange,
  StyledSearchIcon,
  OrangeQuestion,
  GradientBorderBox,
  GradientBorderBoxTop,
  QuestionsTextContainer,
  ButtonContainer,
  SearchMoreButton,
  PurpleQuestion
} from './HowlupaiWorksSectionStyles';

import { useTranslation } from 'react-i18next';

const HowlupaiWorksSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <SectionMainContainer>

      <HowItWorksTextContainer>
        <StarsIcon />
        <HowItWorksText>{t('how_to_use_ai')}</HowItWorksText>
      </HowItWorksTextContainer>
      <Title>
        {t('how_lupai_works')}
      </Title>
      <MainCard>
        <CardContent>
          <Grid container spacing={2} sx={{ width: '100%' }}>
            <LeftGrid item xs={6}>
              <Box sx={{ textAlign: 'center' }}>
                <LeftCardText>
                  {t('ask_lupai_as_a_friend_first')}
                </LeftCardText>
                <LeftCardTextOrange>
                  {t('ask_lupai_as_a_friend_second')}
                </LeftCardTextOrange>
              </Box>
            </LeftGrid>

            <Grid item xs={6}>
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
          </Grid>
        </CardContent>
      </MainCard>
    </SectionMainContainer >
  );
};

export default HowlupaiWorksSection;
