export interface RetrieverItem {
  collection_metadata: {
    source_type: string;
    source_name?: string;
    source_url?: string;
    source_date?: string;
  };
  text: string;
}

export enum Language {
  EN = 'en',
  DE = 'de',
}

export enum LanguageSelectorOrientation {
  HORIZONTAL,
  DROPDOWN,
}

export interface ErrorModalProps {
  isOpen: boolean;
  setisOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  content: string;
}

export interface RefreshModalErrorProps {
  isOpen: boolean;
  onCancel: () => void;
  onReset: () => void;
  setIsRefreshModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

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

export interface LupaiResourcesProps {
  retrieverItems: RetrieverItem[];
}