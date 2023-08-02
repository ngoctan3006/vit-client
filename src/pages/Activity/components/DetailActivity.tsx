import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ActivityItem from './ActivityItem';
import { API } from 'services/axios';
import { message } from 'antd';

const DetailActivity: React.FC = () => {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState({});
  async () => {
    try {
      const {
        data: { data: res },
      } = await API.get(`activity/${id}`);
      setData(res);
    } catch (error: any) {
      message.error(error.response.data.message);
    }
  };
  console.log(data);

  return <div className="mt-20 pt-10">DetailActivity</div>;
};

export default DetailActivity;
