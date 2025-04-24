import React from 'react';
import SharedModal from '../shared/SharedModal/SharedModal';

import { useTranslation } from 'react-i18next';

interface LoginModalProps {
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, setIsOpen }) => {
  const { t } = useTranslation();
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SharedModal
      open={open}
      setIsOpen={setIsOpen}
      info={t('welcome_to_lupai')}
      content={t('login_message')}
      submitString="Ok"
      alternativeString="Cancelar"
      onSubmit={handleClose}
      onCancel={handleClose}
      isErrorModal={false}
    />
  );
};

export default LoginModal;
