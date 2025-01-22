import React from 'react';
import SharedModal from '../../shared/SharedModal/SharedModal';

import { useTranslation } from 'react-i18next';


interface NewQuestionModalProps {
  isOpen: boolean;
  onNewQuestion: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewQuestionModal: React.FC<NewQuestionModalProps> = ({ isOpen, onNewQuestion, setIsOpen }) => {
  const { t } = useTranslation();
  return (
    <SharedModal
      open={isOpen}
      setIsOpen={setIsOpen}
      onCancel={onNewQuestion}
      submitString={t('new_question')}
      alternativeString={t('download_conversation')}
      info={t('new_search_warning')}
      content={t('confirm_new_search')}
      isPdf={true}
    />
  );
};

export default NewQuestionModal;
