import { Button, Layout } from 'antd';
import React from 'react';
import { IoClose, IoMenuOutline } from 'react-icons/io5';
import UserHeader from '../Dropdown/UserHeader';
import './index.scss';

interface Props {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminHeader: React.FC<Props> = ({ collapsed, setCollapsed }) => {
  return (
    <Layout.Header className="admin-header">
      <Button
        className="collapse-button"
        type="text"
        icon={
          collapsed ? (
            <IoMenuOutline className="icon-button" />
          ) : (
            <IoClose className="icon-button" />
          )
        }
        onClick={() => setCollapsed((prev) => !prev)}
      />

      <div className="right">
        <UserHeader />
      </div>
    </Layout.Header>
  );
};

export default AdminHeader;
