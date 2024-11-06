import React from 'react';

import {
  SectionMainContainer,
} from './HowlupaiWorksSectionStyles';

import HowlupaiWorksSectionOne from './Sections/HowLupaiWorksSectionOne';
import HowLupaiWorksSectionTwo from './Sections/HowLupaiWorksSectionTwo';
import HowlupaiWorksSectionThree from './Sections/HowLupaiWorksSectionThree';
import HowLupaiWorksSectionFour from './Sections/HowLupaiWorksSectionFour';
import HowLupaiWorksSectionFive from './Sections/HowLupaiWorksSectionFive'
import HowLupaiWorksSectionSix from './Sections/HowLupaiWorksSectionSix'
import HowLupaiWorksSectionSeven from './Sections/HowLupaiWorksSectionSeven';


const HowlupaiWorksSection: React.FC = () => {
  return (
    <SectionMainContainer>
      <HowlupaiWorksSectionOne />
      <HowLupaiWorksSectionTwo />
      <HowlupaiWorksSectionThree />
      <HowLupaiWorksSectionFour />
      <HowLupaiWorksSectionFive />
      <HowLupaiWorksSectionSix />
      <HowLupaiWorksSectionSeven />
    </SectionMainContainer >
  );
};

export default HowlupaiWorksSection;
