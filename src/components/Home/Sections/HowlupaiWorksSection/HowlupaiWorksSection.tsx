import React from 'react';

import {
  SectionMainContainer,
} from './HowlupaiWorksSectionStyles';

import HowlupaiWorksSectionOne from './Sections/HowLupaiWorksSectionOne';
import HowLupaiWorksSectionTwo from './Sections/HowLupaiWorksSectionTwo';
import HowlupaiWorksSectionThree from './Sections/HowLupaiWorksSectionThree';


const HowlupaiWorksSection: React.FC = () => {
  return (
    <SectionMainContainer>
      <HowlupaiWorksSectionOne />
      <HowLupaiWorksSectionTwo />
      <HowlupaiWorksSectionThree />
    </SectionMainContainer >
  );
};

export default HowlupaiWorksSection;
