# Chat History Component

This directory contains the components responsible for displaying and managing the chat history functionality in the Lupai application.

## Component Overview

- **ChatHistory.tsx**: Main container component that manages the state of all chats and renders the SidePanel and MainPanel.
- **ChatList.tsx**: Displays all chats in the main panel with sorting and filtering.
- **PinnedList.tsx**: Shows pinned chats in the side panel.
- **ChatItem.tsx**: Represents a single chat item with pin/unpin functionality.
- **NewChatButton.tsx**: Button to start a new chat.
- **hooks.ts**: Contains initial data for demonstration purposes.
- **types.ts**: TypeScript types and interfaces for the chat components.
- **utils.ts**: Utility functions for date formatting, sorting, and style generation.
- **styles.tsx**: Styled components for the entire chat history UI using Material UI's styled API.
- **ChatItemStyles.ts**: Additional styled components specifically for ChatItem with style variants based on chat state.

## Architecture

### Styling Approach

The components use Material UI's styled API for consistent styling:

- Styled components are defined in `styles.tsx` for main layout components
- Chat item specific styled components are in `ChatItemStyles.ts`
- Utility functions that generate dynamic styles based on state are in `utils.ts`
- No inline styles are used in component files

### State Management

The chat state is managed in the parent `ChatHistory` component and passed down to child components as props. This ensures that changes to the chat state (such as pinning/unpinning) are synchronized across all components.

## Functionality

- **Viewing Chats**: Users can see all their chat history in the main panel.
- **Pinning Chats**: Users can pin important chats, which will appear in both the side panel and at the top of the main panel.
- **Unpinning Chats**: Users can unpin chats from either the side panel or the main panel.
- **Sorting**: Chats are sorted with pinned chats first, followed by unpinned chats sorted by date (newest first).
- **Empty State**: When there are no pinned chats, a message is displayed in the pinned section.

## Props Interface

### ChatList
```typescript
interface ChatListProps {
    allChats: Chat[];
    onTogglePin: (chatId: string) => void;
}
```

### PinnedList
```typescript
interface PinnedListProps {
    pinnedChats: Chat[];
    onTogglePin: (chatId: string) => void;
}
```

### ChatItem
```typescript
interface ChatItemProps {
    chat: Chat;
    onTogglePin?: (chatId: string) => void;
    showPinButton?: boolean;
    isPinnedPanel?: boolean;
}
```

## Chat Data Structure

```typescript
interface Chat {
    id: string;
    title: string;
    timestamp: string;
    pinned: boolean;
}
```

## Usage Example

```tsx
import ChatHistory from './components/ChatsHistory/ChatHistory';

function App() {
    return (
        <div className="App">
            <ChatHistory />
        </div>
    );
}
```
