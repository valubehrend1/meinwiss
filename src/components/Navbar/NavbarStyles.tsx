import { styled } from '@mui/system';

import { primary_color_dark } from '../../theme';
import { Box, Toolbar } from '@mui/material';
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