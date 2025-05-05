import React from 'react';
import { useKeycloak } from '@/contexts/KeycloakContext';
import { Button } from 'primereact/button';
import { Navigate } from 'react-router-dom';

const Login: React.FC = () => {
  const { isAuthenticated, login } = useKeycloak();

  // Nếu đã đăng nhập, chuyển hướng đến trang chính
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Welcome to Our App</h1>
        <Button 
          label="Login with Google" 
          icon="pi pi-google" 
          className="p-button-raised w-full"
          onClick={login}
        />
      </div>
    </div>
  );
};

export default Login;