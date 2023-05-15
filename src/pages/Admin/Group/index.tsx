import React, { useEffect } from 'react';
import './index.scss';

const Group: React.FC = () => {
  useEffect(() => {
    document.title = 'VIT | Quản lý nhóm';
  }, []);

  return <div>Group</div>;
};

export default Group;
