import { styled } from '@mui/system';
import { Box, TextField, Button, IconButton, Typography } from '@mui/material';
import theme from '../../../theme';

export const SectionContainer = styled(Box)({
  textAlign: 'center',
  padding: '7.5rem 5.4rem',
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

export const SearchBar = styled(TextField)({
  maxWidth: '800px',
  backgroundColor: `rgba(0, 48, 30, 0.2)`,
  borderRadius: '50px',
  border: 'none',
  '& .MuiOutlinedInput-root': {
    borderRadius: '50px',
    border: 'none',
    '& fieldset': {
      border: 'none',
    },
    '& .MuiInputBase-input': {
      color: theme.palette.primary.main,
    },
  },
});

export const SearchFiltersLabel = styled(Typography)({
  marginBottom: '10px',
  color: theme.palette.primary.main
});

export const InputField = styled(TextField)({
  backgroundColor: 'white',
  borderRadius: '80px',
  textAlign: 'center',
  '& .MuiOutlinedInput-root': {
    borderRadius: '80px',
    '& .MuiInputBase-input': {
      color: theme.palette.primary.main,
      textAlign: 'center',
      border: `1px solid ${theme.palette.primary.main} `,
      borderRadius: '80px'
    },
  },
  '& .MuiInputBase-input': {
    textAlign: 'center', // Centra el texto ingresado
  },
  '& .MuiInputLabel-outlined': {
    textAlign: 'center', // Centra la etiqueta cuando el input no está enfocado
    transformOrigin: 'center', // Mantiene la etiqueta centrada cuando se anima
    left: '50%', // Ajusta la posición horizontal de la etiqueta
    transform: 'translateX(-50%)', // Corrige la posición para centrar exactamente
    top: '50%', // Centra verticalmente la etiqueta no contraída
    marginTop: '-9px', // Ajusta si la etiqueta aún está demasiado alta
  },
  '& .MuiOutlinedInput-input': {
    textAlign: 'center', // Centra el texto del placeholder
  }
});

export const InputFieldAutoComplete = styled(TextField)({
  borderRadius: '80px',
  textAlign: 'center',
  '& .MuiOutlinedInput-root': {
    borderRadius: '80px',
    border: `1px solid ${theme.palette.primary.main}`
  },
  '& .MuiOutlinedInput-input': {
    textAlign: 'center', // Centra el texto del placeholder
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
