import { message } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Layout, Loading } from '../components';
import { getMe } from '../redux/actions/auth.action';
import { authSelector } from '../redux/slices/auth.slice';
import { AppDispatch } from '../redux/store';

interface ProtectedRouterProps {
  role?: 'admin' | 'member';
}

const ProtectedRouter: React.FC<ProtectedRouterProps> = ({ role }) => {
  const { isAuthenticated } = useSelector(authSelector);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const from = window.location.pathname;

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(getMe()).then((res) => {
        if (res.type.includes('rejected')) {
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
    }
  }, []);

  if (isAuthenticated) return <Layout />;
  return <Loading />;
};

export default ProtectedRouter;
