import React from 'react';
import {
  About,
  FeaturedActivities,
  FeaturedMembers,
  Header,
} from './components';
import './index.scss';

const Landing: React.FC = () => {
  return (
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
  );
};

export default Landing;
