import React, { useState } from 'react';
import { InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {
  SectionContainer,
  Title,
  Description,
  SearchBarContainer,
  SearchBar,
  AskButton,
} from './AskQuestionsStyle';
import theme from '../../../../theme';
import MainFilters from '../MainFilters';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const AskQuestion: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  const variants = {
    hidden: { x: 300, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 }
  };

  // Función que maneja el clic del botón
  const handleAskQuestionClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate(`/ask-lupai/step2`);
    }, 500);
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
                  You can ask questions about your work or migration status in different languages.
                  You can ask in English o puedes preguntar en español. Du kannst auf Deutsch fragen oppure si può chiedere in italiano.
                  You can try aswell in many other languages!
                </Description>
              </Box>
            </Box>
            <SearchBarContainer>
              <SearchBar
                fullWidth
                placeholder='Try questions like “How do I validate my university degree in Germany?”'
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ color: theme.palette.primary.main }}>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </SearchBarContainer>

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
