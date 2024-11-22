import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledDataPrivacy = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px'
}));

export const Title = styled(Typography)(() => ({
    fontWeight: '900',
    marginBottom: '20px',
    marginTop: '20px'
}));