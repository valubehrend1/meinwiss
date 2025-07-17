import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GridImageContainer, FirstColumn, SecondColumn, ThirdColumn } from './FindAnswerSectionStyles';

import handsPhoto from '../../../../assets/hands-1.jpg';
import streetTrainPhoto from '../../../../assets/street-train-1.jpg';
import backPackGirlPhoto from '../../../../assets/backpack-girl.jpg';
import smilingGirlPhoto from '../../../../assets/vince-fleming-GvIZU9SvrKg-unsplash.jpg';
import trainPhoto from '../../../../assets/leon-bublitz-J-eJiV_VGOs-unsplash.jpg';
import stationPhoto from '../../../../assets/zuyet-awarmatik-XS_rVU5a4GU-unsplash.jpg';

const images = [
  backPackGirlPhoto,
  handsPhoto,
  streetTrainPhoto,
  trainPhoto,
  smilingGirlPhoto,
  stationPhoto,
];

const ImageGrid: React.FC = () => {
  return (
    <GridImageContainer className="image-grid-container">
      <FirstColumn className="first-column">
        <SmoothImage src={images[0]} alt="Backpack Girl" />
      </FirstColumn>

      <SecondColumn className="second-column">
        <SmoothImage src={images[1]} alt="Hands" />
        <SmoothImage src={images[2]} alt="Street Train" />
      </SecondColumn>

      <ThirdColumn className="third-column">
        <SmoothImage src={images[3]} alt="Train" />
        <SmoothImage src={images[4]} alt="Smiling Girl" />
        <SmoothImage src={images[5]} alt="Station" />
      </ThirdColumn>
    </GridImageContainer>
  );
};

const SmoothImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.img
      src={src}
      alt={alt}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.95 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      onLoad={() => setLoaded(true)}
      style={{
        borderRadius: '16px',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
      }}
    />
  );
};

export default ImageGrid;
