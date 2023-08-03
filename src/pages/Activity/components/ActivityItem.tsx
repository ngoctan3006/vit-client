import React from 'react';
import { createEntityAdapter } from '@reduxjs/toolkit';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';

const ActivityItem: React.FC = () => {
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
        Đoàn thanh niên - Hội sinh viên Trường Công nghệ Thông tin & Truyền
        thông
      </div>
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <div style={{ marginBottom: '10px', fontWeight: '500' }}>
          Tham gia Họp lớp thường kỳ do Trường CNTT&TT tổ chức
        </div>
        <div style={{ marginBottom: '10px', fontWeight: '450' }}>
          <AiOutlineFieldTime /> 2023-02-14
        </div>
        <div className="d-flex justify-between mb-5">
          <div style={{ color: 'purple' }}>
            <BsPeople />
            Thành viên
          </div>
          <div style={{ color: '#67c23a' }}>
            <BiMessageDetail />
            Chi tiết
          </div>
        </div>
        <span
          style={{
            color: '#67c23a',
            fontStyle: 'italic',
            fontSize: '14px',
            backgroundColor: '#f0f9eb',
            padding: '5px',
          }}
        >
          Đăng ký thành công
        </span>
      </div>
    </div>
  );
};

export default ActivityItem;
