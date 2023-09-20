import React from 'react';
import Carousel from 'src/components/Carousel';
import styles from './styles.module.scss';

const LandingBanner: React.FC = () => {
  return (
    <div className={`${styles.landingBanner}`}>
      <Carousel className="w-full h-screen">
        <div className="w-full h-screen">
          <img
            src="images/landing/banner.webp"
            alt="banner image"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full h-screen">
          <img
            src="images/landing/banner.webp"
            alt="banner image"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full h-screen">
          <img
            src="images/landing/banner.webp"
            alt="banner image"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full h-screen">
          <img
            src="images/landing/banner.webp"
            alt="banner image"
            className="w-full h-auto object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default LandingBanner;
