import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const TeamContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6),
  textAlign: 'center',
}));

const MemberPhoto = styled('img')(() => ({
  borderRadius: '50%',
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
}));

const Team: React.FC = () => {
  const members = [
    { name: 'John Doe', photo: 'path-to-photo1.jpg' },
    { name: 'Jane Smith', photo: 'path-to-photo2.jpg' },
    // ... más miembros
  ];

  return (
    <TeamContainer>
      <Typography variant="h2" sx={{ mb: 4 }}>Meet our team members</Typography>
      <Grid container spacing={4} justifyContent="center">
        {members.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <MemberPhoto src={member.photo} alt={member.name} />
            <Typography variant="h6">{member.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </TeamContainer>
  );
};

export default Team;
