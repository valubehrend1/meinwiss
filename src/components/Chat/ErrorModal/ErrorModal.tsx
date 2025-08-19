import React from 'react';
import { useNavigate } from 'react-router-dom'
import SharedModal from '../../pages/shared/SharedModal/SharedModal';
import { ErrorModalProps } from '../../../types/components';

const ErrorModal: React.FC<ErrorModalProps> = ({ isOpen, onClose, content, setisOpen }) => {
  const navigate = useNavigate()

  const handleError = () => {
    navigate('/chat');
    window.location.reload();
    onClose();
  }

  return (
    <SharedModal open={isOpen}
      onCancel={handleError}
      setIsOpen={setisOpen}
      onSubmit={handleError}
      submitString="Start again"
      alternativeString="Download as PDF and start again"
      info="Error"
      content={content}
      isPdf={true}
      isErrorModal={true}>
    </SharedModal >
  );
};

export default ErrorModal;
