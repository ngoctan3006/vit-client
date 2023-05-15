import React, { useEffect } from 'react';
import './index.scss';

const Dashboard: React.FC = () => {
  useEffect(() => {
    document.title = 'VIT | Trang chủ quản trị';
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
