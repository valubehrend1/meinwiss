import React from 'react';
import { Grid, Box, Typography, Avatar, Link } from '@mui/material';
import { styled } from '@mui/system';

import Ceci from '../../../assets/Team/Ceci.png';
import Aqua from '../../../assets/Team/Aqua.png';

// Estilos para los contenedores
const SectionContainer = styled(Box)({
  padding: '50px',
  background: 'linear-gradient(180deg, #FFF 0%, #FBFDEE 14%, #E2F389 100%)',
});

const TeamTextContainer = styled(Box)({
  marginBottom: '20px',
});

const TeamMemberGrid = styled(Grid)({
  display: 'flex',
  gap: '16px',
});

const StyledAvatar = styled(Avatar)({
  width: '100px',
  height: '100px',
  borderRadius: '15px',
  border: '2px solid transparent',
  '&:hover': {
    border: '2px solid #9c27b0', // Cambia el color al pasar el cursor, por ejemplo, un borde púrpura.
  },
});

const TeamPage: React.FC = () => {
  // Datos de ejemplo para los miembros del equipo
  const teamMembersColumnOne = [
    { name: 'Member 1', imgSrc: Ceci },
    { name: 'Member 2', imgSrc: Aqua },
    { name: 'Member 3', imgSrc: '/path/to/luce.jpg' },
  ]

  const teamMembersColumnTwo = [
    { name: 'Member 1', imgSrc: '/path/to/luce.jpg' },
    { name: 'Member 2', imgSrc: '/path/to/luce.jpg' },
    { name: 'Member 3', imgSrc: '/path/to/luce.jpg' },
    { name: 'Member 3', imgSrc: '/path/to/luce.jpg' },
  ]

  const teamMembersColumnThree = [
    { name: 'Member 1', imgSrc: Ceci },
    { name: 'Member 2', imgSrc: Aqua },
    { name: 'Member 3', imgSrc: '/path/to/luce.jpg' },
  ]

  return (
    <SectionContainer>
      <Grid container spacing={4}>
        {/* Contenedor para el texto */}
        <Grid item xs={12} md={4}>
          <TeamTextContainer>
            <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
              Meet our team members
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '20px' }}>
              Explore the skilled professionals whose collaborative efforts and expertise drive our team's achievements and success.
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: '10px' }}>
              Contact person
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '10px' }}>
              Dr. Cecilia Maas
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '10px' }}>
              E-Mail: cecilia.maas[at]aureka.ai
            </Typography>
            <Link href="#" variant="body2" sx={{ textDecoration: 'underline' }}>
              LinkedIn-Profil
            </Link>
          </TeamTextContainer>
        </Grid>

        {/* Contenedor para las imágenes del equipo */}
        <Grid item xs={12} md={8}>
          <TeamMemberGrid container spacing={2}>
            {teamMembersColumnOne.map((member, index) => (
              <Grid item xs={4} key={index} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <StyledAvatar src={member.imgSrc} alt={member.name} />
              </Grid>
            ))}
            {teamMembersColumnTwo.map((member, index) => (
              <Grid item xs={4} key={index} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}  >
                <StyledAvatar src={member.imgSrc} alt={member.name} />
              </Grid>
            ))}
            {teamMembersColumnThree.map((member, index) => (
              <Grid item xs={4} key={index} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <StyledAvatar src={member.imgSrc} alt={member.name} />
              </Grid>
            ))}
          </TeamMemberGrid>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default TeamPage;
