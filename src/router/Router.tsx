import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { COMMON } from '../constants';
import {
  Activity,
  Club,
  Dashboard,
  Department,
  Event,
  FirstLogin,
  ForgotPassword,
  Group,
  Home,
  Landing,
  Login,
  Member,
  NotFound,
  Profile,
  ResetPassword,
} from '../pages';
import { ProtectedRouter } from './';

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
        <Route path="admin" element={<ProtectedRouter role={COMMON.ADMIN} />}>
          <Route index element={<Dashboard />} />
          <Route path="activity" element={<Activity />} />
          <Route path="department" element={<Department />} />
          <Route path="member" element={<Member />} />
          <Route path="event" element={<Event />} />
          <Route path="group" element={<Group />} />
          <Route path="club" element={<Club />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
