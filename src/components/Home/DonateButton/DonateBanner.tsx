import React from 'react';
import { BannerContainer, DonateTypography, BannerDonateButton } from './DonateStyles';

const DonateBanner: React.FC = () => {
  const handleDonateClick = () => {
    const widgetUrl =
      "https://spenden.twingle.de/bildung-von-unten-e-v/spende-lupai-kopie/tw674f1c878877a/page";
    window.open(widgetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <BannerContainer>
      <DonateTypography variant="h4" gutterBottom>
        Support Our Cause
      </DonateTypography>
      <BannerDonateButton
        variant="outlined"
        color="secondary"
        onClick={handleDonateClick}
      >
        Donate Now
      </BannerDonateButton>
    </BannerContainer>
  );
};

export default DonateBanner;
