import React from 'react';
import { TypingDotsContainer, Dot } from './ChatStyles'

const TypingDots: React.FC = () => {
  return (
    <TypingDotsContainer>
      <Dot />
      <Dot />
      <Dot />
    </TypingDotsContainer>
  );
};

export default TypingDots;
