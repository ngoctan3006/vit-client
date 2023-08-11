import {
  Avatar,
  Button,
  Col,
  Popconfirm,
  Row,
  Table,
  Tabs,
  TabsProps,
  Tag,
  Tooltip,
  Typography,
  message,
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Loading } from 'components';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { MdOutlineLocationOn } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  GetActivityMember,
  getActivity,
  getActivityMember,
} from 'redux/actions';
import { ActivityTime, activitySelector } from 'redux/slices/activity.slice';
import { useAppDispatch } from 'redux/store';
import { DATE_FORMAT, TIME_FORMAT } from 'src/constants';
import { ActivityMemberState } from 'src/pages/Admin/Activity/components/ActivityMember';
import { getStatus } from 'src/pages/Admin/Activity/utils';
import { authSelector } from 'src/redux/slices/auth.slice';
import { registerActivity, withdrawnActivity } from 'src/services/activity';
import { getColorOfDate } from 'src/utils';
import './index.scss';

const ActivityDetail: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { activity, loading, member } = useSelector(activitySelector);
  const { user } = useSelector(authSelector);
  const [activityMember, setActivityMember] = useState<GetActivityMember[]>([]);
  const [registerLoading, setRegisterLoading] = useState(false);

  const handleRegisterActivity = async (timeId: number) => {
    if (!activity) return;
    try {
      setRegisterLoading(true);
      const { data } = await registerActivity({
        timeId,
        activityId: activity.id,
      });
      await getActivityDetail();
      message.success(data.data.message);
    } catch (error: any) {
      message.error(error.response.data.message);
    } finally {
      setRegisterLoading(false);
    }
  };

  const handleWithdrawnActivity = async (timeId: number) => {
    try {
      setRegisterLoading(true);
      const { data } = await withdrawnActivity(timeId);
      await getActivityDetail();
      message.success(data.data.message);
    } catch (error: any) {
      message.error(error.response.data.message);
    } finally {
      setRegisterLoading(false);
    }
  };

  const timesColumns: ColumnsType<ActivityTime> = [
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
      render: (_: string, { start_time, end_time }: ActivityTime) => (
        <Typography.Text type={getColorOfDate(start_time, end_time)}>
          {moment(start_time).format(DATE_FORMAT)}
        </Typography.Text>
      ),
    },
    {
      title: 'Thời gian',
      key: 'hour_time',
      render: (_: string, { start_time, end_time }: ActivityTime) => (
        <Typography.Text type={getColorOfDate(start_time, end_time)}>
          {moment(start_time).format(TIME_FORMAT)} -{' '}
          {moment(end_time).format(TIME_FORMAT)}
        </Typography.Text>
      ),
    },
    {
      title: 'Đăng ký',
      key: 'action',
      render: (_: string, { id }: ActivityTime) => {
        const isExpired = moment().isAfter(activity?.deadline);
        if (isExpired)
          return (
            <Button disabled type="primary">
              Đã hết hạn
            </Button>
          );
        const isRegisted = member.find((m) => m.id === String(user?.id));
        if (!isRegisted || !isRegisted[id] || isRegisted[id] === 'WITHDRAWN')
          return (
            <Popconfirm
              title="Đăng ký"
              description="Bạn chắc chắn muốn đăng ký hoạt động này?"
              cancelText="Không"
              okText="Chắc chắn"
              onConfirm={() => handleRegisterActivity(id)}
            >
              <Button type="primary">Đăng ký</Button>
            </Popconfirm>
          );
        if (isRegisted[id] === 'REGISTERED' || isRegisted[id] === 'ACCEPTED')
          return (
            <Popconfirm
              title="Xin nghỉ"
              description="Bạn chắc chắn muốn xin nghỉ hoạt động này?"
              cancelText="Không"
              okText="Chắc chắn"
              onConfirm={() => handleWithdrawnActivity(id)}
            >
              <Button type="primary" danger>
                Xin nghỉ
              </Button>
            </Popconfirm>
          );
        if (isRegisted[id] === 'REJECTED')
          return (
            <Button type="primary" disabled>
              Bị từ chối
            </Button>
          );
      },
    },
  ];

  const memberColumns: ColumnsType<ActivityMemberState> = useMemo(() => {
    return [
      {
        key: 'fullname',
        title: 'Họ Tên',
        render: (
          _: string,
          { fullname, avatar, username }: ActivityMemberState
        ) => (
          <div className="d-flex gap-2 justify-start align-center">
            <Avatar src={avatar}>{username.charAt(0).toUpperCase()}</Avatar>
            <Tooltip title={username}>
              <p className="d-center mb-0">{fullname}</p>
            </Tooltip>
          </div>
        ),
      },
      ...activityMember.map((item) => ({
        key: `${item.id}`,
        title: item.name,
        render: (_: string, row: ActivityMemberState) => {
          const [color, text] = getStatus(row[`${item.id}`]);
          return row[`${item.id}`] && <Tag color={color}>{text}</Tag>;
        },
      })),
    ];
  }, [activityMember]);

  const getActivityDetail = async () => {
    if (id) {
      dispatch(getActivity(Number(id)));
      dispatch(getActivityMember(Number(id))).then((value) => {
        if (value.type.includes('fulfilled')) {
          setActivityMember(value.payload as GetActivityMember[]);
        }
      });
    }
  };

  const items: TabsProps['items'] = [
    {
      key: 'times',
      label: 'Kíp hoạt động',
      children: (
        <>
          <Typography.Title level={4}>
            Danh sách các kíp đăng ký:
          </Typography.Title>
          <Table
            columns={timesColumns}
            dataSource={activity?.times}
            pagination={false}
          />
        </>
      ),
    },
    {
      key: 'member',
      label: 'Danh sách thành viên',
      children: (
        <>
          <Typography.Title level={4}>
            Danh sách các thành viên đăng ký:
          </Typography.Title>
          <Table columns={memberColumns} dataSource={member} />
        </>
      ),
    },
  ];

  useEffect(() => {
    document.title = 'VIT | Hoạt động';
    getActivityDetail();
  }, []);

  return (
    <>
      {(loading || registerLoading) && <Loading />}
      <div className="activity-detail p-5">
        <Row gutter={16}>
          <Col span={5}>
            <div className="activity-left d-flex flex-column align-center p-3">
              <div>
                <img src="https://ctsv.hust.edu.vn/static/img/activity.a80f3233.png" />
              </div>
              <Typography.Title className="text-center" level={3}>
                {activity?.name}
              </Typography.Title>
              <div className="activity-info w-full p-5">
                <Typography.Title level={5}>
                  {activity?.description}
                </Typography.Title>
                <Typography.Title
                  type={
                    moment().isBefore(activity?.deadline) ? 'success' : 'danger'
                  }
                  title={
                    moment().isBefore(activity?.deadline)
                      ? 'Deadline đăng ký'
                      : 'Đã hết thời gian đăng ký'
                  }
                  level={5}
                  className="d-flex align-center gap-2"
                >
                  <span className="d-center">
                    <AiOutlineFieldTime />
                  </span>
                  <span className="d-center">{`${moment(
                    activity?.deadline
                  ).format(DATE_FORMAT)} - ${moment(activity?.deadline).format(
                    TIME_FORMAT
                  )}`}</span>
                </Typography.Title>
                <Typography.Title
                  level={5}
                  title="Địa điểm diễn ra hoạt động"
                  className="d-flex align-center gap-2 mt-0"
                >
                  <span className="d-center">
                    <MdOutlineLocationOn />
                  </span>
                  <span className="d-center">{activity?.location}</span>
                </Typography.Title>
              </div>
            </div>
          </Col>
          <Col span={19}>
            <Tabs type="card" items={items} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ActivityDetail;
