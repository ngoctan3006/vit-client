import {
  Activity,
  ActivityDetail,
  AdminActivity,
  AdminClub,
  AdminDashboard,
  AdminDepartment,
  AdminEvent,
  AdminGroup,
  AdminMember,
  Event,
  Feedback,
  FirstLogin,
  ForgotPassword,
  Home,
  Landing,
  Login,
  NotFound,
  Profile,
  ResetPassword,
} from 'pages';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { COMMON } from '../constants';
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
          <Route path="activity" element={<Activity />} />
          <Route path="activity/:id/detail" element={<ActivityDetail />} />
          <Route path="event" element={<Event />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="profile/:id?" element={<Profile />} />
        </Route>
        <Route path="admin" element={<ProtectedRouter role={COMMON.ADMIN} />}>
          <Route index element={<AdminDashboard />} />
          <Route path="activity" element={<AdminActivity />} />
          <Route path="department" element={<AdminDepartment />} />
          <Route path="member" element={<AdminMember />} />
          <Route path="event" element={<AdminEvent />} />
          <Route path="group" element={<AdminGroup />} />
          <Route path="club" element={<AdminClub />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
