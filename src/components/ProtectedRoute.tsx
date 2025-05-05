import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useKeycloak } from '@/contexts/KeycloakContext';

interface ProtectedRouteProps {
  redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  redirectPath = '/login' 
}) => {
  const { initialized, isAuthenticated } = useKeycloak();

  // Nếu đang khởi tạo, hiển thị loading
  if (!initialized) {
    return <div className="flex justify-center items-center h-screen">Loading@.</div>;
  }
  
  // Nếu chưa xác thực, chuyển hướng đến trang login
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  // Nếu đã xác thực, render children routes
  return <Outlet />;
};

export default ProtectedRoute;