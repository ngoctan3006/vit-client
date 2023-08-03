import React from 'react';
import './index.scss';
import ActivityItem from './components/ActivityItem';
import PaticipantsTable from './components/PaticipantsTable';

const Activity: React.FC = () => {
  return (
    <div
      className="activity m-5 d-flex "
      style={{
        flexWrap: 'wrap',
      }}
    >
      <PaticipantsTable />
    </div>
  );
};

export default Activity;
