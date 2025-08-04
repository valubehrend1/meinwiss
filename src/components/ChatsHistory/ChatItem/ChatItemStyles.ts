import { styled } from '@mui/material/styles';
import { ListItem, IconButton } from '@mui/material';
import { primary_color_dark } from '../../../theme';

// Style variants based on chat state
type StyleVariant = {
  backgroundColor: string;
  color: string;
  secondaryColor: string;
};

// Function to get styles based on chat type
export const getChatItemStyles = (
  isPinnedPanel: boolean,
  isPinned: boolean
): StyleVariant => {
  if (isPinnedPanel) {
    // Style for chats in the side panel (always pinned)
    return {
      backgroundColor: primary_color_dark,
      color: 'white',
      secondaryColor: 'rgba(255, 255, 255, 0.7)',
    };
  } else if (isPinned) {
    // Style for pinned chats in the main panel
    return {
      backgroundColor: `${primary_color_dark}14`, // 14 = 8% opacity in hexadecimal
      color: primary_color_dark,
      secondaryColor: 'text.secondary',
    };
  } else {
    // Style for unpinned chats
    return {
      backgroundColor: 'inherit',
      color: 'inherit',
      secondaryColor: 'inherit',
    };
  }
};

// Styled component for ListItem
export const StyledListItem = styled(ListItem)<{
  isPinned: boolean;
  isPinnedPanel: boolean;
  styleVariant: StyleVariant;
}>(({ isPinned, isPinnedPanel, styleVariant }) => ({
  backgroundColor: styleVariant.backgroundColor,
  color: styleVariant.color,
  borderLeft:
    isPinned && !isPinnedPanel ? `4px solid ${primary_color_dark}` : 'none',
}));

// Styled component for IconButton
export const StyledIconButton = styled(IconButton)<{
  styleVariant: StyleVariant;
}>(({ styleVariant }) => ({
  color: styleVariant.color,
}));

// Styled component for secondary text
export const StyledSecondaryText = styled('div')<{
  styleVariant: StyleVariant;
}>(({ styleVariant }) => ({
  color: styleVariant.secondaryColor,
}));
