import React from 'react';
import { Grid, Typography, Link } from '@mui/material';

import {
  SectionContainer,
  TeamTextContainer,
  TeamMemberGrid,
  StyledAvatar,
  TeamContactBox,
  UnderlinedText,
  GridImageContainer
} from './TeamStyles';

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

const TeamPage: React.FC = () => {


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
            <Typography variant="h5" sx={{ marginBottom: '20px' }}>
              Explore the skilled professionals whose collaborative efforts and expertise drive our team's achievements and success.
            </Typography>
            <TeamContactBox>
              <Typography variant="h5">
                Contact person
              </Typography>
              <Typography variant="h5">
                Dr. Cecilia Maas
              </Typography>
              <UnderlinedText variant="h5">
                E-Mail: cecilia.maas@aureka.ai
              </UnderlinedText>
              <Link href="#" variant="h5" sx={{ textDecoration: 'underline' }}>
                LinkedIn-Profil
              </Link>
            </TeamContactBox>
          </TeamTextContainer>
        </Grid>

        {/* Contenedor para las imágenes del equipo */}
        <Grid item xs={12} md={8}>
          <TeamMemberGrid container >
            <GridImageContainer item xs={12} sm={3} className='grid-1'>
              {teamMembersColumnOne.map((member, index) => (
                <StyledAvatar key={index} src={member.imgSrc} alt={member.name} />
              ))}
            </GridImageContainer>
            <GridImageContainer item xs={12} sm={3} className='grid-2'>
              {teamMembersColumnTwo.map((member, index) => (
                <StyledAvatar key={index} src={member.imgSrc} alt={member.name} />
              ))}
            </GridImageContainer>
            <GridImageContainer item xs={12} sm={3} className='grid-3'>
              {teamMembersColumnThree.map((member, index) => (
                <StyledAvatar key={index} src={member.imgSrc} alt={member.name} />
              ))}
            </GridImageContainer>
          </TeamMemberGrid>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default TeamPage;
