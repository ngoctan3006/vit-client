import React, { useEffect } from 'react';

const Club: React.FC = () => {
  useEffect(() => {
    document.title = 'VIT | Quản lý câu lạc bộ';
  }, []);

  return <div>Club</div>;
};

export default Club;
