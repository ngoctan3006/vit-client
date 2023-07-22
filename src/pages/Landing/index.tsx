import React, { useEffect, useState } from 'react';
import About from './components/About';
import Contacts from './components/Contacts';
import FeaturedActivities from './components/FeaturedActivities';
import FeaturedMembers from './components/FeaturedMembers';
import Header from './components/Header';
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
      <div className="page">
        <Header />
        <div className="banner"></div>
        {showToTop && (
          <div className="to-top" onClick={scrollToTop}>
            <div className="indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <About className="section about" id="about" />
        <FeaturedActivities
          className="section featured-activities"
          id="featured-activities"
        />
        <FeaturedMembers
          className="section featured-members"
          id="featured-members"
        />
        <Contacts className="section contacts" id="contacts" />
      </div>
    </>
  );
};

export default Landing;
