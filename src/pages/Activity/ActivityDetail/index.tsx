import {
  Avatar,
  Badge,
  Button,
  Col,
  Row,
  Table,
  Tabs,
  TabsProps,
  Tooltip,
  Typography,
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
import { getColorOfDate } from 'src/utils';
import './index.scss';

const ActivityDetail: React.FC = () => {
  const { id } = useParams();
  const { activity, loading, member } = useSelector(activitySelector);
  const [activityMember, setActivityMember] = useState<GetActivityMember[]>([]);
  const dispatch = useAppDispatch();

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
      render: () => (
        <Button disabled={moment().isAfter(activity?.deadline)} type="primary">
          {moment().isAfter(activity?.deadline) ? 'Đã hết hạn' : 'Đăng ký'}
        </Button>
      ),
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
          return (
            row[`${item.id}`] && (
              <div className="d-flex justify-between">
                <Badge color={color} text={text} />
              </div>
            )
          );
        },
      })),
    ];
  }, [activityMember]);

  const getActivityDetail = () => {
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
          <Table
            columns={memberColumns}
            dataSource={member}
            pagination={false}
          />
        </>
      ),
    },
  ];

  useEffect(() => {
    document.title = 'VIT | Hoạt động';
    getActivityDetail();
  }, []);

  if (loading) return <Loading />;

  return (
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
  );
};

export default ActivityDetail;
