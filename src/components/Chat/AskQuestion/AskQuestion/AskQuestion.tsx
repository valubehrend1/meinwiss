import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import {
  SectionContainer,
  Title,
  Description,
  AskButton,
  SearchBarContainer,
} from './AskQuestionsStyle';
/* import MainFilters from '../MainFilters'; */

import SharedSearchBar from '../../../shared/SharedSearchBar/SharedSearchBar';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserQuery,
  addUserMessage,
  resetSearch,
  /*   selectAge,
    selectOriginCountry,
    selectLocation,
    selectTimeInGermany */
} from '../../../../config/features/ChatSlice';


const AskQuestion: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  const [error, setError] = React.useState<boolean>(false);
  /*   const [countryError, setCountryError] = useState<boolean>(false);
    const [locationError, setLocationError] = useState<boolean>(false);
    const [timeError, setTimeError] = useState<boolean>(false);
    const [ageError, setAgeError] = useState<boolean>(false); */

  const userQuery = useSelector(selectUserQuery);
  /*   const age = useSelector(selectAge);
    const originCountry = useSelector(selectOriginCountry);
    const location = useSelector(selectLocation);
    const timeInGermany = useSelector(selectTimeInGermany); */

  // Resetear el estado cuando se monta el componente
  useEffect(() => {
    dispatch(resetSearch());
  }, [dispatch]);

  const sendMessage = () => {
    if (!userQuery.match(/[\p{L}]/u)) {
      return;
    }
    dispatch(addUserMessage(userQuery));
  }

  const variants = {
    hidden: { x: 300, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 }
  };

  const validateInput = (userInput: string, setError: (error: boolean) => void) => {
    if (userInput.trim() === '') {
      setError(true);
      return false;
    }
    setError(false);
    return true;
  };

  // Función que maneja el clic del botón
  const handleAskQuestionClick = () => {
    //Input Validations
    if (!validateInput(userQuery, setError)) return;
    /*     if (!validateInput(originCountry, setCountryError)) return;
        if (!validateInput(location, setLocationError)) return;
        if (!validateInput(timeInGermany, setTimeError)) return;
        if (!validateInput(age, setAgeError)) return;
        if (parseInt(age) < 1 || parseInt(age) > 120) {
          setAgeError(true);
          return;
        } */
    setIsExiting(true);
    sendMessage()
    setTimeout(() => {
      navigate(`/ask-lupai/step2`);
    }, 800);
  };


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
                  {t('ask_questions_multilang')}
                </Description>
              </Box>
            </Box>
            <Box>
              <SearchBarContainer>
                <SharedSearchBar
                  mainSearchPage
                  sendMessage={sendMessage}
                  error={error}
                />
              </SearchBarContainer>
            </Box>

            {/*  <MainFilters
              countryError={countryError}
              locationError={locationError}
              timeError={timeError}
              ageError={ageError} /> */}
            <Box sx={{ marginTop: '40px' }}>
              <AskButton
                variant="contained"
                size="large"
                onClick={handleAskQuestionClick}>
                {t('ask_question')}
              </AskButton>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionContainer >
  );
};

export default AskQuestion;
