import React, { useEffect } from 'react';
import ActivityItem from '../components/ActivityItem';
import { useAppDispatch } from 'redux/store';
import { activitySelector } from 'redux/slices/activity.slice';
import { useSelector } from 'react-redux';
import { getAllActivity } from 'redux/actions';
import { defaultQueryParam } from 'src/constants';

const ActivityPaticipant: React.FC = () => {
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
      <ActivityItem />
    </div>
  );
};

export default ActivityPaticipant;
