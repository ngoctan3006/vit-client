import { Avatar, Dropdown, MenuProps } from 'antd';
import React from 'react';
import { BiLogOutCircle, BiUser } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authSelector, logout } from 'redux/slices/auth.slice';
import { AppDispatch } from 'redux/store';
import { COMMON } from 'src/constants';
import './index.scss';

const UserHeader: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { user } = useSelector(authSelector);

  const items: MenuProps['items'] = [
    {
      key: 'profile',
      label: <Link to="/profile">Thông tin cá nhân</Link>,
      icon: <BiUser />,
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      label: <span>Đăng xuẩt</span>,
      danger: true,
      icon: <BiLogOutCircle />,
      onClick: () => {
        localStorage.removeItem(COMMON.ACCESS_TOKEN);
        localStorage.removeItem(COMMON.REFRESH_TOKEN);
        dispatch(logout());
        navigate('/', { replace: true });
        window.location.reload();
      },
    },
  ];

  return (
    <Dropdown
      className="dropdown"
      menu={{ items }}
      trigger={['click']}
      placement="bottomRight"
      arrow
    >
      <div className="d-center">
        <Avatar className="avatar" src={user?.avatar}>
          {user?.username.charAt(0).toUpperCase()}
        </Avatar>

        <div className="username">
          <span className="hello">Xin chào,</span>{' '}
          {user?.fullname.split(' ').slice(-1)}
        </div>
      </div>
    </Dropdown>
  );
};

export default UserHeader;
