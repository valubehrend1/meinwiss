import React from 'react';
import SharedModal from '../../shared/SharedModal/SharedModal';


interface NewQuestionModalProps {
  isOpen: boolean;
  onNewQuestion: () => void;
  onCancel: () => void;
}

const NewQuestionModal: React.FC<NewQuestionModalProps> = ({ isOpen, onNewQuestion, onCancel }) => {
  return (
    <SharedModal
      open={isOpen}
      onCancel={onCancel}
      onNewQuestion={onNewQuestion}
      submitString="New Question"
      alternativeString="Download this conversation"
      info="When you start a new search, your current search will disappear and you will not be able to read the results again."
      content="Are you sure you want to start a new search? "
      isPdf={true}
    />
  );
};

export default NewQuestionModal;
