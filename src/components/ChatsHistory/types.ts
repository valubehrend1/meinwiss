export interface Chat {
  id: string;
  title: string;
  timestamp: string;
  pinned: boolean;
}

export interface ChatItemProps {
  chat: Chat;
  onTogglePin?: (chatId: string) => void;
  showPinButton?: boolean;
  isPinnedPanel?: boolean;
}

export interface ChatListProps {
  allChats: Chat[];
  onTogglePin: (chatId: string) => void;
}

export interface PinnedListProps {
  pinnedChats: Chat[];
  onTogglePin: (chatId: string) => void;
}
