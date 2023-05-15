import { Layout } from 'antd';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AdminHeader, Sidebar } from '../';
import './index.scss';

const AdminLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="admin-layout">
      <Sidebar collapsed={collapsed} />
      <Layout className="main">
        <AdminHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout.Content>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
