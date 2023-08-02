import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

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
    name: 'Tạ Hải Tùng',
    mssv: '00000000',
    roll: 'Thành viên',
    school: 'Trường CNTT & TT',
  },
  {
    key: '4',
    name: 'Tạ Hải Tùng',
    mssv: '00000000',
    roll: 'Thành viên',
    school: 'Trường CNTT & TT',
  },
  {
    key: '5',
    name: 'Tạ Hải Tùng',
    mssv: '00000000',
    roll: 'Thành viên',
    school: 'Trường CNTT & TT',
  },
  {
    key: '6',
    name: 'Tạ Hải Tùng',
    mssv: '00000000',
    roll: 'Thành viên',
    school: 'Trường CNTT & TT',
  },
  {
    key: '7',
    name: 'Tạ Hải Tùng',
    mssv: '00000000',
    roll: 'Thành viên',
    school: 'Trường CNTT & TT',
  },
  {
    key: '8',
    name: 'Tạ Hải Tùng',
    mssv: '00000000',
    roll: 'Thành viên',
    school: 'Trường CNTT & TT',
  },
  {
    key: '9',
    name: 'Tạ Hải Tùng',
    mssv: '00000000',
    roll: 'Thành viên',
    school: 'Trường CNTT & TT',
  },
  {
    key: '10',
    name: 'Tạ Hải Tùng',
    mssv: '00000000',
    roll: 'Thành viên',
    school: 'Trường CNTT & TT',
  },
  {
    key: '11',
    name: 'Tạ Hải Tùng',
    mssv: '00000000',
    roll: 'Thành viên',
    school: 'Trường CNTT & TT',
  },
  {
    key: '12',
    name: 'Tạ Hải Tùng',
    mssv: '00000000',
    roll: 'Thành viên',
    school: 'Trường CNTT & TT',
  },
];

const PaticipantsTable: React.FC = () => (
  <div className="w-full mx-5">
    <Table columns={columns} dataSource={data} />
  </div>
);

export default PaticipantsTable;
