import React, { useState } from 'react';

import { SectionContainerSteps, InsideContainer, CheckboxContainer } from './AskQuestionsStyle'


import { Typography, Button, Box, Checkbox } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import theme from '../../../../theme';

import { useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { motion, AnimatePresence } from 'framer-motion';

const AskQuestionStep3: React.FC = () => {
  const { t } = useTranslation();
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
      navigate(`/ask-lupai/step4`);
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
                {t('data_privacy')}
              </Typography>
              <Typography variant="h4" sx={{ mb: 2 }}>
                {t('data_privacy_description')}
              </Typography>
              <Box>
                <CheckboxContainer>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox
                      checked={termsChecked}
                      onChange={(e) => setTermsChecked(e.target.checked)} />
                    <Typography>{t('agree_first_part')}
                      <span>  <a href="/terms" target="_blank" rel="noreferrer">
                        {t('agree_second_part')}
                      </a>
                      </span>
                    </Typography>
                  </Box>
                  {checkboxError && (
                    <Typography color="error" variant="body2">
                      {t('you_must_agree_terms_and_conditions')}
                    </Typography>
                  )}
                </CheckboxContainer>
              </Box>
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{ textTransform: 'capitalize' }}
                onClick={handleAskQuestionClick}>
                {t('continue')}
              </Button>

            </InsideContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionContainerSteps>
  );
};

export default AskQuestionStep3;
