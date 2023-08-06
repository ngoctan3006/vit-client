import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllActivity } from 'redux/actions';
import { activitySelector } from 'redux/slices/activity.slice';
import { useAppDispatch } from 'redux/store';
import { defaultQueryParam } from 'src/constants';
import ActivityItem from './components/ActivityItem';
import './index.scss';

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
      className="activity m-5 d-flex"
      style={{
        flexWrap: 'wrap',
      }}
    >
      {activities?.map((activity) => (
        <ActivityItem key={activity.id} data={activity} />
      ))}
    </div>
  );
};

export default Activity;
