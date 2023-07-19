import React from 'react';
import './index.scss';
import Header from './components/Header';
import About from './components/About';

const Landing: React.FC = () => {
  return (
    <>
      <div className="page">
        <Header />
        <About className="section about" />
      </div>
    </>
  );
};

export default Landing;
