import { message } from 'antd';
import { AdminLayout, DefaultLayout, Loading } from 'components';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from 'redux/actions/auth.action';
import { authSelector } from 'redux/slices/auth.slice';
import { useAppDispatch } from 'redux/store';
import { NotFound } from 'src/pages';
import { COMMON } from '../constants';

interface ProtectedRouterProps {
  role?: COMMON.ADMIN | COMMON.USER;
}

const ProtectedRouter: React.FC<ProtectedRouterProps> = ({ role }) => {
  const { isAuthenticated, user } = useSelector(authSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const from = window.location.pathname;

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(getMe()).then((res) => {
        if (res.payload.code === 'USER_0007') {
          navigate('/welcome', {
            replace: true,
            state: { from },
          });
        } else if (res.type.endsWith('rejected')) {
          message.info('Bạn cần đăng nhập để tiếp tục');
          navigate('/login', {
            replace: true,
            state: { from },
          });
        }
        if (role && res.payload?.position === 'MEMBER') {
          // navigate('/home');
          return <NotFound />;
        }
      });
    } else if (user?.status === COMMON.INACTIVE) {
      navigate('/welcome', {
        replace: true,
        state: { from },
      });
    }
  }, []);

  if (isAuthenticated) {
    if (role && user?.position === 'MEMBER') {
      // navigate('/home');
      return <NotFound />;
    }
    return role === COMMON.ADMIN ? <AdminLayout /> : <DefaultLayout />;
  }
  return <Loading />;
};

export default ProtectedRouter;
