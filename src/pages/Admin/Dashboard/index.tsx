import { Badge, BadgeProps, Calendar, message } from 'antd';
import iconVolunteer from 'assets/images/landing/icon-volunteer.png';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import type { CellRenderInfo } from 'rc-picker/lib/interface';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Loading } from 'src/components';
import { activitySelector } from 'src/redux/slices/activity.slice';
import { getTopMember } from 'src/services/admin';
import './index.scss';

export interface TopMember {
  id: number;
  username: string;
  fullname: string;
  avatar?: string | null;
  count: number;
}

const Dashboard: React.FC = () => {
  const [topMembers, setTopMembers] = useState<TopMember[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { activities, loading } = useSelector(activitySelector);

  const getTopMembers = async () => {
    try {
      setIsLoading(true);
      const { data } = await getTopMember();
      setTopMembers(data.data);
    } catch (error: any) {
      message.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    document.title = 'VIT | Trang chủ quản trị';
    getTopMembers();
  }, []);

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
    <>
      <div className="dashboard-main">
        <div className="part excellent-members">
          <h1 className="title">Top tình nguyện viên xuất sắc</h1>
          {topMembers && topMembers.length === 0 && (
            <p className="text-center">Không có dữ liệu</p>
          )}
          {topMembers.map((member) => (
            <div className="card">
              <img
                src={member?.avatar || iconVolunteer}
                width={48}
                height={48}
                alt="avatar"
              />
              <div>
                <p>
                  <Link to={`/profile/${member.id}`}>{member.fullname}</Link>
                </p>
                <p>
                  Đã tham gia <b>{member.count}</b> hoạt động trong tháng này
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
      {(loading || isLoading) && <Loading />}
    </>
  );
};

export default Dashboard;
