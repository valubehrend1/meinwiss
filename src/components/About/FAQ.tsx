import React from 'react';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import { styled } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6),
}));

const questions = [
  "How does Lupai work?",
  "Will Lupai work on all devices?",
  "What are Lupai's successful interventions?",
  // ... más preguntas
];

const FAQ: React.FC = () => {
  return (
    <FAQContainer>
      <Typography variant="h2" sx={{ mb: 4 }}>Frequently Asked Questions</Typography>
      <Grid container spacing={2}>
        {questions.map((question, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body1">{question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">Answer to the question.</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </FAQContainer>
  );
};

export default FAQ;
