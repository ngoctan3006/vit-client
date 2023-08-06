import { Typography } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Activity } from 'redux/slices/activity.slice';
import { DATE_FORMAT } from 'src/constants';
import './index.scss';

interface Props {
  activity?: Activity;
}

const ActivityItem: React.FC<Props> = ({ activity }) => {
  return (
    <div className="d-center flex-column activity-item p-5">
      <div>
        <img src="https://ctsv.hust.edu.vn/static/img/activity.a80f3233.png" />
      </div>
      <Typography.Title
        className="w-full"
        ellipsis={{
          tooltip: activity?.name,
        }}
        level={3}
      >
        {activity?.name}
      </Typography.Title>
      <div className="p-5 w-full activity-detail-wrap">
        <Typography.Title
          ellipsis={{ tooltip: activity?.deadline }}
          className="activity-description"
          level={5}
        >
          {activity?.description}
        </Typography.Title>
        <Typography.Title
          level={5}
          className="d-flex align-center gap-1 mt-0 activity-description"
        >
          <AiOutlineFieldTime /> {dayjs(activity?.deadline).format(DATE_FORMAT)}
        </Typography.Title>
        <div className="d-flex justify-between">
          <Link
            className="d-center gap-1"
            to={`${activity?.id}/paticipant`}
            style={{ color: 'purple' }}
          >
            <BsPeople />
            Thành viên
          </Link>
          <Link
            className="d-center gap-1"
            to={`${activity?.id}/detail`}
            style={{ color: '#67c23a' }}
          >
            <BiMessageDetail />
            Chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;
