import { styled } from '@mui/material/styles';
import { ListItem, IconButton, Button, Typography } from '@mui/material';
import { primary_color_dark } from '../../theme';

// Style variants for chat items based on state
export type StyleVariant = {
    backgroundColor: string;
    color: string;
    secondaryColor: string;
};

// Layout Components
export const AppContainer = styled('div')(() => ({
    display: 'flex',
    height: '100vh',
}));

export const SidePanel = styled('div')(({ theme }) => ({
    width: '240px',
    backgroundColor: '#fff',
    borderRight: `1px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(2),
}));

export const MainPanel = styled('div')(({ theme }) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(2),
    position: 'relative',
    overflow: 'hidden', // Prevent content from hiding the button
}));

// Container for the chat list to leave space for the new chat button
export const ChatListContainer = styled('div')(() => ({
    flex: 1,
    overflowY: 'auto',
    paddingBottom: '70px', // Leave space for the new chat button
}));

// Chat Item Components
interface StyledListItemProps extends React.ComponentProps<typeof ListItem> {
    isPinned: boolean;
    isPinnedPanel: boolean;
    styleVariant: StyleVariant;
}

export const StyledListItem = styled(ListItem, {
    shouldForwardProp: (prop) =>
        prop !== 'isPinned' && prop !== 'isPinnedPanel' && prop !== 'styleVariant'
})<StyledListItemProps>(({ isPinned, isPinnedPanel, styleVariant }) => ({
    backgroundColor: styleVariant.backgroundColor,
    color: styleVariant.color,
    borderLeft: isPinned && !isPinnedPanel ? `4px solid ${primary_color_dark}` : 'none',
    '& .MuiListItemText-primary': {
        color: styleVariant.color, // Apply color to primary text
    },
    '& .MuiListItemText-secondary': {
        color: styleVariant.secondaryColor, // Apply color to secondary text
    },
}));

interface StyledIconButtonProps extends React.ComponentProps<typeof IconButton> {
    styleVariant: StyleVariant;
}

export const StyledIconButton = styled(IconButton, {
    shouldForwardProp: (prop) => prop !== 'styleVariant'
})<StyledIconButtonProps>(({ styleVariant }) => ({
    color: styleVariant.color,
}));

export const StyledSecondaryText = styled('div', {
    shouldForwardProp: (prop) => prop !== 'styleVariant'
})<{ styleVariant: StyleVariant }>(({ styleVariant }) => ({
    color: styleVariant.secondaryColor,
}));

// New Chat Button
export const StyledNewChatButton = styled(Button)(() => ({
    borderRadius: '40px',
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 10, // Ensure it's above other elements
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // Add shadow for better visibility
    padding: '8px 16px',
    minWidth: '120px',
}));

// No Pinned Chats Message
export const EmptyStateMessage = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    fontStyle: 'italic'
}));
