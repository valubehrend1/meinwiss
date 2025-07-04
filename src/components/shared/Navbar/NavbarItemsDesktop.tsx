import React from 'react';
import { Typography } from '@mui/material';

import { MenuItemsContainer, MenuItemLink, /* BetaTag */ } from './NavbarStyles';

import { LanguageSelectorOrientation } from '../../../types';

import LanguageSelector from '../LanguageSelector'

interface NavbarItemsDesktopProps {
  menuItems: { text: string }[];
}

const NavbarItemsDesktop: React.FC<NavbarItemsDesktopProps> = ({ menuItems }) => {
  return (
    <MenuItemsContainer>
      {/*       <BetaTag>
        Beta version
      </BetaTag> */}
      {menuItems.map((item, index) => (
        <Typography key={index}>
          <MenuItemLink to={`/${item.text.toLowerCase().replace(/\s+/g, '-')}`}>
            {item.text}
          </MenuItemLink>

        </Typography>
      ))}
      <LanguageSelector layout={LanguageSelectorOrientation.DROPDOWN} />
    </MenuItemsContainer>
  );
};

export default NavbarItemsDesktop;
