import { message } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Layout, Loading } from '../components';
import { COMMON } from '../constants';
import { getMe } from '../redux/actions/auth.action';
import { authSelector } from '../redux/slices/auth.slice';
import { AppDispatch } from '../redux/store';

interface ProtectedRouterProps {
  role?: COMMON.ADMIN | COMMON.USER;
}

const ProtectedRouter: React.FC<ProtectedRouterProps> = ({ role }) => {
  const { isAuthenticated, user } = useSelector(authSelector);
  const dispatch = useDispatch<AppDispatch>();
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
        // if (role && res.payload?.role !== role) {
        //   navigate('/home');
        // }
      });
    } else if (user?.status === COMMON.INACTIVE) {
      navigate('/welcome', {
        replace: true,
        state: { from },
      });
    }
  }, []);

  if (isAuthenticated) return <Layout />;
  return <Loading />;
};

export default ProtectedRouter;
