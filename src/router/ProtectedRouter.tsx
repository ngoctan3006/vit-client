import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Layout, Loading } from '../components';
import { authSelector } from '../redux/slices/auth.slice';

interface ProtectedRouterProps {
  role?: string;
}

const ProtectedRouter: React.FC<ProtectedRouterProps> = ({ role }) => {
  const { loading, isAuthenticated } = useSelector(authSelector);

  if (loading) return <Loading />;
  if (!loading && !isAuthenticated) return <Navigate to="/login" />;

  return <Layout />;
};

export default ProtectedRouter;
