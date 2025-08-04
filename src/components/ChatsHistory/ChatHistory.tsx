import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../../theme';
import { AppContainer, SidePanel, MainPanel } from './styles';
import ChatList from './ChatList';
import PinnedList from './PinnedList';
import NewChatButton from './NewChatButton';
import { useState } from 'react';
import { Chat } from './types';
import { initialChats } from './hooks';

const ChatHistory = () => {
    // Estado compartido para todos los chats
    const [chats, setChats] = useState<Chat[]>(initialChats);

    // Filtrar chats pineados y no pineados
    const pinnedChats = chats.filter((chat) => chat.pinned);

    // Función para cambiar el estado de pin
    const togglePinStatus = (chatId: string) => {
        setChats((prevChats) =>
            prevChats.map((chat) =>
                chat.id === chatId ? { ...chat, pinned: !chat.pinned } : chat
            )
        );
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppContainer>
                <SidePanel>
                    <PinnedList
                        pinnedChats={pinnedChats}
                        onTogglePin={togglePinStatus}
                    />
                </SidePanel>
                <MainPanel>
                    <ChatList
                        allChats={chats}
                        onTogglePin={togglePinStatus}
                    />
                    <NewChatButton />
                </MainPanel>
            </AppContainer>
        </ThemeProvider>
    );
};

export default ChatHistory;
