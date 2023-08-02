import './index.scss';
import ActivityItem from './components/ActivityItem';
import PaticipantsTable from './components/PaticipantsTable';
import React, { useEffect } from 'react';
import { useAppDispatch } from 'redux/store';
import { activitySelector } from 'redux/slices/activity.slice';
import { useSelector } from 'react-redux';
import { getAllActivity } from 'redux/actions';
import { defaultQueryParam } from 'src/constants';

const Activity: React.FC = () => {
  const dispatch = useAppDispatch();
  const { activities } = useSelector(activitySelector);
  const getActivities = async () => {
    dispatch(getAllActivity(defaultQueryParam));
  };

  useEffect(() => {
    getActivities();
  }, []);
  return (
    <div
      className="activity m-5 d-flex "
      style={{
        flexWrap: 'wrap',
      }}
    >
      {activities?.map((activity) => (
        <ActivityItem data={activity} />
      ))}
    </div>
  );
};

export default Activity;
