import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  FirstLogin,
  ForgotPassword,
  Home,
  Landing,
  Login,
  NotFound,
  Profile,
  ResetPassword,
} from '../pages';
import ProtectedRouter from './ProtectedRouter';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="landing" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="welcome" element={<FirstLogin />} />
        <Route element={<ProtectedRouter />}>
          <Route path="home" element={<Home />} />
          <Route path="profile/:id?" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
