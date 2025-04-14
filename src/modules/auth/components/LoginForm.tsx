import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm: React.FC = () => {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
                <div className="text-center mb-5">
                    <Link to={'/'}><img src="/circle-logo.png" alt="Hàn Ngữ Munan" className="mb-3 h-24 mx-auto" /></Link>
                    <div className="text-gray-900 text-3xl font-semibold mb-3">Chào mừng quay trở lại!</div>
                    <span className="text-gray-600 font-medium">Chưa có tài khoản?</span>
                    <Link to={"/dang-ki"} className="font-medium no-underline ml-2 link-text">Tạo ngay!</Link>
                </div>

                <div>
                    <label htmlFor="email" className="block text-gray-900 font-medium mb-1 mt-2">                        Email                    </label>
                    <InputText id="email" type="text" placeholder="Địa chỉ email" className="w-full p-2 border border-gray-300 rounded mb-3" />

                    <label htmlFor="password" className="block text-gray-900 font-medium mb-1 mt-2">                        Mật khẩu                    </label>
                    <InputText id="password" type="password" placeholder="Mật khẩu" className="w-full p-2 border border-gray-300 rounded mb-3" />

                    <div className="flex items-center justify-between mb-6 mt-3">
                        <div className="flex items-center">
                            <Checkbox inputId="rememberme" onChange={(e) => setChecked(e.checked as boolean)} checked={checked} className="mr-2" />
                            <label htmlFor="rememberme" className="text-gray-700">Ghi nhớ tài khoản</label>
                        </div>
                        <Link to={"/quen-mat-khau"} className="font-medium link-text">Quên mật khẩu?</Link>
                    </div>

                    <Button label="Đăng nhập" icon="pi pi-user" className="w-full btn-primary text-white p-2 rounded" />
                </div>
            </div>
        </div>
    );
};

export default LoginForm;