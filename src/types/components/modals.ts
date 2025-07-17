// Types for modal-related components

/**
 * Props for the ErrorModal component
 */
export interface ErrorModalProps {
  isOpen: boolean;
  setisOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  content: string;
}

/**
 * Props for the RefreshModalError component
 */
export interface RefreshModalErrorProps {
  isOpen: boolean;
  onCancel: () => void;
  onReset: () => void;
  setIsRefreshModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
