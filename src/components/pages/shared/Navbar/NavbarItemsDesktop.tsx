import React, { useState } from 'react';
import { Typography, IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import HistoryIcon from '@mui/icons-material/History';
import { useNavigate } from 'react-router-dom';

import { MenuItemsContainer, MenuItemLink } from './NavbarStyles';

import { LanguageSelectorOrientation } from '../../../../types';
import { isAuthenticated } from '../../../../utils/authUtils';
import { navigateToProfileSettings, navigateToChatsHistory } from './navbarUtils';

import LanguageSelector from '../LanguageSelector'

interface NavbarItemsDesktopProps {
  menuItems: { text: string }[];
}

const NavbarItemsDesktop: React.FC<NavbarItemsDesktopProps> = ({ menuItems }) => {
  const navigate = useNavigate();
  const userIsAuthenticated = isAuthenticated();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileSettingsClick = () => {
    navigateToProfileSettings(navigate);
    handleClose();
  };

  const handleChatsHistoryClick = () => {
    navigateToChatsHistory(navigate);
    handleClose();
  };

  return (
    <MenuItemsContainer>
      {menuItems.map((item, index) => (
        <Typography key={index}>
          <MenuItemLink to={`/${item.text.toLowerCase().replace(/\s+/g, '-')}`}>
            {item.text}
          </MenuItemLink>
        </Typography>
      ))}
      <LanguageSelector layout={LanguageSelectorOrientation.DROPDOWN} />

      {userIsAuthenticated && (
        <>
          <IconButton
            color="primary"
            onClick={handleClick}
            aria-label="profile"
            aria-controls={open ? 'profile-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            sx={{ ml: 1 }}
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="profile-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'profile-button',
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleProfileSettingsClick}>
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Profile Settings</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleChatsHistoryClick}>
              <ListItemIcon>
                <HistoryIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Chats History</ListItemText>
            </MenuItem>
          </Menu>
        </>
      )}
    </MenuItemsContainer>
  );
};

export default NavbarItemsDesktop;
