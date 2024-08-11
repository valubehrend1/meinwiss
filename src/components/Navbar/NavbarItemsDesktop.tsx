import React from 'react';

import { Typography } from '@mui/material';

import { MenuItemsContainer, MenuItemLink } from './NavbarStyles';


interface NavbarItemsDesktopProps {
  menuItems: { text: string }[];
}

const NavbarItemsDesktop: React.FC<NavbarItemsDesktopProps> = ({ menuItems }) => {

  return (
    <MenuItemsContainer>
      {menuItems.map((item, index) => (
        <Typography key={index}>
          <MenuItemLink to={`/${item.text}`}>
            {item.text}
          </MenuItemLink>
        </Typography>
      ))}
    </MenuItemsContainer>
  );
};

export default NavbarItemsDesktop;
