import {
  Button,
  Popconfirm,
  Space,
  Table,
  Tooltip,
  Typography,
  message,
} from 'antd';
import { ColumnsType } from 'antd/es/table';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi2';
import { MdModeEditOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { getAllActivity } from 'redux/actions';
import {
  Activity as ActivityType,
  activitySelector,
} from 'redux/slices/activity.slice';
import { AppDispatch } from 'redux/store';
import { DATE_FORMAT, TIME_FORMAT, defaultQueryParam } from 'src/constants';
import { getColorOfDate } from 'utils';
import CreateActivityModal from './CreateActivityModal';
import './index.scss';

interface DataType extends ActivityType {
  key: string;
}

const Activity: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { activities, deletedActivities, loading } =
    useSelector(activitySelector);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [currAct, setCurrAct] = useState<number>();
  const currActRef = useRef(null);

  const confirmDelete = (
    e: React.MouseEvent<HTMLElement, MouseEvent> | undefined
  ) => {
    message.success('Xoá hoạt động thành công');
    console.log(currAct);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: '#',
      dataIndex: 'id',
    },
    {
      title: 'Tên hoạt động',
      dataIndex: 'name',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
    },
    {
      title: 'Hạn đăng ký',
      dataIndex: 'deadline',
      render: (deadline: string) => (
        <Typography.Text
          type={moment().isBefore(moment(deadline)) ? 'success' : 'danger'}
        >
          {moment(deadline).format(`${TIME_FORMAT} ${DATE_FORMAT}`)}
        </Typography.Text>
      ),
    },
    {
      key: 'start_date',
      title: 'Thời gian bắt đầu',
      render: (_, { times }) => (
        <Typography.Text
          type={getColorOfDate(
            times[0].start_time,
            times[times.length - 1].end_time
          )}
        >
          {times[0].start_time
            ? moment(times[0].start_time).format(
                `${TIME_FORMAT} ${DATE_FORMAT}`
              )
            : ''}
        </Typography.Text>
      ),
    },
    {
      key: 'end_date',
      title: 'Thời gian kết thúc',
      render: (_, { times }) => (
        <Typography.Text
          type={getColorOfDate(
            times[0].start_time,
            times[times.length - 1].end_time
          )}
        >
          {times[times.length - 1].end_time
            ? moment(times[times.length - 1].end_time).format(
                `${TIME_FORMAT} ${DATE_FORMAT}`
              )
            : ''}
        </Typography.Text>
      ),
    },
    {
      title: 'Địa điểm',
      dataIndex: 'location',
    },
    {
      title: 'Sự kiện',
      dataIndex: 'event_id',
    },
    {
      key: 'action',
      title: 'Thao tác',
      dataIndex: '',
      render: (_, { id }) => (
        <Space>
          <Tooltip title="Sửa">
            <Button
              ref={currActRef}
              type="primary"
              shape="circle"
              icon={<MdModeEditOutline />}
              onClick={() => {
                console.log('edit ', id);
              }}
            />
          </Tooltip>
          <Popconfirm
            title="Xoá hoạt động"
            description="Bạn chắc chắn muốn xoá hoạt động này?"
            onConfirm={confirmDelete}
            okText="OK"
            cancelText="Huỷ"
          >
            <Tooltip title="Xoá">
              <Button
                ref={currActRef}
                type="primary"
                danger
                shape="circle"
                icon={<HiOutlineTrash />}
                onClick={() => setCurrAct(id)}
              />
            </Tooltip>
          </Popconfirm>
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
      <h2 className="title mb-3">Quản lý hoạt động</h2>
      <div className="mb-6">
        <Button
          className="d-center ml-auto gap-2"
          type="primary"
          icon={<AiOutlinePlus />}
          onClick={() => setIsCreateModalOpen(true)}
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

      <CreateActivityModal
        show={isCreateModalOpen}
        setShow={setIsCreateModalOpen}
      />
    </div>
  );
};

export default Activity;
