import { Chat } from './types';
import { StyleVariant } from './styles';
import { primary_color_dark } from '../../theme';

/**
 * Formats a date string from ISO format to a localized display format
 * @param iso - ISO date string
 * @returns Formatted date string
 */
export const formatDate = (iso: string): string => {
  const date = new Date(iso);
  return (
    date.toLocaleDateString('en-GB') +
    ' ' +
    date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) +
    'hs'
  );
};

/**
 * Returns style variants based on the pinned status of a chat
 * @param isPinnedPanel - Whether the chat is in the pinned panel
 * @param isPinned - Whether the chat is pinned
 * @returns StyleVariant object with appropriate colors
 */
export const getChatItemStyles = (
  isPinnedPanel: boolean,
  isPinned: boolean
): StyleVariant => {
  if (isPinnedPanel) {
    // Style for chats in the side panel (always pinned)
    return {
      backgroundColor: primary_color_dark,
      color: '#ffffff',
      secondaryColor: 'rgba(255, 255, 255, 0.7)',
    };
  } else if (isPinned) {
    // Style for pinned chats in the main panel
    return {
      backgroundColor: `${primary_color_dark}14`,
      color: primary_color_dark,
      secondaryColor: 'rgba(0, 0, 0, 0.6)',
    };
  } else {
    // Style for unpinned chats
    return {
      backgroundColor: 'inherit',
      color: 'inherit',
      secondaryColor: 'rgba(0, 0, 0, 0.6)', // Mantener secundario para legibilidad
    };
  }
};

/**
 * Sorts chats by pinned status and date
 * @param chats - Array of chats to sort
 * @param pinnedFirst - Whether to prioritize pinned chats
 * @returns Sorted array of chats
 */
export const sortChats = (
  chats: Chat[],
  pinnedFirst: boolean = true
): Chat[] => {
  return [...chats].sort((a, b) => {
    // First sort by pinned status if pinnedFirst is true
    if (pinnedFirst) {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
    }

    // Then sort by date (newest first)
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });
};
