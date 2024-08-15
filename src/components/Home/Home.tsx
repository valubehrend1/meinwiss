import React from 'react';

import { useMediaQuery } from '@mui/material';

import FindAnswerSectionSection from './Sections/FindAnswerSection/FindAnswerSection';
import WhatIsLupaiSection from './Sections/WhatIsLupaiSection/WhatIsLupaiSection';
import AboutSection from './Sections/AboutSection/AboutSection';
import HowlupaiWorksSection from './Sections/HowlupaiWorksSection/HowlupaiWorksSection';
import HowLupaiWorksMobile from './Sections/HowlupaiWorksSection/HowLupaiWorksMobile';
import LogosSection from './Sections/LogosSection/LogosSection';
import Footer from './Sections/Footer/Footer';
import GetInTouch from './Sections/GetInTouchSection/GetInTouch';
import theme from '../../theme';


const Home: React.FC = () => {
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <div className="container">
      <FindAnswerSectionSection />
      <WhatIsLupaiSection />
      <AboutSection />
      {matches ? <HowlupaiWorksSection /> : <HowLupaiWorksMobile />}
      <LogosSection />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;