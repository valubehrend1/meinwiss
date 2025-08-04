import { NavigateFunction } from 'react-router-dom';

/**
 * Handles navigation to the profile settings page
 * @param navigate - React Router navigation function
 * @param closeDrawer - Optional function to close drawer in mobile version
 */
export const navigateToProfileSettings = (
  navigate: NavigateFunction,
  closeDrawer?: () => void
) => {
  navigate('/profile-settings');
  if (closeDrawer) {
    closeDrawer();
  }
};

/**
 * Handles navigation to the chats history page
 * @param navigate - React Router navigation function
 * @param closeDrawer - Optional function to close drawer in mobile version
 */
export const navigateToChatsHistory = (
  navigate: NavigateFunction,
  closeDrawer?: () => void
) => {
  navigate('/chats-history');
  if (closeDrawer) {
    closeDrawer();
  }
};
