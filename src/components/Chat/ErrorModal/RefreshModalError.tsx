import React from 'react';



import SharedModal from '../../shared/SharedModal/SharedModal';

interface RefreshModalErrorProps {
  isOpen: boolean;
  onClose: () => void;
  onReset: () => void;
}

const RefreshModalError: React.FC<RefreshModalErrorProps> = ({ isOpen, onClose, onReset }) => {

  return (
    <SharedModal open={isOpen}
      onCancel={onClose}
      onSubmit={onReset}
      submitString="Try again"
      alternativeString="Cancel"
      info="Error"
      content="There was an error loading the answer, please try again."
      isPdf={false}>
    </SharedModal>
  );
};

export default RefreshModalError;
