import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '..';

const DefaultLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default DefaultLayout;
