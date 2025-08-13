import { styled } from '@mui/system';
import { Box, TextField, Alert } from '@mui/material';

export const SearchBar = styled(TextField, {
    shouldForwardProp: (prop) => prop !== 'mainSearchPage',
})<{ mainSearchPage?: boolean }>(({ mainSearchPage }) => ({
    width: '100%',
    maxWidth: mainSearchPage ? '800px' : 'none',
    backgroundColor: `rgba(252, 185, 0, 0.1)`,
    borderRadius: '50px',
    border: 'none',
    '& .MuiOutlinedInput-root': {
        borderRadius: '50px',
        border: 'none',
        '& .MuiInputBase-input': {
            color: '#333',
        },
        '& fieldset': {
            border: 'none',
        },
        '& .MuiSvgIcon-root': {
            color: 'rgba(252, 185, 0, 1)',
        },
        '& .MuiButton-root': {
            backgroundColor: 'rgba(252, 185, 0, 1)',
            color: '#333',
            '&:hover': {
                backgroundColor: 'rgba(225, 165, 0, 1)',
            },
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
