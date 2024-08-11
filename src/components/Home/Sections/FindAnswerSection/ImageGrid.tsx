import React from 'react';

import { GridImageContainer, FirstColumn, SecondColumn, ThirdColumn } from './FindAnswerSectionStyles';

import handsPhoto from '../../../../assets/hands-1.jpg';
import streetTrainPhoto from '../../../../assets/street-train-1.jpg';

const images = [
  handsPhoto,
  streetTrainPhoto,
  handsPhoto,
  streetTrainPhoto,
  handsPhoto,
  streetTrainPhoto,
];

const ImageGrid: React.FC = () => {
  return (
    <GridImageContainer className='image-grid-container'>
      <FirstColumn className='first-column'>
        <img src={images[0]} alt={images[0]} />
      </FirstColumn>

      <SecondColumn className='second-column'>
        <img src={images[1]} alt={images[1]} />
        <img src={images[2]} alt={images[2]} />
      </SecondColumn>

      <ThirdColumn className='third-column'>
        <img src={images[3]} alt={images[3]} />
        <img src={images[4]} alt={images[4]} />
        <img src={images[5]} alt={images[5]} />
      </ThirdColumn>
    </GridImageContainer>
  );
};

export default ImageGrid;
