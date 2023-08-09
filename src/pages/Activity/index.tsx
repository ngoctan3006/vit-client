import { Col, Pagination, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllActivity } from 'redux/actions';
import { activitySelector } from 'redux/slices/activity.slice';
import { useAppDispatch } from 'redux/store';
import { Loading } from 'src/components';
import { defaultQueryParam } from 'src/constants';
import { ActivityItem } from './components';
import './index.scss';

const Activity: React.FC = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const { activities, loading } = useSelector(activitySelector);
  const getActivities = async () => {
    dispatch(getAllActivity(defaultQueryParam));
  };

  useEffect(() => {
    getActivities();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="activity m-6">
      <Typography.Title level={4}>Danh sách hoạt động</Typography.Title>
      <Row gutter={16}>
        {activities?.map((activity) => (
          <Col key={activity.id} span={6}>
            <ActivityItem activity={activity} />
          </Col>
        ))}

        <Pagination
          className="mt-5 ml-auto"
          current={page}
          onChange={(page) => {
            setPage(page);
          }}
          pageSize={8}
          showSizeChanger={false}
          total={activities.length}
        />
      </Row>
    </div>
  );
};

export default Activity;
