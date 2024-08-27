import React, { useState } from 'react';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { useTranslation } from 'react-i18next';
import theme from '../../../theme';

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
    t('sources_up_to_date_question'), // ADD T IN G Y S
    t('advice_about_answer'), // ADD T IN G Y S
    t('legal_advice_question'), // ADD T IN G Y S
    t('amount_of_languages_question'), // ADD T IN G Y S
    t('privacy_protection_question'), // ADD T IN G Y S
    t('lupai_cost_question'), // ADD T IN G Y S
    t('lupai_external_integration'), // ADD T IN G Y S
  ];

  const answers = [
    "Lupai is an AI assistant designed to answer questions about migration and work in Germany. Users can ask questions in several languages and receive a textual answer based exclusively on a corpus of official and expert-curated sources. The AI follows several steps to provide an answer. The main steps, explained in a simplified way, are as follows: Lupai first transforms the user's question into a mathematical representation of its meaning and uses this to calculate the semantic similarity with all the sources in its database. Those that are highly similar are selected as relevant sources for the answer. Then, a large language model (i.e., an AI model that has been trained to generate text) takes the selected fragments as input to formulate an answer. It further filters those that are most relevant to the question. Along with a textual answer to the user's question, Lupai returns a list of sources on which the answer is based. In addition to information sources, Lupai also recommends organizations, initiatives and experts in the user's region who are working on topics related to the user's question. This is done by calculating the semantic proximity of the user's question and a textual description of the organization's work.",
    "Lupai combines different AI technologies and implements the most suitable state-of-the-art technology for each task. It is built in a modular way, which makes it easy to change the different modules according to the technical progress. Its main components are 1) an annonimization model, which pre-processes the user's query and replaces all input related to personal data with a placeholder token; 2) an embedding model, which processes all sources in the database and each user query and returns a mathematical representation (embedding) and stores it in a vector database. Currently Lupai uses OpenAI's embedding model; 3) a semantic search engine that computes the semantic similarity between the user's query and all the source fragments in the database; 4) a large language model that takes the selected relevant source fragments, the user's query, and the chat history as context and returns a textual response to the user's query. Currently Lupai uses ChatGPT for this task.",
    "Lupai's database currently includes sources from the areas of migration and work, but may be extended to other topics in the future. There are three different types of source data: laws, official information on administrative procedures published on the websites of ministries, commented or summarized information published by reliable information portals on issues related to work and migration. These sources were selected by Lupai's team together with specialized lawyers and counselors. It is a vast database, but it is still possible that for some specific questions there are no relevant sources for the assistant to answer them. For this reason, it is always recommended to consult a specialized consultancy or a lawyer in case Lupai's answer is not satisfactory or exhaustive enough. In addition to sources, Lupai also includes a database of organizations, institutions and professionals working on issues related to work and migration, so that users can contact them for personalized support or to participate in groups aimed at improving working and living conditions.",
    "During its prototype phase, which will last until the end of 2024, Lupai will focus only on the issues of migration and work. It is hoped that it can be extended to other issues later. For this, it is necessary to gather relevant sources together with experts in the field and to include them in Lupai's database. If your organization would like to collaborate with Lupai to extend it to other areas, please contact us at info@lupai.de.",
    "A prototype is a first working version of a digital product. It can perform the main tasks and has a value for its users, but it still needs to be improved. This also means that there might be some bugs here and there from time to time, but our development team will fix them as soon as possible! Lupai's prototype will help us see the value of having an AI assistant to help migrants and workers in Germany understand their rights and navigate the bureaucracy, and define how to develop it further. Some issues related to migration and work change depending on the federal state in Germany.",
    "In its prototype phase, Lupai focuses on data relevant for Germany as a whole and on specific data for Berlin. Later, it will expand its database to include state-specific data for more regions. If your organization would like to work with Lupai to expand its database to another region, please contact us at info@lupai.de.",
    "answer",
    "Even though Lupai has a large database, there are questions that require the view of an expert or professional, or extended experience. In these cases it is recommended to make an appointment with an expert or lawyer, depending on the nature of the question.",
    "No, Lupai does not replace legal advice in any case. It is a tool to efficiently search public information that is otherwise difficult to find or understand. If Lupai does not have the necessary information sources or if your question requires the opinion or services of a lawyer, we recommend that you contact a professional as soon as possible.",
    "Lupai takes your privacy very seriously. Several measures are taken to protect it: First, you don't need to log in to ask a question on Lupai, which means that the application does not store any personal information associated with an account. It is recommended that you do not include any personal information in your question, such as your name, address, place of work or study, etc. However, you will be asked to fill out three mandatory fields: country of origin, federal state in which you live or plan to move to, and the length of time you have been in Germany. The reason for this is that the system needs this information to filter the data sources and provide you with only the data relevant to your case. If you accidentally enter personal data into your query, it is still protected by another measure, namely an anonymization module that pre-processes the user query and replaces all personal data with a placeholder token, so that no private information leaves the Lupai infrastructure. Second, user queries are never stored in connection with your IP or any information that can be traced back to you. We only store queries for statistical and internal evaluation purposes. Third, user queries are processed by external services under conditions that comply with European data protection guidelines. Fourth, user data is only accessible to technical developers who need it to debug the application. They are legally bound not to take the information out of Lupai's infrastructure or disclose it in any way.",
    "Yes, we are committed to keeping Lupai free for users who need to find information about migration and work for their own lives or to help others. Since maintaining the application costs money for IT infrastructure and technical maintenance, you are welcome to contribute by donating. Please contact info@lupai.de so that we can provide you with the appropriate bank information.",
    "Yes, we have designed Lupai's infrastructure to be modular to allow for easy integration of the backend functionality into another frontend. If you are interested in discussing how this could work, please contact us at info@lupai.de.",
  ]

  return (
    <Grid container spacing={2}>
      {questions.map((question, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Accordion
            expanded={expanded === `selectedAccordion${index}`}
            onChange={handleChange(`selectedAccordion${index}`)}
            sx={{
              backgroundColor: theme.palette.secondary.main,
              boxShadow: 'none',
              padding: '32px 48px',
              borderRadius: '20px',
              '&.MuiPaper-root': {
                borderRadius: '20px',
              },
              '&.Mui-expanded': {
                background: 'linear-gradient(180deg, #FFF 0%, #FBFDEE 14%, #E2F389 100%)',
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded === `selectedAccordion${index}` ? (
                  <CloseOutlinedIcon sx={{ fontSize: '35px', color: theme.palette.primary.main }} />
                ) : (
                  <AddCircleIcon sx={{ fontSize: '35px', color: '#FFF' }} />
                )
              }
            >
              <Typography sx={{ fontSize: '1.25rem' }}>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {answers.map((answer, index) => (
                <Typography key={index} variant="h4">{answer}</Typography>
              ))}
            </AccordionDetails>
          </Accordion>

        </Grid>
      ))}
    </Grid>
  );
};

export default QuestionDropdown;
