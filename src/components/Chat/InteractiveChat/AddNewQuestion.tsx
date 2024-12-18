import React from 'react';

import { Box, Button } from '@mui/material/';
import Typography from '@mui/material/Typography';
import EastIcon from '@mui/icons-material/East';
import { useTranslation } from 'react-i18next';

interface AddNewQuestionProps {
  handleOpen: () => void;
}

const AddNewQuestion: React.FC<AddNewQuestionProps> = ({ handleOpen }) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '16px', justifyContent: 'flex-end' }}>
      <Typography variant="h6" style={{ color: '#333' }}>
        {t('another_topic_new_conversation')}
      </Typography>
      <EastIcon />
      <Button variant='contained' color='secondary'
        onClick={handleOpen}
        sx={{
          boxShadow: 'none',
          padding: '14px 18px',

          textTransform: 'capitalize',
          fontSize: '12px'
        }}>
        {t('new_question')}
      </Button>
    </Box>
  );
};

export default AddNewQuestion;
