import { Box, Button, TextField, Grid } from "@mui/material";
import { styled } from "@mui/system";
import theme, { orange } from "../../../theme";


export const MainContainer = styled(Grid)({
  display: 'flex',
  padding: '7.5rem 6.5rem',
  gap: theme.spacing(10),
  [theme.breakpoints.down('lg')]: {
    gap: theme.spacing(8),
  },
  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(8),
    flexDirection: 'column',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    padding: '5rem 1.5rem',
  },
});

export const GradientWrapper = styled(Box)({
  borderRadius: '1.875rem',
  background: `conic-gradient(
    from 0deg,
    #00301E 0%,
    #A98031 20%,
    #E2F389 30%,
    #F1683F 60%,
    #A0004D 80%,
    #00301E 100%
  )`,
  padding: '1px',
});

export const StyledTextField = styled(TextField)({
  borderRadius: '1.875rem',
  '& .MuiOutlinedInput-root': {
    borderRadius: '1.875rem',
    backgroundColor: 'white',
    padding: '0px 1rem',

    '& fieldset': {
      border: 'none',
    },
  },
  '& .MuiInputBase-input': {
    borderRadius: '1.875rem',
    padding: '1rem',
  },

});

export const FormContainer = styled(Box)({
  display: 'flex',
  gap: theme.spacing(3),
  flexDirection: 'column'
});


export const StyledButton = styled(Button)({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: '1.125rem 1.5rem',
  borderRadius: '1.875rem',
  textTransform: 'none',
  width: 'fit-content',
});


export const GridImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  width: '100%',
}));

export const FirstColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  alignItems: 'stretch',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  '& > div': {
    display: 'flex',
    flex: '1 1 0%',
  },
  '& img': {
    borderRadius: theme.spacing(2),
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  '& > div:first-of-type': {
    flex: '3 1 60%',
  },
  '& > div:last-of-type': {
    flex: '1 1 40%',
  },
}));

export const SecondColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(6),
  color: 'white',
  backgroundColor: orange,
  width: '100%',
  borderRadius: '2.5rem',
}));
