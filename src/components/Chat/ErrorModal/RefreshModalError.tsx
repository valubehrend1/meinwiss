import React from 'react';

import SharedModal from '../../shared/SharedModal/SharedModal';

import { useTranslation } from 'react-i18next';

interface RefreshModalErrorProps {
  isOpen: boolean;
  onCancel: () => void;
  onReset: () => void;
  setIsRefreshModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RefreshModalError: React.FC<RefreshModalErrorProps> = ({ isOpen, onCancel, onReset, setIsRefreshModalOpen }) => {
  const { t } = useTranslation();
  return (
    <SharedModal open={isOpen}
      onCancel={onCancel}
      onSubmit={onReset}
      setIsRefreshModalOpen={setIsRefreshModalOpen}
      submitString={t('start_again')}
      alternativeString={t('download_conversation')}
      info="Warning"
      content={t('refreshing_alert')}
      isPdf={false}
      isRefreshModal>
    </SharedModal>
  );
};

export default RefreshModalError;
