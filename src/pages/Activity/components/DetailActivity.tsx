import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ActivityItem from './ActivityItem';
import { API } from 'services/axios';
import { message } from 'antd';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
interface DataType {
  id: React.Key;
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
          Hỗ trợ dạy học làng trẻ Hữu Nghị
        </div>
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <div style={{ marginBottom: '10px', fontWeight: '500' }}>
            Giúp, hướng dẫn các em nhỏ làm bài tập
          </div>
          <div style={{ marginBottom: '10px', fontWeight: '450' }}>
            <AiOutlineFieldTime /> 03/08/2023
          </div>
        </div>
      </div>
      <div className="pa-5 mx-5 " style={{ width: '75%' }}>
        <h2>Nội dung</h2>
        <div className="my-5" style={{ color: 'red' }}>
          Hỗ trợ những em nhỏ ở làng trẻ Hữu Nghị làm bài tập, ngoài ra có thể
          tạo một số hoạt động nhỏ để các em vui chơi!{' '}
        </div>
        <h2>Danh sách các kíp đăng ký:</h2>
        <Table columns={columns} dataSource={times} />
      </div>
    </div>
  );
};

export default DetailActivity;
