import React from 'react';

import { useNavigate } from 'react-router-dom'

import SharedModal from '../../shared/SharedModal/SharedModal';

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate()

  const handleError = () => {
    navigate('/ask-lupai');
    window.location.reload();
    onClose();
  }
  return (
    <SharedModal open={isOpen}
      onCancel={onClose}
      onSubmit={handleError}
      submitString="Try again"
      alternativeString="Cancel"
      info="Error"
      content="There was an error loading the answer, please try again."
      isPdf={false}>
    </SharedModal>
  );
};

export default ErrorModal;
