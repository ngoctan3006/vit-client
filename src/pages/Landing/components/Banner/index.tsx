import React from 'react';
import Carousel from 'src/components/Carousel';
import styles from './styles.module.scss';

const LandingBanner: React.FC = () => {
  return (
    <div className={`${styles.landingBanner} w-full h-[calc(100vh_-_90px)] mt-[90px]`}>
      <Carousel>
        <div className="w-full h-[calc(100vh_-_90px)]">
          <img
            src="images/landing/banner.webp"
            alt="banner image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[calc(100vh_-_90px)]">
          <img
            src="images/landing/banner.webp"
            alt="banner image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[calc(100vh_-_90px)]">
          <img
            src="images/landing/banner.webp"
            alt="banner image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[calc(100vh_-_90px)]">
          <img
            src="images/landing/banner.webp"
            alt="banner image"
            className="w-full h-full object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default LandingBanner;
