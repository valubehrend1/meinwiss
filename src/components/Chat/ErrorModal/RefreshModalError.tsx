import React from 'react';
import SharedModal from '../../pages/shared/SharedModal/SharedModal';
import { useTranslation } from 'react-i18next';
import { RefreshModalErrorProps } from '../../../types/components';

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
