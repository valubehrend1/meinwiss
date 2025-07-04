import React, { useState } from 'react';

import {
  AppBar,
  IconButton,
  Box,
  Drawer,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

import useMediaQuery from '@mui/material/useMediaQuery';

import { useTranslation } from 'react-i18next';

import theme from '../../../theme';

import { LogoPlaceholder, StyledToolBar, DividerLine } from './NavbarStyles';
import NavbarItesmDesktop from './NavbarItemsDesktop';
import NavbarItemsMobile from './NavbarItemsMobile';

import DonateBanner from '../../Home/DonateButton/DonateBanner';

import logo from '../../../assets/Lupai_Logo_Dark_Green.png';


const Navbar: React.FC = () => {
  /*   const imageSrc = '/src/assets/Lupai_Logo_Dark_Green.png'; */
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down(980));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    /*     { text: t('ask_lupai') }, */
    { text: t('how_lupai_works') },
    { text: t('about') },
    /*    { text: t('lupai_for_organizations') }, */
    { text: t('contact') },
  ];

  return (
    <>
      {!isMobile ? <DonateBanner /> : null}
      <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white' }}>
        <StyledToolBar>
          <IconButton edge="start" color="inherit" aria-label="logo" href='/' sx={{
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}>
            <LogoPlaceholder src={logo} alt="Logo" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          {isMobile ? (
            <>
              <IconButton edge="end" color="primary" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <NavbarItemsMobile menuItems={menuItems} toggleDrawer={toggleDrawer} />
              </Drawer>
            </>
          ) : (
            <NavbarItesmDesktop menuItems={menuItems} />
          )}
        </StyledToolBar>
      </AppBar>
      <DividerLine />
    </>
  );
};

export default Navbar;
