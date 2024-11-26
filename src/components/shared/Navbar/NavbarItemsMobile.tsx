import React from 'react';

import { Box, List, ListItem, ListItemText } from '@mui/material';

import { LanguageContainer, BetaTag } from './NavbarStyles';
import { LanguageSelectorOrientation } from '../../../types';
import LanguageSelector from '../LanguageSelector';


interface NavbarItemsMobileProps {
  menuItems: { text: string }[];
  toggleDrawer: (open: boolean) => () => void;
}

const NavbarItemsMobile: React.FC<NavbarItemsMobileProps> = ({ menuItems, toggleDrawer }) => {
  return (
    <Box onClick={toggleDrawer(false)} sx={{ width: 250 }}>
      <BetaTag>
        Beta version
      </BetaTag>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem>
          <LanguageContainer>
            <LanguageSelector layout={LanguageSelectorOrientation.HORIZONTAL} />
          </LanguageContainer>
        </ListItem>
      </List>
    </Box>
  );
};

export default NavbarItemsMobile;
