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

import {
  allTeamMembers,
  mainContactPerson
} from './TeamMembersCards';

const TeamPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer>
      <Grid container spacing={4}>
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
              <Typography variant="h5">{mainContactPerson.name}</Typography>
              <UnderlinedText variant="h5">E-Mail: {mainContactPerson.email}</UnderlinedText>
              <Link
                href={mainContactPerson.linkedIn}
                variant="h5"
                sx={{ textDecoration: 'underline' }}
                target='blank'>
                LinkedIn-Profil
              </Link>
            </TeamContactBox>
          </TeamTextContainer>
        </Grid>

        <Grid item xs={12} md={8}>
          <TeamMemberGrid container>
            {allTeamMembers.map(
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
