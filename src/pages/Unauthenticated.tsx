import { useKeycloak } from '@/contexts/KeycloakContext';
import { Button } from 'primereact/button';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const Unauthenticated: React.FC = () => {
    const { isAuthenticated, login } = useKeycloak();
    const location = useLocation();

    if (isAuthenticated) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Truy cập không được phép
                    </h2>
                    <p className="mt-2 mb-5 text-gray-600">
                        Vui lòng đăng nhập để truy cập trang này
                    </p>
                    <Button label="Đăng nhập ngay" icon="pi pi-google" className="p-button-outlined" onClick={() => login()} />
                </div>
            </div>
        </div>
    );
};

export default Unauthenticated;
