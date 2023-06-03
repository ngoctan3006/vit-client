import { Badge, TabsProps } from 'antd';
import {
  Button,
  Popconfirm,
  Space,
  Table,
  Tabs,
  Tooltip,
  Typography,
} from 'antd';
import { ColumnsType } from 'antd/es/table';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi2';
import { MdModeEditOutline, MdRestore } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteActivity,
  getAllActivity,
  getAllActivityDeleted,
} from 'redux/actions';
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
  const [tab, setTab] = useState('active');

  const confirmDelete = (
    e: React.MouseEvent<HTMLElement, MouseEvent> | undefined
  ) => {
    dispatch(deleteActivity(currAct!));
  };

  const onChange = (key: string) => {
    setTab(key);
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
      render: (_, { id }) =>
        tab === 'deleted' ? (
          <Tooltip title="Khôi phục">
            <Button
              className="d-center"
              type="primary"
              shape="circle"
              icon={<MdRestore />}
              onClick={() => {
                console.log('restore ', id);
              }}
            />
          </Tooltip>
        ) : (
          <Space>
            <Tooltip title="Sửa">
              <Button
                className="d-center"
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
                  className="d-center"
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

  const dataSource: DataType[] = useMemo(
    () =>
      tab === 'deleted'
        ? deletedActivities.map((item) => ({
            key: `${item.id}`,
            ...item,
          }))
        : tab === 'active'
        ? activities
            .filter((item) =>
              moment(item.times[item.times.length - 1].end_time).isAfter(
                moment()
              )
            )
            .map((item) => ({
              key: `${item.id}`,
              ...item,
            }))
        : activities
            .filter((item) =>
              moment(item.times[item.times.length - 1].end_time).isBefore(
                moment()
              )
            )
            .map((item) => ({
              key: `${item.id}`,
              ...item,
            })),
    [tab, activities, deletedActivities]
  );

  const getActivities = async () => {
    dispatch(getAllActivity(defaultQueryParam));
  };

  const getActivitiesDeleted = async () => {
    dispatch(getAllActivityDeleted(defaultQueryParam));
  };

  useEffect(() => {
    document.title = 'VIT | Quản lý hoạt động';
    getActivities();
  }, []);

  useEffect(() => {
    if (tab === 'deleted') getActivitiesDeleted();
    else getActivities();
  }, [tab]);

  const items: TabsProps['items'] = [
    {
      key: 'active',
      label: <Badge status="success" text="Đang hoạt động" />,
      children: (
        <>
          <div className="d-flex mb-6">
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
        </>
      ),
    },
    {
      key: 'expired',
      label: <Badge status="error" text="Đã diễn ra" />,
      children: (
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          size="small"
          bordered
        />
      ),
    },
    {
      key: 'deleted',
      label: (
        <Badge
          className="d-center gap-1"
          count={<HiOutlineTrash color="#ff4d4f" />}
          text={<Typography.Text type="danger">Đã xoá</Typography.Text>}
        />
      ),
      children: (
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          size="small"
          bordered
        />
      ),
    },
  ];

  return (
    <div className="content activity">
      <h2 className="title mb-10">Quản lý hoạt động</h2>

      <Tabs
        defaultActiveKey="1"
        type="card"
        items={items}
        onChange={onChange}
      />

      <CreateActivityModal
        show={isCreateModalOpen}
        setShow={setIsCreateModalOpen}
      />
    </div>
  );
};

export default Activity;
