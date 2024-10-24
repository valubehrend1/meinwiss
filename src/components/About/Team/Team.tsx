import React from 'react';
import { Grid, Box, Typography, Avatar, Link } from '@mui/material';
import { styled } from '@mui/system';

import Ceci from '../../../assets/Team/Ceci.png';
import Aqua from '../../../assets/Team/Aqua.png';
import Luce from '../../../assets/Team/Luce.png';
import Valu from '../../../assets/Team/Valu.png';
import Ry from '../../../assets/Team/Ry.png';
import Max from '../../../assets/Team/Max.png';
import Lio from '../../../assets/Team/Lio.png';
import Jan from '../../../assets/Team/Jan.png';
import Anna from '../../../assets/Team/Anna.png';
import Simon from '../../../assets/Team/Simon.png';
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
  alignItems: 'center',
  justifyContent: 'center',
  gap: '48px',
  height: '100%',
});

const StyledAvatar = styled(Avatar)({
  width: '200px',
  height: '200px',
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
    { name: 'Member 3', imgSrc: Luce },
  ]

  const teamMembersColumnTwo = [
    { name: 'Member 1', imgSrc: Ry },
    { name: 'Member 2', imgSrc: Lio },
    { name: 'Member 3', imgSrc: Max },
    { name: 'Member 3', imgSrc: Jan },
  ]

  const teamMembersColumnThree = [
    { name: 'Member 1', imgSrc: Valu },
    { name: 'Member 2', imgSrc: Anna },
    { name: 'Member 3', imgSrc: Simon },
  ]

  return (
    <SectionContainer>
      <Grid container xs={12} spacing={4}>
        {/* Contenedor para el texto */}
        <Grid item xs={12} md={4}>
          <TeamTextContainer>
            <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
              Meet our team members
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '20px' }}>
              Explore the skilled professionals whose collaborative efforts and expertise drive our team's achievements and success.
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: '10px' }}>
              Contact person
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '10px' }}>
              Dr. Cecilia Maas
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '10px', textDecoration: 'underline' }}>
              E-Mail: cecilia.maas@aureka.ai
            </Typography>
            <Link href="#" variant="body2" sx={{ textDecoration: 'underline' }}>
              LinkedIn-Profil
            </Link>
          </TeamTextContainer>
        </Grid>

        {/* Contenedor para las imágenes del equipo */}
        <Grid item xs={12} md={8}>
          <TeamMemberGrid container >
            <Grid item xs={3} className='grid-1' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', gap: '32px' }}>
              {teamMembersColumnOne.map((member, index) => (
                <StyledAvatar key={index} src={member.imgSrc} alt={member.name} />
              ))}
            </Grid>
            <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', gap: '32px' }}>
              {teamMembersColumnTwo.map((member, index) => (
                <StyledAvatar key={index} src={member.imgSrc} alt={member.name} />
              ))}
            </Grid>
            <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', gap: '32px' }}>
              {teamMembersColumnThree.map((member, index) => (
                <StyledAvatar key={index} src={member.imgSrc} alt={member.name} />
              ))}
            </Grid>
          </TeamMemberGrid>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default TeamPage;
