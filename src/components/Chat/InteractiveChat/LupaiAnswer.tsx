import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';

// Styled button with custom properties
const Container = styled(Paper)({
  backgroundColor: `rgba(0, 48, 30, 0.2)`,
  borderRadius: '22px',
  padding: '32px 40px',
  width: '80%', // Adjust width as needed
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textTransform: 'none', // Remove uppercase styling from button
  cursor: 'pointer',
  boxShadow: 'none'
});

// Component that uses the styled button
const LupaiAnswer = () => {
  return (
    <Container>
      <Typography variant="h5" style={{ color: '#333' }}>
        What can I do in order to change my visa from a student visa to a freelance visa?
      </Typography>
      <EditIcon style={{ color: '#777' }} />
    </Container>
  );
};

export default LupaiAnswer;
