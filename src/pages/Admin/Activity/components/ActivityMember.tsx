import { Badge, Tabs, TabsProps } from 'antd';
import React from 'react';
import { useAppDispatch } from 'src/redux/store';

const ActivityMember: React.FC = () => {
  const dispatch = useAppDispatch();

  const items: TabsProps['items'] = [
    {
      key: 'registry',
      label: <Badge color="blue" text="Đăng ký" />,
      children: 'Thành viên đăng ký tham gia',
    },
    {
      key: 'approve',
      label: <Badge color="green" text="Được chấp nhận" />,
      children: 'Thành viên được chấp nhận tham gia',
    },
    {
      key: 'cancel',
      label: <Badge color="volcano" text="Xin nghỉ" />,
      children: 'Thành viên xin nghỉ hoạt động',
    },
  ];

  return <Tabs defaultActiveKey="registry" type="card" items={items} />;
};

export default ActivityMember;
