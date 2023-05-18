import React, { useEffect } from 'react';
import './index.scss';

const Activity: React.FC = () => {
  useEffect(() => {
    document.title = 'VIT | Quản lý hoạt động';
  }, []);

  return (
    <div className="content activity">
      <h2 className="title mb-15">Quản lý hoạt động</h2>
    </div>
  );
};

export default Activity;
