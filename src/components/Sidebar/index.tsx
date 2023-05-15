import { Layout, Menu } from 'antd';
import React from 'react';
import { BsCalendarEvent } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import {
  MdOutlineSpaceDashboard,
  MdOutlineSportsKabaddi,
} from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import './index.scss';

interface SidebarProps {
  collapsed?: boolean;
}

const menuItems = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <MdOutlineSpaceDashboard className="icon" />,
    path: '/admin',
  },
  {
    key: 'member',
    label: 'Thành viên',
    icon: <FaRegUser className="icon" />,
    path: '/admin/member',
  },
  {
    key: 'activity',
    label: 'Hoạt động',
    icon: <MdOutlineSportsKabaddi className="icon" />,
    path: '/admin/activity',
  },
  {
    key: 'event',
    label: 'Sự kiện',
    icon: <BsCalendarEvent className="icon" />,
    path: '/admin/event',
  },
];

const Sidebar: React.FC<SidebarProps> = ({ collapsed = false }) => {
  const navigate = useNavigate();

  return (
    <Layout.Sider
      className="sidebar"
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className="d-center my-10">
        <Link to="/home">
          <img
            className="logo"
            src="/logo.png"
            alt="logo"
            width={collapsed ? 50 : 100}
          />
        </Link>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={['dashboard']}
        items={menuItems.map(({ path, ...rest }) => ({
          ...rest,
          onClick: () => navigate(path),
        }))}
      />
    </Layout.Sider>
  );
};

export default Sidebar;
