import { List, Typography } from '@mui/material';
import ChatItem from './ChatItem/ChatItem';
import { ChatListProps } from './types';
import { sortChats } from './utils';
import { ChatListContainer } from './styles';

const ChatList: React.FC<ChatListProps> = ({ allChats, onTogglePin }) => {
    // Sort chats: pinned first, then by date
    const sortedChats = sortChats(allChats);

    return (
        <ChatListContainer>
            <Typography variant="h6">Chats</Typography>
            <List>
                {sortedChats.map(chat => (
                    <ChatItem
                        key={chat.id}
                        chat={chat}
                        onTogglePin={onTogglePin}
                    />
                ))}
            </List>
        </ChatListContainer>
    );
};

export default ChatList;