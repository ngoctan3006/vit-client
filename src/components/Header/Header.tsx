import { Avatar, Dropdown, MenuProps } from 'antd';
import React from 'react';
import { BiLogOutCircle, BiUser } from 'react-icons/bi';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { COMMON } from '../../constants';
import { authSelector, logout } from '../../redux/slices/auth.slice';
import { AppDispatch } from '../../redux/store';
import './index.scss';

const NavLinkItems = [
  {
    key: 'home',
    name: 'Trang chủ',
    path: '/home',
  },
  {
    key: 'activity',
    name: 'Hoạt động',
    path: '/activity',
  },
  {
    key: 'event',
    name: 'Sự kiện',
    path: '/event',
  },
  {
    key: 'contact',
    name: 'Liên hệ',
    path: '/contact',
  },
  {
    key: 'about',
    name: 'Về chúng tôi',
    path: '/about',
  },
];

const Header: React.FC = () => {
  const { user } = useSelector(authSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <Link to="/profile">Thông tin cá nhân</Link>,
      icon: <BiUser />,
    },
    user?.position === 'ADMIN' && {
      key: '2',
      label: <Link to="/admin">Trang quản trị</Link>,
      icon: <MdOutlineAdminPanelSettings />,
    },
    {
      type: 'divider',
    },
    {
      key: '4',
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
  ].filter(Boolean) as MenuProps['items'];

  return (
    <div className="header d-center">
      <div className="container">
        <Link to="/home">
          <img className="logo" src="/logo.png" alt="logo" />
        </Link>

        <div className="right d-center">
          <div className="nav">
            {NavLinkItems.map((item) => (
              <NavLink
                className={({ isActive, isPending }) =>
                  `navlink ${isPending ? 'pending' : isActive ? 'active' : ''}`
                }
                key={item.key}
                to={item.path}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <Dropdown
            className="dropdown"
            menu={{ items }}
            trigger={['click']}
            placement="bottomRight"
            arrow
          >
            <Avatar className="avatar" src={user?.avatar}>
              {user?.username.charAt(0).toUpperCase()}
            </Avatar>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
