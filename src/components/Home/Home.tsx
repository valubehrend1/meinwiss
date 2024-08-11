import React from 'react';

import FindAnswerSectionSection from './Sections/FindAnswerSection/FindAnswerSection';
import WhatIsLupaiSection from './Sections/WhatIsLupaiSection/WhatIsLupaiSection';
import AboutSection from './Sections/AboutSection/AboutSection';

const Home: React.FC = () => {
  return (
    <div className="container">
      <FindAnswerSectionSection />
      <WhatIsLupaiSection />
      <AboutSection />
    </div>
  );
};

export default Home;