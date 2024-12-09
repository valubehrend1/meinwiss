import React from 'react';
import SharedModal from '../../shared/SharedModal/SharedModal';


interface NewQuestionModalProps {
  isOpen: boolean;
  onNewQuestion: () => void;
  onCancel: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewQuestionModal: React.FC<NewQuestionModalProps> = ({ isOpen, onNewQuestion, onCancel, setIsOpen }) => {
  return (
    <SharedModal
      open={isOpen}
      setIsOpen={setIsOpen}
      onCancel={onCancel}
      onSubmit={onNewQuestion}
      submitString="New Question"
      alternativeString="Download this conversation"
      info="When you start a new search, your current search will disappear and you will not be able to read the results again."
      content="Are you sure you want to start a new search? "
      isPdf={true}
    />
  );
};

export default NewQuestionModal;
