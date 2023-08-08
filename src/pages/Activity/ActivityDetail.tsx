import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import moment from 'moment';
import React, { useEffect } from 'react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getActivity } from 'redux/actions';
import { ActivityTime, activitySelector } from 'redux/slices/activity.slice';
import { useAppDispatch } from 'redux/store';
import { Loading } from 'src/components';
import { DATE_FORMAT, TIME_FORMAT } from 'src/constants';

const ActivityDetail: React.FC = () => {
  const { id } = useParams();
  const { activity, loading } = useSelector(activitySelector);
  const dispatch = useAppDispatch();

  const columns: ColumnsType<ActivityTime> = [
    {
      title: 'Tên kíp',
      dataIndex: 'name',
    },
    {
      title: 'Số lượng yêu cầu',
      dataIndex: 'number_require',
    },
    {
      title: 'Ngày diễn ra',
      key: 'date_time',
      render: (_: string, { start_time }: ActivityTime) =>
        moment(start_time).format(DATE_FORMAT),
    },
    {
      title: 'Thời gian kết thúc',
      key: 'hour_time',
      render: (_: string, { start_time, end_time }: ActivityTime) =>
        `${moment(start_time).format(TIME_FORMAT)} - ${moment(end_time).format(
          TIME_FORMAT
        )}`,
    },
    {
      title: 'Đăng ký',
      key: 'action',
      render: () => <a>Đăng ký</a>,
    },
  ];

  const getActivityDetail = () => {
    if (id) dispatch(getActivity(Number(id)));
  };

  useEffect(() => {
    document.title = 'VIT | Hoạt động';
    getActivityDetail();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="mt-20 pt-10 w-full d-flex">
      <div
        className="d-flex p-5 ml-5 mb-5"
        style={{
          width: '22%',
          backgroundColor: '#d5edf1',
          border: '0px ',
          borderRadius: '10px',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div>
          <img src="https://ctsv.hust.edu.vn/static/img/activity.a80f3233.png" />
        </div>
        <div style={{ textAlign: 'center', margin: '10px', fontWeight: '600' }}>
          {activity?.name}
        </div>
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <div style={{ marginBottom: '10px', fontWeight: '500' }}>
            {activity?.description}
          </div>
          <div style={{ marginBottom: '10px', fontWeight: '450' }}>
            <AiOutlineFieldTime /> {activity?.deadline.slice(0, 10)}
          </div>
        </div>
      </div>
      <div className="pa-5 mx-5 " style={{ width: '75%' }}>
        <h2>Nội dung</h2>
        <div className="my-5" style={{ color: 'red' }}>
          {activity?.description}
        </div>
        <h2>Danh sách các kíp đăng ký:</h2>
        <Table
          columns={columns}
          dataSource={activity?.times}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default ActivityDetail;
