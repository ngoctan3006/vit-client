import { Avatar, List, Typography, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { activitySelector } from 'redux/slices/activity.slice';
import { useAppDispatch } from 'redux/store';
import { Loading } from 'src/components';
import { defaultQueryParam } from 'src/constants';
import { TopMember } from 'src/pages/Admin/Dashboard';
import { getAllActivity } from 'src/redux/actions';
import { getTopMember } from 'src/services/admin';

const RightSide: React.FC = () => {
  const dispatch = useAppDispatch();
  const { activities, loading } = useSelector(activitySelector);
  const [topMembers, setTopMembers] = useState<TopMember[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTopMembers = async () => {
    try {
      setIsLoading(true);
      const { data } = await getTopMember();
      setTopMembers(data.data);
    } catch (error: any) {
      message.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTopMembers();
  }, []);

  useEffect(() => {
    dispatch(getAllActivity(defaultQueryParam));
  }, []);

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
                      <Link className="text-16" to={`/profile/${item.id}`}>
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
          <List
            itemLayout="horizontal"
            dataSource={topMembers.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src={item?.avatar}>
                      {item?.username.charAt(0).toUpperCase()}
                    </Avatar>
                  }
                  title={
                    <Link className="text-16" to={`/profile/${item.id}`}>
                      {item.fullname}
                    </Link>
                  }
                  description={`Đã tham gia ${item.count} hoạt động`}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
      {(loading || isLoading) && <Loading />}
    </>
  );
};

export default RightSide;
