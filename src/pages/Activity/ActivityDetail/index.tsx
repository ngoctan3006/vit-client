import { Button, Col, Row, Table, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Loading } from 'components';
import moment from 'moment';
import React, { useEffect } from 'react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { MdOutlineLocationOn } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getActivity } from 'redux/actions';
import { ActivityTime, activitySelector } from 'redux/slices/activity.slice';
import { useAppDispatch } from 'redux/store';
import { DATE_FORMAT, TIME_FORMAT } from 'src/constants';
import { getColorOfDate } from 'src/utils';
import './index.scss';

const ActivityDetail: React.FC = () => {
  const { id } = useParams();
  const { activity, loading } = useSelector(activitySelector);
  const dispatch = useAppDispatch();

  const columns: ColumnsType<ActivityTime> = [
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

  const getActivityDetail = () => {
    if (id) dispatch(getActivity(Number(id)));
  };

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
          <Typography.Title level={4}>
            Danh sách các kíp đăng ký:
          </Typography.Title>
          <Table
            columns={columns}
            dataSource={activity?.times}
            pagination={false}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ActivityDetail;
