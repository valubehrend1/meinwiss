import React from 'react';

import { Box, Button } from '@mui/material/';
import Typography from '@mui/material/Typography';
import EastIcon from '@mui/icons-material/East';

interface AddNewQuestionProps {
  handleOpen: () => void;
}

const AddNewQuestion: React.FC<AddNewQuestionProps> = ({ handleOpen }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '16px', justifyContent: 'flex-end' }}>
      <Typography variant="h6" style={{ color: '#333' }}>
        Do you want to ask a question about another topic? Start a new conversation from scratch
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
        New Question
      </Button>
    </Box>
  );
};

export default AddNewQuestion;
