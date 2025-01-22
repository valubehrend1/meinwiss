import React from 'react';
import { Grid, Typography, Link } from '@mui/material';

import { useTranslation } from 'react-i18next';

import {
  SectionContainer,
  TeamTextContainer,
  TeamMemberGrid,
  StyledAvatar,
  TeamContactBox,
  UnderlinedText,
  GridImageContainer,
  TeamImageWrapper,
  Overlay,
} from './TeamStyles';

import Ceci from '../../../assets/Team/Ceci.png';
import Aqua from '../../../assets/Team/Aqua.png';
import Luce from '../../../assets/Team/Luce.png';
import Valu from '../../../assets/Team/Valu.png';
import Ry from '../../../assets/Team/Ry.png';
import Max from '../../../assets/Team/Max.png';
import Lio from '../../../assets/Team/Lio.png';
import Jan from '../../../assets/Team/Jan.png';
import Bas from '../../../assets/Team/Bas.png';
import Mora from '../../../assets/Team/Mora.png';

const TeamPage: React.FC = () => {
  const { t } = useTranslation();
  const teamMembersColumnOne = [
    { name: 'Cecilia Maas', title: 'Product Manager', imgSrc: Ceci },
    { name: 'Aquarela Padilla', title: 'Researcher', imgSrc: Aqua },
    { name: 'Lucena Palma', title: 'Communications Manager', imgSrc: Luce },
  ];

  const teamMembersColumnTwo = [
    { name: 'Ryan della Salla', title: 'Researcher', imgSrc: Ry },
    { name: 'Lionel Chamorro', title: 'AI Architect', imgSrc: Lio },
    { name: 'Max Telias', title: 'Administrative Manager', imgSrc: Max },
    { name: 'Jan Kühn', title: 'Developer', imgSrc: Jan },
  ];

  const teamMembersColumnThree = [
    { name: 'Valeria Behrend', title: 'Frontend Developer & UX/UI Designer', imgSrc: Valu },
    { name: 'BastianBastian Silva', title: 'AI Engineer', imgSrc: Bas },
    { name: 'Mora Dreszman', title: 'Graphic designer', imgSrc: Mora },
  ];

  return (
    <SectionContainer>
      <Grid container spacing={4}>
        {/* Contenedor para el texto */}
        <Grid item xs={12} md={4}>
          <TeamTextContainer>
            <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
              {t('our_member_team')}
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: '20px' }}>
              {t('get_to_know_us')}
            </Typography>
            <TeamContactBox>
              <Typography variant="h5">{t('contact_person')}</Typography>
              <Typography variant="h5">Dr. Cecilia Maas</Typography>
              <UnderlinedText variant="h5">E-Mail: cecilia.maas@aureka.ai</UnderlinedText>
              <Link
                href="https://www.linkedin.com/in/cecilia-maas-49850091/"
                variant="h5"
                sx={{ textDecoration: 'underline' }}
                target='blank'>
                LinkedIn-Profil
              </Link>
            </TeamContactBox>
          </TeamTextContainer>
        </Grid>

        {/* Contenedor para las imágenes del equipo */}
        <Grid item xs={12} md={8}>
          <TeamMemberGrid container>
            {[teamMembersColumnOne, teamMembersColumnTwo, teamMembersColumnThree].map(
              (teamColumn, columnIndex) => (
                <GridImageContainer item xs={12} sm={3} key={columnIndex}>
                  {teamColumn.map((member, index) => (
                    <TeamImageWrapper key={index}>
                      <StyledAvatar src={member.imgSrc} alt={member.name} />
                      <Overlay className="overlay">
                        <span>{member.name}</span>
                        <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>{member.title}</span>
                      </Overlay>
                    </TeamImageWrapper>
                  ))}
                </GridImageContainer>
              )
            )}
          </TeamMemberGrid>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default TeamPage;
