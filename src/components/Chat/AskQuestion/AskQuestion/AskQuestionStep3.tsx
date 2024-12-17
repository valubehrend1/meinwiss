import React, { useState } from 'react';

import { SectionContainerSteps, InsideContainer, CheckboxContainer } from './AskQuestionsStyle'


import { Typography, Button, Box, Checkbox } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import theme from '../../../../theme';

import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const AskQuestionStep3: React.FC = () => {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  const [termsChecked, setTermsChecked] = useState<boolean>(false);
  const [checkboxError, setCheckboxError] = useState<boolean>(false);

  const variants = {
    hidden: { x: 300, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 }
  };

  const handleAskQuestionClick = () => {
    if (!termsChecked) {
      setCheckboxError(true);
      return;
    }
    setIsExiting(true);
    setTimeout(() => {
      navigate(`/ask-lupai/step4`);  // Suponiendo que existe un 'step4'
    }, 700);
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
              <LockOutlinedIcon
                sx={{
                  fontSize: '6rem',
                  color: theme.palette.secondary.main
                }} />
              <Typography variant="h3" gutterBottom>
                Data Privacy
              </Typography>
              <Typography variant="h4" sx={{ mb: 3 }}>
                Lupai only stores data that is essential to provide you with a response and run basic statistics.
                It does not store any personal data beyond the input you enter in the search field and it only shares
                it with third party services for the purpose of processing your query to provide a response. Y
                ou can read our full Data Privacy Policy here.
              </Typography>
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{ textTransform: 'capitalize' }}
                onClick={handleAskQuestionClick}>
                Continue
              </Button>
              <Box sx={{ marginTop: '40px' }}>
                <CheckboxContainer>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox
                      checked={termsChecked}
                      onChange={(e) => setTermsChecked(e.target.checked)} />
                    <Typography>I agree with the
                      <span>                  <a href="/terms" target="_blank" rel="noreferrer">
                        Terms of Use and Privacy Policy
                      </a>
                      </span>
                    </Typography>
                  </Box>
                  {checkboxError && (
                    <Typography color="error" variant="body2">
                      You must agree to the Terms of Use and Privacy Policy
                    </Typography>
                  )}
                </CheckboxContainer>
              </Box>
            </InsideContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionContainerSteps>
  );
};

export default AskQuestionStep3;
