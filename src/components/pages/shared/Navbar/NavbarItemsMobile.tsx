import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import HistoryIcon from '@mui/icons-material/History';
import { useNavigate } from 'react-router-dom';

import { LanguageContainer, MobileNavContainer, AccountSectionTitle } from './NavbarStyles';
import { LanguageSelectorOrientation } from '../../../../types';
import { isAuthenticated } from '../../../../utils/authUtils';
import LanguageSelector from '../LanguageSelector';
import { navigateToProfileSettings, navigateToChatsHistory } from './navbarUtils';

interface NavbarItemsMobileProps {
  // El prop menuItems es opcional ya que no lo utilizamos en el componente
  menuItems?: { text: string }[];
  toggleDrawer: (open: boolean) => () => void;
}

const NavbarItemsMobile: React.FC<NavbarItemsMobileProps> = ({ toggleDrawer }) => {
  const navigate = useNavigate();
  const userIsAuthenticated = isAuthenticated();

  const handleProfileSettingsClick = () => {
    const closeDrawer = toggleDrawer(false);
    navigateToProfileSettings(navigate, closeDrawer);
  };

  const handleChatsHistoryClick = () => {
    const closeDrawer = toggleDrawer(false);
    navigateToChatsHistory(navigate, closeDrawer);
  };

  return (
    <MobileNavContainer onClick={toggleDrawer(false)}>
      <List>
        <ListItem>
          <LanguageContainer>
            <LanguageSelector layout={LanguageSelectorOrientation.HORIZONTAL} />
          </LanguageContainer>
        </ListItem>

        {userIsAuthenticated && (
          <>
            <Divider />
            <AccountSectionTitle variant="subtitle2">
              My account
            </AccountSectionTitle>

            <ListItem button onClick={handleProfileSettingsClick}>
              <ListItemIcon>
                <SettingsIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Profile Settings" />
            </ListItem>

            <ListItem button onClick={handleChatsHistoryClick}>
              <ListItemIcon>
                <HistoryIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Chats History" />
            </ListItem>
          </>
        )}
      </List>
    </MobileNavContainer>
  );
}; export default NavbarItemsMobile;
