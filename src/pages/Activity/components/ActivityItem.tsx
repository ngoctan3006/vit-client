import dayjs from 'dayjs';
import React from 'react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { DATE_FORMAT } from 'src/constants';

interface Props {
  activity?: any;
}

const ActivityItem: React.FC<Props> = ({ activity }) => {
  console.log(activity);
  return (
    <div
      className="d-flex p-5 ml-5 mb-5"
      style={{
        width: '22%',
        backgroundColor: '#d5edf1',
        border: '0px ',
        borderRadius: '10px',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div>
        <img src="https://ctsv.hust.edu.vn/static/img/activity.a80f3233.png" />
      </div>
      <div style={{ textAlign: 'center', margin: '10px', fontWeight: '600' }}>
        {activity.name}
      </div>
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <div style={{ marginBottom: '10px', fontWeight: '500' }}>
          {activity.description}
        </div>
        <div style={{ marginBottom: '10px', fontWeight: '450' }}>
          <AiOutlineFieldTime /> {dayjs(activity.deadline).format(DATE_FORMAT)}
        </div>
        <div className="d-flex justify-between mb-5">
          <Link to={`${activity.id}/paticipant`} style={{ color: 'purple' }}>
            <BsPeople />
            Thành viên
          </Link>
          <Link to={`${activity.id}/detail`} style={{ color: '#67c23a' }}>
            <BiMessageDetail />
            Chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;
