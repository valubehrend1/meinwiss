import { styled } from '@mui/material/styles';
import { TextField, Button, Box, Typography } from '@mui/material';

// Contenedor para la tarjeta de autenticación
export const AuthContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    width: '100%',
    maxWidth: '400px',
    // Eliminamos la altura 100% y el margen auto para que no interfieran con el centrado
}));

// Campos de texto estilizados
export const StyledTextField = styled(TextField)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    width: '100%',
    '& .MuiOutlinedInput-root': {
        borderRadius: theme.shape.borderRadius,
        '&:hover fieldset': {
            borderColor: theme.palette.primary.main,
        },
    },
}));

// Botón de envío estilizado
export const SubmitButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    padding: theme.spacing(1, 2),
    width: '100%',
    borderRadius: theme.shape.borderRadius,
    fontWeight: 'bold',
}));

// Contenedor para formulario
export const FormContainer = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
}));

// Contenedor para el enlace de cambio entre login/registro
export const SwitchModeContainer = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(1),
    width: '100%',
}));

// Enlace estilizado
export const StyledLink = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
        textDecoration: 'underline',
    },
}));

// Contenedor de página para autenticación
export const AuthPageContainer = styled(Box)(({ theme }) => ({
    minHeight: 'calc(100vh - 200px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(4, 0),
}));
