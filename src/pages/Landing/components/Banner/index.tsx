import React from 'react';
import Carousel from 'src/components/Carousel';
import styles from './styles.module.scss';

const LandingBanner: React.FC = () => {
  return (
    <div className={`${styles.landingBanner}`}>
      <Carousel className="w-full h-screen">
        <div className="w-full h-screen bg-[url('images/landing/banner.webp')] bg-center" />
        <div className="w-full h-screen bg-[url('images/landing/banner.webp')] bg-center" />
        <div className="w-full h-screen bg-[url('images/landing/banner.webp')] bg-center" />
        <div className="w-full h-screen bg-[url('images/landing/banner.webp')] bg-center" />
        <div className="w-full h-screen bg-[url('images/landing/banner.webp')] bg-center" />
      </Carousel>
    </div>
  );
};

export default LandingBanner;
