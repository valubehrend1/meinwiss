import { styled } from '@mui/system';
import { Box, IconButton } from '@mui/material';

// Main container for the chat when rendered as a widget
export const ChatWidgetContainer = styled(Box)({
    position: 'fixed',
    bottom: 0,
    right: 0,
    width: '100%', // Will occupy all available width in the iframe
    height: '100%', // Will occupy all available height in the iframe
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px 10px 0 0',
    overflow: 'hidden',
    boxShadow: '0 -2px 10px rgba(252, 185, 0, 0.2)',
    backgroundColor: '#FFFFFF',
    maxWidth: '500px', // Restored to 500px as it was originally
    margin: '0 auto', // Center if in a wider container
});

// Widget header
export const ChatWidgetHeader = styled(Box)({
    padding: '10px 15px',
    backgroundColor: 'rgba(252, 185, 0, 1)',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '10px 10px 0 0',
    minHeight: '50px',
});

// Scrollable messages area
export const ChatWidgetMessages = styled(Box)({
    flex: '1',
    overflowY: 'auto',
    padding: '12px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px', // Reduced from 8px to 4px to decrease space between messages
    scrollBehavior: 'smooth', // For smooth scrolling
});

// Input area for the widget
export const ChatWidgetInputArea = styled(Box)({
    padding: '12px 16px',
    borderTop: '1px solid rgba(252, 185, 0, 0.3)',
    backgroundColor: '#FFFFFF',
});

// Minimize/maximize button
export const MinimizeButton = styled(IconButton)({
    color: '#333',
    padding: '4px',
});

// Reuse MessagesContainer but adjust for the widget
export const MessagesContainer = styled(Box)<{ sender: string }>(({ sender }) => ({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '8px',
    alignItems: sender === 'user' ? 'flex-end' : 'flex-start',
    maxWidth: '80%',
    alignSelf: sender === 'user' ? 'flex-end' : 'flex-start',
}));

// PDF download button
export const DownloadButton = styled(IconButton)({
    color: 'white',
    marginRight: '4px',
});

// Empty message container
export const EmptyMessageContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    opacity: 0.7,
});

// Scrollable messages container with forwarded ref support
export const StyledScrollableMessagesContainer = styled(Box)({
    flex: '1',
    overflowY: 'auto',
    padding: '12px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px', // Reduced from 8px to 4px to decrease space between messages
    scrollBehavior: 'smooth' // For smooth scrolling
});
