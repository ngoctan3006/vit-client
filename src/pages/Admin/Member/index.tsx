import React, { useEffect } from 'react';
import './index.scss';

const Member: React.FC = () => {
  useEffect(() => {
    document.title = 'VIT | Quản lý nhân sự';
  }, []);

  return (
    <div className="content member">
      <h2 className="title">Quản lý nhân sự</h2>
    </div>
  );
};

export default Member;
