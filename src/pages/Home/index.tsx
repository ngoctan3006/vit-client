import { Col, Row } from 'antd';
import React from 'react';
import { LeftSide, Main, RightSide } from './components';
import './index.scss';

const Home: React.FC = () => {
  return (
    <div className="home mt-5">
      <div className="left-right-side">
        <LeftSide />
        <RightSide />
      </div>
      <Row>
        <Col span={5}></Col>
        <Col span={14}>
          <Main />
        </Col>
        <Col span={5}></Col>
      </Row>
    </div>
  );
};

export default Home;
