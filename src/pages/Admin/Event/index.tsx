import React, { useEffect } from 'react';
import './index.scss';

const Event: React.FC = () => {
  useEffect(() => {
    document.title = 'VIT | Quản lý sự kiện';
  }, []);

  return <div>Event</div>;
};

export default Event;
