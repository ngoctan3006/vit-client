import React from 'react';

interface ProtectedRouterProps {
  children: React.ReactNode;
}

const ProtectedRouter: React.FC<ProtectedRouterProps> = ({ children }) => {
  return <div>ProtectedRouter</div>;
};

export default ProtectedRouter;
