import React from 'react';
import './index.scss';
import Header from './components/Header';
import About from './components/About';
import FeaturedActivities from './components/FeaturedActivities';
import FeaturedMembers from './components/FeaturedMembers';

const Landing: React.FC = () => {
  return (
    <>
      <div className="page">
        <Header />
        <div className="banner"></div>
        <About className="section about" id="about" />
        <FeaturedActivities
          className="section featured-activities"
          id="featured-activities"
        />
        <FeaturedMembers
          className="section featured-members"
          id="featured-members"
        />
      </div>
    </>
  );
};

export default Landing;
