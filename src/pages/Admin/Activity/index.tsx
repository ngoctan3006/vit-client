import { Button, Space, Table, Tooltip, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import moment from 'moment';
import React, { useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi2';
import { MdModeEditOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { defaultQueryParam } from '../../../constants/type';
import { getAllActivity } from '../../../redux/actions';
import {
  Activity as ActivityType,
  activitySelector,
} from '../../../redux/slices/activity.slice';
import { AppDispatch } from '../../../redux/store';
import { getColorOfDate } from '../../../utils';
import './index.scss';

interface DataType extends ActivityType {
  key: string;
}

const Activity: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { activities, deletedActivities, loading } =
    useSelector(activitySelector);

  const columns: ColumnsType<DataType> = [
    {
      key: 'id',
      title: '#',
      dataIndex: 'id',
    },
    {
      key: 'name',
      title: 'Tên hoạt động',
      dataIndex: 'name',
    },
    {
      key: 'description',
      title: 'Mô tả',
      dataIndex: 'description',
    },
    {
      key: 'start_date',
      title: 'Thời gian bắt đầu',
      dataIndex: 'start_date',
      render: (_, item) => (
        <Typography.Text type={getColorOfDate(item.start_date, item.end_date)}>
          {item.start_date
            ? moment(item.start_date).format('HH:mm DD/MM/YYYY')
            : ''}
        </Typography.Text>
      ),
    },
    {
      key: 'end_date',
      title: 'Thời gian kết thúc',
      dataIndex: 'end_date',
      render: (_, item) => (
        <Typography.Text type={getColorOfDate(item.start_date, item.end_date)}>
          {item.end_date
            ? moment(item.end_date).format('HH:mm DD/MM/YYYY')
            : ''}
        </Typography.Text>
      ),
    },
    {
      key: 'location',
      title: 'Địa điểm',
      dataIndex: 'location',
    },
    {
      key: 'event_id',
      title: 'Sự kiện',
      dataIndex: 'event_id',
    },
    {
      key: 'action',
      title: 'Thao tác',
      render: (_, item) => (
        <Space>
          <Tooltip title="Sửa">
            <Button
              type="primary"
              shape="circle"
              icon={<MdModeEditOutline />}
              onClick={() => {
                console.log('edit ', item.id);
              }}
            />
          </Tooltip>
          <Tooltip title="Xoá">
            <Button
              type="primary"
              danger
              shape="circle"
              icon={<HiOutlineTrash />}
              onClick={() => {
                console.log('delete ', item.id);
              }}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  const dataSource: DataType[] = activities.map((item) => ({
    key: `${item.id}`,
    ...item,
  }));

  const getActivities = async () => {
    dispatch(getAllActivity(defaultQueryParam));
  };

  useEffect(() => {
    document.title = 'VIT | Quản lý hoạt động';
    getActivities();
  }, []);

  return (
    <div className="content activity">
      <h2 className="title mb-15">Quản lý hoạt động</h2>
      <div className="mb-10">
        <Button
          className="d-center ml-auto gap-2"
          type="primary"
          icon={<AiOutlinePlus />}
        >
          Tạo hoạt động
        </Button>
      </div>
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

export default Activity;
