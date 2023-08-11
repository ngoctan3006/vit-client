import { Avatar, List, Typography } from 'antd';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { activitySelector } from 'redux/slices/activity.slice';
import { useAppDispatch } from 'redux/store';
import { Loading } from 'src/components';
import { defaultQueryParam } from 'src/constants';
import { getAllActivity } from 'src/redux/actions';

const RightSide: React.FC = () => {
  const dispatch = useAppDispatch();
  const { activities, loading } = useSelector(activitySelector);

  useEffect(() => {
    dispatch(getAllActivity(defaultQueryParam));
  }, []);

  console.log(activities);

  return (
    <>
      <div className="right-side p-5">
        <div className="mb-5">
          <h3 className="subtitle mb-2">Hoạt động</h3>
          <hr />
          <List
            itemLayout="horizontal"
            dataSource={activities.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={
                        'https://ctsv.hust.edu.vn/static/img/activity.a80f3233.png'
                      }
                    />
                  }
                  title={
                    <Typography.Title level={5} ellipsis>
                      <Link className="text-16" to={`profile/${item.id}`}>
                        {item.name}
                      </Link>
                    </Typography.Title>
                  }
                  description={
                    <Typography.Text ellipsis>
                      {item.description}
                    </Typography.Text>
                  }
                />
              </List.Item>
            )}
          />
        </div>
        {/* <div className="mb-5">
          <h3 className="subtitle mb-2">Sinh nhật</h3>
          <hr />
          <p>Nguyễn Mai Anh</p>
          <p>Nguyễn Mai Anh</p>
          <p>Nguyễn Mai Anh</p>
        </div> */}
        <div className="mb-5">
          <h3 className="subtitle mb-2">Top</h3>
          <hr />
          <p>Nguyễn Mai Anh</p>
          <p>Nguyễn Mai Anh</p>
          <p>Nguyễn Mai Anh</p>
        </div>
      </div>
      {loading && <Loading />}
    </>
  );
};

export default RightSide;
