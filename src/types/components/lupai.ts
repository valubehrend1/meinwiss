// Types for chat/Lupai specific components

import { RetrieverItem } from '../api/responses';

/**
 * Props for the LupaiAnswer component
 */
export interface LupaiAnswerProps {
  content: string;
  sources: RetrieverItem[];
  answerFound?: boolean;
  isFinalResponse: boolean;
  isClarification?: boolean;
  isWaitingForResponse?: boolean;
  error?: string | null;
  setIsOpen: (isOpen: boolean) => void;
  open?: boolean;
}

/**
 * Props for the LupaiResources component
 */
export interface LupaiResourcesProps {
  retrieverItems: RetrieverItem[];
}
