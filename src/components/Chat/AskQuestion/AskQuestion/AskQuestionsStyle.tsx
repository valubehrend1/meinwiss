import { styled } from '@mui/system';
import { Box, TextField, Button, IconButton, Typography, Alert } from '@mui/material';
import theme from '../../../../theme';

export const SectionContainer = styled(Box)({
  textAlign: 'center',
  padding: '7.5rem 5.4rem',
});

export const SectionContainerSteps = styled(Box)({
  textAlign: 'center',
  padding: '7.5rem 5.4rem',
  margin: 'auto',
  maxWidth: 800,
});

export const InsideContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  gap: 3,
  alignItems: 'center'
});


export const Title = styled(Typography)({
  marginBottom: '2rem',
  color: theme.palette.primary.main
});

export const Description = styled(Typography)({
  marginBottom: '40px',
});

export const SearchBarContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '40px',
});

interface SearchBarProps {
  mainSearchPage?: boolean;
}

export const SearchBar = styled(TextField, {
  shouldForwardProp: (prop) => prop !== 'mainSearchPage',
})<SearchBarProps>(({ mainSearchPage }) => ({
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
})<SearchBarProps>(({ mainSearchPage }) => ({
  marginTop: '20px',
  width: '100%',
  maxWidth: mainSearchPage ? '800px' : 'none',
}));

export const SearchFiltersLabel = styled(Typography)({
  marginBottom: '10px',
  color: theme.palette.primary.main
});

export const InputField = styled(TextField)({
  backgroundColor: 'white',
  borderRadius: '80px',
  textAlign: 'center',
  color: theme.palette.primary.main,
  '& .MuiOutlinedInput-root': {
    borderRadius: '80px',
    color: theme.palette.primary.main,
    '& .MuiInputBase-input': {
      color: theme.palette.primary.main,
      textAlign: 'center',
      border: `1px solid ${theme.palette.primary.main} `,
      borderRadius: '80px'
    },
  },
});

export const InputFieldAutoComplete = styled(TextField)({
  borderRadius: '80px',
  color: theme.palette.primary.main,
  textAlign: 'center',
  '& .MuiOutlinedInput-root': {
    borderRadius: '80px',
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
  },
  '& .MuiOutlinedInput-input': {
    textAlign: 'center', // Centra el texto del placeholder
    color: theme.palette.primary.main,
  }
});


export const AddButton = styled(IconButton)({
  backgroundColor: 'white',
  borderRadius: '50%',
  padding: '12px',
  width: '56px',
  height: '56px',
  '&:hover': {
    backgroundColor: '#F0F0F0',
  },
});

export const AskButton = styled(Button)({
  backgroundColor: theme.palette.primary.main,
  borderRadius: '50px',
  padding: '12px 36px',
  textTransform: 'capitalize',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#00332c',
  },
});
