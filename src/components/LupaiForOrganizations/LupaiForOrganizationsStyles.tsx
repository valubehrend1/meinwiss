import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

import { orange } from '../../theme';

export const NotJustABotTitle = styled(Typography)(() => ({
  textAlign: 'center',
  color: orange,
  fontWeight: 'bold'
}));

export const ItemsContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '20px',
  flexDirection: 'column',
  marginTop: '20px'
}));

export const Item = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
}));
