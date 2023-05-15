import React, { useEffect } from 'react';
import './index.scss';

const Department: React.FC = () => {
  useEffect(() => {
    document.title = 'VIT | Quản lý mảng';
  }, []);

  return <div>Department</div>;
};

export default Department;
