import { Carousel } from 'antd';
import MHX from 'assets/images/home/MHX.png';
import TTNV from 'assets/images/home/TTNV.jpg';
import XYT from 'assets/images/home/XYT.jpg';
import React from 'react';

const Main: React.FC = () => {
  return (
    <div className="main p-5">
      <div>
        <p className="subtitle">Sự kiện hot</p>
        <div className="d-center">
          <div className="card">
            <Carousel autoplay>
              <img src={MHX} alt="mhx" />
              <img src={XYT} alt="mhx" />
              <img src={TTNV} alt="mhx" />
            </Carousel>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className="subtitle">Q&A</p>
        <div className="qa-hot p-3">
          <p>quest 1</p>
          <p>quest 1</p>
          <p>quest 1</p>
          <p>quest 1</p>
          <p>quest 1</p>
          <p>quest 1</p>
          <p>quest 1</p>
          <p>quest 1</p>
          <p>quest 1</p>
          <p>quest 1</p>
          <p>quest 1</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
