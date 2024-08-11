import React from 'react';

import { Box, List, ListItem, ListItemText } from '@mui/material';


interface NavbarItemsMobileProps {
  menuItems: { text: string }[];
  toggleDrawer: (open: boolean) => () => void;
}

const NavbarItemsMobile: React.FC<NavbarItemsMobileProps> = ({ menuItems, toggleDrawer }) => {
  return (
    <Box onClick={toggleDrawer(false)} sx={{ width: 250 }}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NavbarItemsMobile;
