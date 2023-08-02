import React from 'react';
import { createEntityAdapter } from '@reduxjs/toolkit';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';
import dayjs from 'dayjs';
import { DATE_FORMAT } from 'src/constants';
import { Link } from 'react-router-dom';
const ActivityItem: React.FC = ({ data }) => {
  console.log(data);
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
        {data.name}
      </div>
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <div style={{ marginBottom: '10px', fontWeight: '500' }}>
          {data.description}
        </div>
        <div style={{ marginBottom: '10px', fontWeight: '450' }}>
          <AiOutlineFieldTime /> {dayjs(data.deadline).format(DATE_FORMAT)}
        </div>
        <div className="d-flex justify-between mb-5">
          <Link to={`${data.id}/paticipant`} style={{ color: 'purple' }}>
            <BsPeople />
            Thành viên
          </Link>
          <Link to={`${data.id}/detail`} style={{ color: '#67c23a' }}>
            <BiMessageDetail />
            Chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;
