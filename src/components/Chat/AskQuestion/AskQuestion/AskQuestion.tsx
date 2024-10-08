import React, { useState } from 'react';
import { Box } from '@mui/material';
import {
  SectionContainer,
  Title,
  Description,
  AskButton,
  SearchBarContainer,
} from './AskQuestionsStyle';
import MainFilters from '../MainFilters';

import SharedSearchBar from '../../../shared/SharedSearchBar/SharedSearchBar';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { /* useDispatch, */ useDispatch, useSelector } from 'react-redux';
import { selectUserQuery, selectUserContext, setAssistantResponse, addUserMessage } from '../../../../config/features/ChatSlice';

const ws = new WebSocket("/lupai/agent/chat")

const AskQuestion: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /*   const dispatch = useDispatch(); */
  const [isExiting, setIsExiting] = useState(false);

  const userQuery = useSelector(selectUserQuery);
  const userContext = useSelector(selectUserContext);

  const sendMessage = () => {
    if (!userQuery.match(/[a-z]/i)) {
      return
    }
    dispatch(addUserMessage(userQuery));
    ws.send(
      JSON.stringify({
        user_query: userQuery,
        user_context: {
          origin_country: userContext.originCountry,
          time_in_germany: userContext.timeInGermany,
          age: userContext.age,
        },
        location: userContext.location,
      }),
    )
  }

  const variants = {
    hidden: { x: 300, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 }
  };

  // Función que maneja el clic del botón
  const handleAskQuestionClick = () => {
    setIsExiting(true);
    sendMessage()
    setTimeout(() => {
      navigate(`/ask-lupai/step2`);
    }, 800);
  };


  ws.onmessage = (event) => {
    const message = JSON.parse(event.data)
    console.log(event.data)
    dispatch(setAssistantResponse(message))

  }

  return (
    <SectionContainer>
      <AnimatePresence>
        {!isExiting && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ maxWidth: 800 }}>
                <Title variant='h3'> {t('how_lupai_helps')}</Title>
                <Description variant='h5'>
                  You can ask questions about your work or migration status in different languages.
                  You can ask in English o puedes preguntar en español. Du kannst auf Deutsch fragen oppure si può chiedere in italiano.
                  You can try aswell in many other languages!
                </Description>
              </Box>
            </Box>
            <Box>
              <SearchBarContainer>
                <SharedSearchBar mainSearchPage sendMessage={sendMessage} />
              </SearchBarContainer>
            </Box>

            <MainFilters />

            <Box sx={{ marginTop: '40px' }}>
              <AskButton
                variant="contained"
                size="large"
                onClick={handleAskQuestionClick}>
                Ask question
              </AskButton>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionContainer>
  );
};

export default AskQuestion;
