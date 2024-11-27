import { styled } from '@mui/system';

import theme, { primary_color_dark } from '../../../theme';
import { Box, Button, Select, Toolbar, Typography } from '@mui/material';
import { Link } from "react-router-dom";



//Navbar component

export const LogoPlaceholder = styled('img')(({ theme }) => ({
  height: '35px',
  [theme.breakpoints.between('md', 'lg')]: {
    height: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '25px',
  },
}));

export const DividerLine = styled(Box)({
  border: '0.5px solid #D5D5D5',
  padding: '0px',
  margin: '0px'
});


export const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  padding: '2.5rem 6.5rem !important',
  [theme.breakpoints.down('sm')]: {
    padding: '1rem 3rem !important',
  },
}));

//NavbarItemDesktop component

export const MenuItemsContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem'
});

export const MenuItemLink = styled(Link)(({ theme }) => ({
  textTransform: 'capitalize',
  textDecoration: 'none',
  color: primary_color_dark,
  fontSize: '1.125rem',
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '0.85rem',
  },
}));

export const MenuItemLanguage = styled(Typography)(({ theme }) => ({
  textTransform: 'capitalize',
  textDecoration: 'none',
  color: primary_color_dark,
  fontSize: '1.125rem',
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '0.85rem',
  },
}));

export const LanguageContainer = styled(Box)({
  display: 'flex',
});


export const DropdownSelect = styled(Select)({
  '.MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  fontSize: '1.125rem',
  color: primary_color_dark,
  fontFamily: 'Haffer',
  '& .MuiSelect-select': {
    border: 'none', // Elimina el borde
    fontSize: '1.125rem',
    color: primary_color_dark,
    fontFamily: 'Haffer',
  },
  '&:focus': {
    backgroundColor: 'transparent',
    fontSize: '1.125rem',
    color: primary_color_dark,
    fontFamily: 'Haffer',
  },
  '& .MuiSvgIcon-root': {
    display: 'none', // Esconde el icono predeterminado
  },
});

export const LanguageButton = styled(Button)(({ theme }) => ({
  minWidth: 'auto',
  padding: 0,
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
  '&.Mui-disabled': {
    color: 'black',
  },
}));

export const Separator = styled(Box)({
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
});


//Shared styles

export const BetaTag = styled(Box)({
  backgroundColor: theme.palette.secondary.main,
  padding: '8px 12px',
  borderRadius: '12px',
  color: theme.palette.primary.main,
  fontWeight: 900
});