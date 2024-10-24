import { styled } from '@mui/system';

import { Box } from '@mui/material';

export const ChatContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  paddingRight: '200px',
  paddingLeft: '200px',
  paddingTop: '50px',
  margin: theme.spacing(2),
  marginBottom: '40px',
  borderRadius: theme.shape.borderRadius,
}));
