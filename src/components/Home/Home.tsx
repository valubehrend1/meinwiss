import React from 'react';

import FindAnswerSectionSection from './Sections/FindAnswerSection/FindAnswerSection';
import WhatIsLupaiSection from './Sections/WhatIsLupaiSection/WhatIsLupaiSection';
import AboutSection from './Sections/AboutSection/AboutSection';
import HowlupaiWorksSection from './Sections/HowlupaiWorksSection/HowlupaiWorksSection';

const Home: React.FC = () => {
  return (
    <div className="container">
      <FindAnswerSectionSection />
      <WhatIsLupaiSection />
      <AboutSection />
      <HowlupaiWorksSection />
    </div>
  );
};

export default Home;