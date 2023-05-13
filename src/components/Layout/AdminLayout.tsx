import React from 'react';
import { Outlet } from 'react-router-dom';
import { AdminHeader, Sidebar } from '../';
import './index.scss';

const AdminLayout: React.FC = () => {
  return (
    <div className="admin-layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <AdminHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
