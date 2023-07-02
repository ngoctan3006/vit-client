import {
  Badge,
  Button,
  Popconfirm,
  Space,
  Table,
  Tabs,
  TabsProps,
  Tooltip,
  Typography,
} from 'antd';
import { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';
import React, { useEffect, useMemo, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { HiOutlineEye, HiOutlineTrash } from 'react-icons/hi2';
import { MdModeEditOutline, MdRestore } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteActivity,
  getAllActivity,
  getAllActivityDeleted,
  restoreActivity,
} from 'redux/actions';
import {
  Activity as ActivityType,
  activitySelector,
} from 'redux/slices/activity.slice';
import { AppDispatch } from 'redux/store';
import { DATE_FORMAT, TIME_FORMAT, defaultQueryParam } from 'src/constants';
import { getColorOfDate } from 'utils';
import { ActivityDetail, CreateActivityModal } from './components';
import './index.scss';

interface DataType extends ActivityType {
  key: string;
}

const Activity: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { activities, deletedActivities, loading } =
    useSelector(activitySelector);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isViewActivityOpen, setIsViewActivityOpen] = useState(false);
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
    tab !== 'deleted' && {
      title: 'Mô tả',
      dataIndex: 'description',
    },
    {
      title: 'Hạn đăng ký',
      dataIndex: 'deadline',
      render: (deadline: string) => (
        <Typography.Text
          type={dayjs().isBefore(dayjs(deadline)) ? 'success' : 'danger'}
        >
          {dayjs(deadline).format(`${TIME_FORMAT} ${DATE_FORMAT}`)}
        </Typography.Text>
      ),
    },
    {
      key: 'start_date',
      title: 'Thời gian bắt đầu',
      render: (_: string, { times }: DataType) => (
        <Typography.Text
          type={getColorOfDate(
            times[0].start_time,
            times[times.length - 1].end_time
          )}
        >
          {times[0].start_time
            ? dayjs(times[0].start_time).format(`${TIME_FORMAT} ${DATE_FORMAT}`)
            : ''}
        </Typography.Text>
      ),
    },
    {
      key: 'end_date',
      title: 'Thời gian kết thúc',
      render: (_: string, { times }: DataType) => (
        <Typography.Text
          type={getColorOfDate(
            times[0].start_time,
            times[times.length - 1].end_time
          )}
        >
          {times[times.length - 1].end_time
            ? dayjs(times[times.length - 1].end_time).format(
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
    tab === 'deleted' && {
      title: 'Ngày xoá',
      dataIndex: 'deleted_at',
      render: (deleted_at: string) => (
        <Typography.Text type="danger">
          {dayjs(deleted_at).format(`${TIME_FORMAT} ${DATE_FORMAT}`)}
        </Typography.Text>
      ),
    },
    {
      key: 'action',
      title: 'Thao tác',
      dataIndex: '',
      render: (_: any, { id }: DataType) =>
        tab === 'deleted' ? (
          <Tooltip title="Khôi phục">
            <Button
              className="d-center"
              type="primary"
              shape="circle"
              icon={<MdRestore />}
              onClick={() => {
                dispatch(restoreActivity(id));
              }}
            />
          </Tooltip>
        ) : (
          <Space>
            <Tooltip title="Xem thông tin chi tiết">
              <Button
                className="d-center"
                type="primary"
                shape="circle"
                icon={<HiOutlineEye />}
                onClick={() => {
                  setCurrAct(id);
                  setIsViewActivityOpen(true);
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
  ].filter(Boolean) as ColumnsType<DataType>;

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
              dayjs(item.times[item.times.length - 1].end_time).isAfter(dayjs())
            )
            .map((item) => ({
              key: `${item.id}`,
              ...item,
            }))
        : activities
            .filter((item) =>
              dayjs(item.times[item.times.length - 1].end_time).isBefore(
                dayjs()
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
        defaultActiveKey="active"
        type="card"
        items={items}
        onChange={onChange}
      />

      <CreateActivityModal
        show={isCreateModalOpen}
        setShow={setIsCreateModalOpen}
      />

      <ActivityDetail
        activity={activities.find((activity) => activity.id === currAct)}
        open={isViewActivityOpen}
        setOpen={setIsViewActivityOpen}
      />
    </div>
  );
};

export default Activity;
