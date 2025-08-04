import { List, Typography } from '@mui/material';
import ChatItem from './ChatItem/ChatItem';
import { PinnedListProps } from './types';
import { sortChats } from './utils';
import { EmptyStateMessage } from './styles';

const PinnedList: React.FC<PinnedListProps> = ({ pinnedChats, onTogglePin }) => {
    // Sort pinned chats by date (newest first)
    const sortedPinned = sortChats(pinnedChats, false);

    return (
        <div style={{ marginBottom: '16px' }}>
            <Typography variant="h6" style={{ marginBottom: '8px' }}>Pinned chats</Typography>
            <List style={{ padding: 0 }}>
                {pinnedChats.length > 0 ? (
                    sortedPinned.map(chat => (
                        <ChatItem
                            key={chat.id}
                            chat={chat}
                            onTogglePin={onTogglePin}
                            isPinnedPanel={true}
                        />
                    ))
                ) : (
                    <EmptyStateMessage variant="body2">
                        No pinned chats
                    </EmptyStateMessage>
                )}
            </List>
        </div>
    );
};

export default PinnedList;
