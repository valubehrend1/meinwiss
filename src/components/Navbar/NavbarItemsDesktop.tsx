import React from 'react';
import { Typography } from '@mui/material';

import { MenuItemsContainer, MenuItemLink } from './NavbarStyles';

import { LanguageSelectorOrientation } from '../../types.tsx';

import LanguageSelector from './LanguageSelector'

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
      <LanguageSelector layout={LanguageSelectorOrientation.DROPDOWN} />
    </MenuItemsContainer>
  );
};

export default NavbarItemsDesktop;
