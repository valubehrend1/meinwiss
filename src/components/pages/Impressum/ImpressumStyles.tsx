import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const Container = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '80px'
}));

export const InfoContainer = styled(Box)(() => ({
    margin: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
}));