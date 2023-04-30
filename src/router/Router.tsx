import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Landing, Login, NotFound, Profile } from '../pages';
import ProtectedRouter from './ProtectedRouter';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="landing" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route element={<ProtectedRouter />}>
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
