import { Badge, BadgeProps, Calendar } from 'antd';
import iconVolunteer from 'assets/images/landing/icon-volunteer.png';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import type { CellRenderInfo } from 'rc-picker/lib/interface';
import React, { useEffect, useState } from 'react';
import './index.scss';

const Dashboard: React.FC = () => {
  useEffect(() => {
    document.title = 'VIT | Trang chủ quản trị';
  }, []);

  const [topMembers, setTopMembers] = useState([
    {
      name: 'Le Nhat Nam',
      numberOfActivities: 10,
    },
    {
      name: 'Nguyen Ngoc Tan',
      numberOfActivities: 11,
    },
    {
      name: 'Dinh Trong Nghia',
      numberOfActivities: 5,
    },
    {
      name: 'Duong Minh Hieu',
      numberOfActivities: 8,
    },
    {
      name: 'Duong Minh Hieu',
      numberOfActivities: 8,
    },
  ]);
  const [value, setValue] = useState(() => dayjs());

  const getListData = (value: Dayjs) => {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      default:
    }
    return listData || [];
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge
              status={item.type as BadgeProps['status']}
              text={item.content}
            />
          </li>
        ))}
      </ul>
    );
  };

  const getMonthData = (value: Dayjs) => {
    if (value.month() === 8) {
      return 1394;
    }
  };

  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const cellRender = (current: Dayjs, info: CellRenderInfo<Dayjs>) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  return (
    <div className="dashboard-main">
      <div className="part excellent-members">
        <h1 className="title">Top tình nguyện viên xuất sắc</h1>
        {topMembers.map((member) => (
          <div className="card">
            <img src={iconVolunteer} width={48} height={48} alt="avatar" />
            <div>
              <p>{member.name}</p>
              <p>
                Đã tham gia <b>{member.numberOfActivities}</b> hoạt động trong
                tháng này
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="part calendar">
        <h1 className="title">Các sự kiện trong tháng</h1>
        {/* @ts-ignore */}
        <Calendar value={value} cellRender={cellRender} />
      </div>
    </div>
  );

  return <div>Dashboard</div>;
};

export default Dashboard;
