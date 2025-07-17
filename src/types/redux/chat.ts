// Types related to the chat state in Redux
import { Organization, UserContext } from '../models';
import { AssistantResponse, RetrieverItem } from '../api';

/**
 * Message in the conversation (user or assistant)
 */
export interface Message {
  sender: 'user' | 'assistant';
  content: string;
  sources?: RetrieverItem[];
  answerFound?: boolean;
  isFinalResponse: boolean;
  isClarification?: boolean;
  error?: string;
}

/**
 * Chat slice state in Redux
 */
export interface ChatState {
  userQuery: string;
  userContext: UserContext;
  isLoading: boolean;
  error: string | null;
  assistantResponse: AssistantResponse;
  messages: Message[];
  accumulatedOrganizations: Organization[];
  originalStatus: string;
  statusDisplay: string;
  stepsCompleted: boolean;
}
