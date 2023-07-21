import React from 'react';
import { About, Header } from './components';
import './index.scss';

const Landing: React.FC = () => {
  return (
    <div className="page">
      <Header />
      <About className="section about" />
    </div>
  );
};

export default Landing;
