import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface IProtectedRouteProps {
  isAllowed: boolean;
  redirectTo: string;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ isAllowed, redirectTo, children }) => {
  const location = useLocation();

  if (!isAllowed) {
    return <Navigate to={redirectTo} state={{ from: location }}  replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
