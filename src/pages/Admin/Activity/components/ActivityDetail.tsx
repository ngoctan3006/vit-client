import { Drawer, Tabs, TabsProps } from 'antd';
import React from 'react';
import { Activity } from 'redux/slices/activity.slice';
import { ActivityMember, EditActivity } from '.';

interface ActivityDetailProps {
  activity?: Activity;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ActivityDetail: React.FC<ActivityDetailProps> = ({
  activity,
  open,
  setOpen,
}) => {
  const onClose = () => {
    setOpen(false);
  };

  const items: TabsProps['items'] = [
    {
      key: 'edit',
      label: 'Chỉnh sửa hoạt động',
      children: <EditActivity activity={activity} setOpen={setOpen} />,
    },
    {
      key: 'member',
      label: 'Thành viên tham gia',
      children: <ActivityMember />,
    },
  ];

  return (
    <Drawer
      title="Thông tin hoạt động"
      placement="bottom"
      height={700}
      onClose={onClose}
      open={open}
    >
      <Tabs defaultActiveKey="edit" tabPosition="left" items={items} />
    </Drawer>
  );
};

export default ActivityDetail;
