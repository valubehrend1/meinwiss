import React from 'react';

import { Grid, Typography } from '@mui/material';

import { FundingContainer, FundingGrid, Logo } from './FundingStyles';
import Civicinnovation from '../../../../assets/Logos/Civicinnovation.png';
import Bundesministerium from '../../../../assets/Logos/Bundesministerium.png'

import { useTranslation } from 'react-i18next';


const Funding: React.FC = () => {
  const { t } = useTranslation()
  return (
    <FundingContainer>
      <Typography variant="h2">{t('lupai_founded_by')}</Typography>
      <FundingGrid container justifyContent="center" sx={{ mt: 6 }}>
        <Grid item>
          <Logo src={Civicinnovation} alt="Civicinnovation" />
        </Grid>
        <Grid item>
          <Logo src={Bundesministerium} alt="Bundesministerium" />
        </Grid>
      </FundingGrid>
    </FundingContainer>
  );
};
export default Funding;
