import React, { useState } from 'react';

import { QuestionAccordion, CloseOutlinedIconStyled, AddCircleIconStyled } from './FaqStyles';

import { Grid, Typography, AccordionSummary, AccordionDetails } from '@mui/material';

import { useTranslation } from 'react-i18next';

const QuestionDropdown: React.FC = () => {
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState<string | false>(false);


  const handleChange = (selectedAccordion: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? selectedAccordion : false);
  };

  const questions = [
    t('how_lupai_works'),
    t('which_technology_use'),
    t('what_are_lupai_sources'), // ADD T IN G Y S
    t('will_lupai_address_other_topics'), // ADD T IN G Y S
    t('lupai_is_a_prototype_question'), // ADD T IN G Y S
    t('info_lupai_provides_question'), // ADD T IN G Y S
    /*   t('sources_up_to_date_question'), // ADD T IN G Y S */
    t('advice_about_answer'), // ADD T IN G Y S
    t('legal_advice_question'), // ADD T IN G Y S
    /*    t('amount_of_languages_question'), // ADD T IN G Y S */
    t('privacy_protection_question'), // ADD T IN G Y S
    t('lupai_cost_question'), // ADD T IN G Y S
    t('lupai_external_integration'), // ADD T IN G Y S
  ];

  // ADD T IN G Y S
  const answers = [
    t('faq_section_answers.how_lupai_works'),
    t('faq_section_answers.which_technology_use_answer'),
    t('faq_section_answers.lupai_sources_of_information'),
    t('faq_section_answers.will_lupai_address_other_topics'),
    t('faq_section_answers.lupai_is_a_prototype_question'),
    t('faq_section_answers.does_lupai_provide_information_for_all_federal_states'),
    /*     t('faq_section_answers.sources_up_to_date_question'), */
    t('faq_section_answers.advice_about_answer'),
    t('faq_section_answers.legal_advice_question'),
    /*     t('faq_section_answers.amount_of_languages_question'), */
    t('faq_section_answers.privacy_protection_question'),
    t('faq_section_answers.will_lupai_remain_free_to_use'),
    t('faq_section_answers.is_possible_to_integrate_lupai_into_my_website'),
  ]

  return (
    <Grid container spacing={2}>
      {questions.map((question, index) => (
        <Grid item xs={12} md={6} key={index}>
          <QuestionAccordion
            expanded={expanded === `selectedAccordion${index}`}
            onChange={handleChange(`selectedAccordion${index}`)}
          >
            <AccordionSummary
              expandIcon={
                expanded === `selectedAccordion${index}` ? (
                  <CloseOutlinedIconStyled />
                ) : (
                  <AddCircleIconStyled />
                )
              }
            >
              <Typography sx={{ fontSize: '1.25rem' }}>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <AccordionDetails>
                <Typography variant="h4">{answers[index]}</Typography>
              </AccordionDetails>
            </AccordionDetails>
          </QuestionAccordion>

        </Grid>
      ))}
    </Grid>
  );
};

export default QuestionDropdown;
