import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


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

interface UserQuestionProps {
  content: string;
}

const UserQuestion: React.FC<UserQuestionProps> = ({ content }) => {
  return (
    <Container>
      <Typography variant="h5" style={{ color: '#333' }}>
        {content}
      </Typography>
    </Container>
  );
};

export default UserQuestion;
