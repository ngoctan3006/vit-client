import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllActivity } from 'redux/actions';
import { activitySelector } from 'redux/slices/activity.slice';
import { useAppDispatch } from 'redux/store';
import { defaultQueryParam } from 'src/constants';
import { ActivityItem } from './components';
import './index.scss';
import { Col, Row, Typography } from 'antd';

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
    <div className="activity m-6">
      <Typography.Title level={4}>Danh sách hoạt động</Typography.Title>
      <Row gutter={16}>
        {activities?.map((activity) => (
          <Col key={activity.id} span={6}>
            <ActivityItem activity={activity} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Activity;
