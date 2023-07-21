import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllMember } from 'redux/actions';
import { memberSelector } from 'redux/slices/member.slice';
import { useAppDispatch } from 'redux/store';
import { defaultQueryParam } from 'src/constants/type';
import { getPosition } from 'utils';
import './index.scss';

interface DataType {
  key: string;
  username: string;
  fullname: string;
  email: string;
  phone: string;
  date_join?: string | null;
  date_out?: string | null;
  gender: string;
  status: string;
  position: string;
}

const Member: React.FC = () => {
  const dispatch = useAppDispatch();
  const { members, loading } = useSelector(memberSelector);

  const columns: ColumnsType<DataType> = [
    {
      key: 'username',
      title: 'Tên đăng nhập',
      dataIndex: 'username',
    },
    {
      key: 'fullname',
      title: 'Họ và tên',
      dataIndex: 'fullname',
    },
    {
      key: 'email',
      title: 'Địa chỉ email',
      dataIndex: 'email',
    },
    {
      key: 'phone',
      title: 'Số điện thoại',
      dataIndex: 'phone',
    },
    {
      key: 'date_join',
      title: 'Ngày vào Đội',
      dataIndex: 'date_join',
      render: (text) => (text ? dayjs(new Date(text)).format('MM/YYYY') : ''),
    },
    {
      key: 'date_out',
      title: 'Ngày rời Đội',
      dataIndex: 'date_out',
      render: (text) => (text ? dayjs(new Date(text)).format('MM/YYYY') : ''),
    },
    {
      key: 'gender',
      title: 'Giới tính',
      dataIndex: 'gender',
      render: (text) =>
        text === 'MALE' ? 'Nam' : text === 'FEMALE' ? 'Nữ' : 'Khác',
    },
    {
      key: 'status',
      title: 'Trạng thái',
      dataIndex: 'status',
      align: 'center',
      render: (text) =>
        text === 'ACTIVE' ? (
          <Tag color="success">Hoạt động</Tag>
        ) : text === 'INACTIVE' ? (
          <Tag color="warning">Không hoạt động</Tag>
        ) : (
          <Tag color="error">Blocked</Tag>
        ),
    },
    {
      key: 'position',
      title: 'Vị trí',
      dataIndex: 'position',
      render: (text) => getPosition(text),
    },
  ];

  const dataSource: DataType[] = members.map<DataType>(
    ({
      username,
      fullname,
      email,
      phone,
      date_join,
      date_out,
      gender,
      status,
      position,
    }) => ({
      key: username,
      username,
      fullname,
      email,
      phone,
      date_join,
      date_out,
      gender,
      status,
      position,
    })
  );

  const getMembers = async () => {
    dispatch(getAllMember(defaultQueryParam));
  };

  useEffect(() => {
    document.title = 'VIT | Quản lý nhân sự';
    getMembers();
  }, []);

  return (
    <div className="content member">
      <h2 className="title mb-15">Quản lý nhân sự</h2>
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        size="small"
        bordered
      />
    </div>
  );
};

export default Member;
