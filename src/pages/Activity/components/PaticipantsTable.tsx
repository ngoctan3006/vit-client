import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
interface DataType {
  key: string;
  name: string;
  mssv: string;
  roll: string;
  school: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'STT',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Họ và tên',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Mã số sinh viên',
    dataIndex: 'mssv',
    key: 'mssv',
  },
  {
    title: 'Trường/viện',
    dataIndex: 'school',
    key: 'school',
  },
  {
    title: 'Vai trò',
    dataIndex: 'roll',
    key: 'roll',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Đinh Trọng Nghĩa',
    mssv: '20194340',
    roll: 'Team lead',
    school: 'Trường CNTT & TT',
  },
  {
    key: '2',
    name: 'Dương Minh Hiếu',
    mssv: '20171234',
    roll: 'Thành viên',
    school: 'Trường Cơ khí',
  },
  {
    key: '3',
    name: 'Trương Quang Phú',
    mssv: '00000000',
    roll: 'Thành viên',
    school: 'Trường CNTT & TT',
  },
  {
    key: '4',
    name: 'Trương Văn Hiển',
    mssv: '00000000',
    roll: 'Thành viên',
    school: 'Trường CNTT & TT',
  },
  {
    key: '5',
    name: 'Lưu Toàn Thắng',
    mssv: '00000000',
    roll: 'Thành viên',
    school: 'Trường CNTT & TT',
  },
  {
    key: '6',
    name: 'Nguyễn Văn Hiếu',
    mssv: '00000000',
    roll: 'Thành viên',
    school: 'Trường CNTT & TT',
  },
  {
    key: '7',
    name: 'Nguyễn Ngọc Tân',
    mssv: '00000000',
    roll: 'Thành viên',
    school: 'Trường CNTT & TT',
  },
];

const PaticipantsTable: React.FC = () => (
  <div className="w-full mx-5 mt-20">
    <Table columns={columns} dataSource={data} />
  </div>
);

export default PaticipantsTable;
