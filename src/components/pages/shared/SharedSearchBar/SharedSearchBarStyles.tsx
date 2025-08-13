import { styled } from '@mui/system';
import { Box, TextField, Alert } from '@mui/material';
import theme from '../../../../theme';

export const SearchBar = styled(TextField, {
  shouldForwardProp: (prop) => prop !== 'mainSearchPage',
})<{ mainSearchPage?: boolean }>(({ mainSearchPage }) => ({
  width: '100%',
  maxWidth: mainSearchPage ? '800px' : 'none',
  backgroundColor: `rgba(0, 48, 30, 0.2)`,
  borderRadius: '50px',
  border: 'none',
  '& .MuiOutlinedInput-root': {
    borderRadius: '50px',
    border: 'none',
    '& .MuiInputBase-input': {
      color: theme.palette.primary.main,
    },
    '& fieldset': {
      border: 'none',
    },
  },
}));

export const SearchBarError = styled(Alert, {
  shouldForwardProp: (prop) => prop !== 'mainSearchPage',
})<{ mainSearchPage?: boolean }>(({ mainSearchPage }) => ({
  marginTop: '20px',
  width: '100%',
  maxWidth: mainSearchPage ? '800px' : 'none',
}));

export const SearchBarContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '40px',
});
