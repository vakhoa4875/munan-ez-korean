import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useKeycloak } from '@/contexts/KeycloakContext';
import Loading from './Loading';

interface ProtectedRouteProps {
  redirectPath?: string;
  requiredRole?: string;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  redirectPath = '/',
  requiredRole = 'admin',
  children
}) => {
  const { initialized, isAuthenticated, getRoles } = useKeycloak();

  // Nếu đang khởi tạo, hiển thị loading
  if (!initialized) {
    return <Loading />;
  }
  
  // Nếu chưa xác thực, chuyển hướng đến trang login
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  // Nếu đã xác thực nhưng không có quyền, chuyển hướng đến trang không có quyền
  if (!getRoles().includes(requiredRole)) {
    return <Navigate to="/403" replace />;
  }

  // Nếu đã xác thực, render children routes
  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;