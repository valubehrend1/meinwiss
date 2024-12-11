import React, { useState } from 'react';

import { SectionContainerSteps, InsideContainer } from './AskQuestionsStyle'

import { Typography, Button } from '@mui/material';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import theme from '../../../../theme';

import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


const AskQuestionStep2: React.FC = () => {

  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  const variants = {
    hidden: { x: 300, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 }
  };


  const handleAskQuestionClick = () => {
    setIsExiting(true);
    navigate(`/ask-lupai/step3`)
  };

  return (
    <SectionContainerSteps>
      <AnimatePresence>
        {!isExiting && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <InsideContainer>
              <FeedOutlinedIcon
                sx={{
                  fontSize: '6rem',
                  color: theme.palette.secondary.main
                }} />
              <Typography variant="h3" gutterBottom>
                Keep in mind
              </Typography>
              <Typography variant="h4" sx={{ mb: 3 }}>
                Lupai does not replace a legal consultation. Lupai conducts an AI-powered search within a
                database of public and expert-curated documents and formulates a response to help
                you be informed and answer your questions. In case you have specific doubts that Lupai
                cannot answer, please consult with a lawyer.
              </Typography>
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{ textTransform: 'capitalize' }}
                onClick={handleAskQuestionClick}>
                Continue
              </Button>
            </InsideContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionContainerSteps>
  );
};

export default AskQuestionStep2;
