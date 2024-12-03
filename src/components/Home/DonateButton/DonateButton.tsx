import React from 'react';
import { DonateButtonWrapper, StyledButton } from './DonateStyles';

const DonateButton: React.FC = () => {
  const handleDonateClick = () => {
    const widgetUrl =
      "https://spenden.twingle.de/bildung-von-unten-e-v/spende-lupai-kopie/tw674f1c878877a/page";
    window.open(widgetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <DonateButtonWrapper>
      <StyledButton
        color="secondary"
        variant="contained"
        onClick={handleDonateClick}
      >
        Donate
      </StyledButton>
    </DonateButtonWrapper>
  );
};

export default DonateButton;
