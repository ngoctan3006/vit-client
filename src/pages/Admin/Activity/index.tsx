import React, { useEffect } from 'react';
import './index.scss';

const Activity: React.FC = () => {
  useEffect(() => {
    document.title = 'VIT | Quản lý hoạt động';
  }, []);

  return <div>Activity</div>;
};

export default Activity;
