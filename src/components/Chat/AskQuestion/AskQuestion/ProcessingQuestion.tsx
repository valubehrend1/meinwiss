import React, { useEffect } from 'react';

import { SectionContainerSteps, InsideContainer } from './AskQuestionsStyle'

import { Box, Typography } from '@mui/material';

import { motion, AnimatePresence } from 'framer-motion';
import Spinner from './Spinner';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { completeStep } from '../../../../config/features/ChatSlice';

const AskQuestionStep3: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const variants = {
    hidden: { x: 300, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 }
  };

  useEffect(() => {
    dispatch(completeStep());

    const timer = setTimeout(() => {
      navigate('/ask-lupai/chat');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate, dispatch]);

  return (
    <SectionContainerSteps>
      <AnimatePresence>

        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <InsideContainer>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <Spinner />
              <Typography variant="h3" gutterBottom>
                {t('processing_question')}
              </Typography>
            </Box>
          </InsideContainer>
        </motion.div>

      </AnimatePresence>
    </SectionContainerSteps>
  );
};

export default AskQuestionStep3;
