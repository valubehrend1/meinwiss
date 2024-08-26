import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const FundingContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6),
  textAlign: 'center',
}));

const Funding: React.FC = () => {
  return (
    <FundingContainer>
      <Typography variant="h2">Lupai is funded by</Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item>
          {/* Aquí puedes agregar el logotipo del fondo */}
          <img src="path-to-logo1.png" alt="Funding Logo 1" />
        </Grid>
        <Grid item>
          <img src="path-to-logo2.png" alt="Funding Logo 2" />
        </Grid>
      </Grid>
    </FundingContainer>
  );
};

export default Funding;
