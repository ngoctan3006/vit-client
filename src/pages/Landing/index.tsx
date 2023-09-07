import React, { useEffect, useState } from 'react';
import {
  About,
  Activities,
  Banner,
  Contact,
  Header,
  Humans,
} from './components';
import './index.scss';

const Landing: React.FC = () => {
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 800) {
        setShowToTop(true);
      } else {
        setShowToTop(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="page landing-page">
        <Header />
        <Banner />
        {showToTop && <div className="to-top" onClick={scrollToTop} />}
        <About />
        <Activities />
        <Humans />
        <Contact />
      </div>
    </>
  );
};

export default Landing;
