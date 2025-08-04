import {
  Container,
  Paper,
  Typography,
  Box,
  Avatar,
  Button,
  Alert,
  Divider,
  Snackbar,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// ProfileSettings styles
export const ProfileContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

export const ProfilePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontWeight: 600,
}));

export const LoadingBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: `${theme.spacing(4)} 0`,
}));

export const ErrorAlert = styled(Alert)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const ProfileLayoutBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

export const AvatarSectionBox = styled(Box)(({ theme }) => ({
  flex: '1 1 auto',
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    flex: '0 0 auto',
  },
}));

export const FormSectionBox = styled(Box)({
  flex: '1 1 auto',
});

// AvatarSection styles
export const AvatarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  marginBottom: theme.spacing(2),
  border: `2px solid ${theme.palette.primary.main}`,
  fontSize: '2rem',
  fontWeight: 'bold',
}));

// ProfileForm styles
export const FormContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(2),
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
  fontWeight: 600,
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
  padding: theme.spacing(1.5),
  fontWeight: 'bold',
}));

export const FormDivider = styled(Divider)(({ theme }) => ({
  margin: `${theme.spacing(3)} 0`,
}));

export const SuccessSnackbar = styled(Snackbar)({
  // You can add custom styles for the snackbar here if needed
});
