import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useMemo } from 'react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllActivity } from 'redux/actions';
import { activitySelector } from 'redux/slices/activity.slice';
import { useAppDispatch } from 'redux/store';
import { defaultQueryParam } from 'src/constants';

interface DataType {
  id: number;
  name: string;
  number_require: number;
  start_time: string;
  end_time: string;
}

const times: DataType[] = [
  {
    id: 1,
    name: 'Kíp 1',
    number_require: 5,
    start_time: '2023-08-03/12:00',
    end_time: '2023-08-03/14:00',
  },
  {
    id: 2,
    name: 'Kíp 2',
    number_require: 5,
    start_time: '2023-08-04/12:00',
    end_time: '2023-08-04/14:00',
  },
  {
    id: 3,
    name: 'Kíp 3',
    number_require: 5,
    start_time: '2023-08-05/12:00',
    end_time: '2023-08-05/14:00',
  },
];

const columns: ColumnsType<DataType> = [
  {
    title: 'Tên kíp',
    dataIndex: 'id',
    width: 30,
    key: 'id',
    fixed: 'left',
  },
  {
    title: 'Số lượng yêu cầu',
    dataIndex: 'number_require',
    key: 'number_require',
    width: 30,
    fixed: 'left',
  },
  {
    title: 'Thời gian bắt đầu',
    dataIndex: 'end_time',
    key: 'end_time',
    fixed: 'left',
    width: 50,
  },
  {
    title: 'Thời gian kết thúc',
    dataIndex: 'start_time',
    key: 'start_time',
    fixed: 'left',
    width: 50,
  },
  {
    title: '',
    key: 'operation',
    fixed: 'right',
    width: 30,
    render: () => <a>Đăng ký</a>,
  },
];

const DetailActivity: React.FC = () => {
  const { id } = useParams();
  const { activities } = useSelector(activitySelector);
  const dispatch = useAppDispatch();
  const getActivities = async () => {
    dispatch(getAllActivity(defaultQueryParam));
  };

  useEffect(() => {
    getActivities();
  }, []);

  const data = useMemo(
    () => activities.filter((activity) => activity.id === Number(id)),
    [id]
  );

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
          {data[0].name}
        </div>
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <div style={{ marginBottom: '10px', fontWeight: '500' }}>
            {data[0].description}
          </div>
          <div style={{ marginBottom: '10px', fontWeight: '450' }}>
            <AiOutlineFieldTime /> {data[0].deadline.slice(0, 10)}
          </div>
        </div>
      </div>
      <div className="pa-5 mx-5 " style={{ width: '75%' }}>
        <h2>Nội dung</h2>
        <div className="my-5" style={{ color: 'red' }}>
          {data[0].description}
        </div>
        <h2>Danh sách các kíp đăng ký:</h2>
        <Table columns={columns} dataSource={times} />
      </div>
    </div>
  );
};

export default DetailActivity;
