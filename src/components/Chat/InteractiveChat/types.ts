/**
 * Interface for message content
 */
export interface MessageContent {
  [key: string]: unknown;
}

/**
 * Interface for message source
 */
export interface MessageSource {
  id?: string;
  title?: string;
  url?: string;
  publishedDate?: string;
  author?: string;
  content?: string;
  [key: string]: unknown;
}

/**
 * Interface for chat message
 */
export interface ChatMessage {
  sender: 'user' | 'assistant';
  content: string | MessageContent;
  sources?: MessageSource[];
  isFinalResponse?: boolean;
  error?: string;
}
