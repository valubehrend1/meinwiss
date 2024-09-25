import React from 'react';
import { styled } from '@mui/material/styles';
import { Paper, Box } from '@mui/material/';
import Typography from '@mui/material/Typography';

import logo from '../../../assets/logo.png'
import theme from '../../../theme';
const Container = styled(Paper)({
  width: 'auto',
  display: 'flex',
  alignItems: 'left',
  marginTop: theme.spacing(6),
  gap: theme.spacing(2),
  textTransform: 'none',
  boxShadow: 'none'
});

// Component that uses the styled button
const UserQuestion = () => {
  return (
    <Container>
      <Box>
        <img src={logo} alt="Logo" style={{ width: '20px' }} />
      </Box>
      <Typography variant="h5" style={{ color: '#333' }}>
        What can I do in order to change my visa from a student visa to a freelance visa?
        Navigating visa issues can be challenging, especially when dealing with expired documents and
        the need to transition from one visa type to another. Here are steps you can take to change
        your visa from a student visa to a freelance visa in Germany:
      </Typography>
    </Container>
  );
};

export default UserQuestion;
