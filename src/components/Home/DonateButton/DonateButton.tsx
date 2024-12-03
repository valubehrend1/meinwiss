import React from 'react';
import { DonateButtonWrapper, StyledButton } from './DonateStyles';

const DonateButton: React.FC = () => {
  return (
    <DonateButtonWrapper>
      <StyledButton color='secondary' variant="contained">Donate</StyledButton>
    </DonateButtonWrapper>
  );
};

export default DonateButton;
