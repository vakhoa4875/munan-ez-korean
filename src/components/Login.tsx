import { useKeycloak } from '@/contexts/KeycloakContext';
import { Button } from 'primereact/button';
import React from 'react';

const Login: React.FC = () => {
  const { login } = useKeycloak();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[var(--light-blue)] to-[var(--light-rose)]">
      <div className="p-8 bg-white rounded-lg shadow-xl w-96">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Cổng Quản Trị</h1>
        <p className="text-gray-600 mb-8 text-center text-lg">Vui lòng đăng nhập để truy cập bảng điều khiển quản trị</p>
        <Button
          label="Đăng nhập bằng Google"
          icon="pi pi-google"
          className="p-button-outlined w-full"
          onClick={() => login("/admin")}
        />
        <div className="mt-4 text-center text-gray-500">
          <p>Chỉ quản trị viên được ủy quyền mới có thể truy cập cổng này</p>
        </div>
      </div>
    </div>
  );
};

export default Login;