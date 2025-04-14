import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import React from "react";
import { Link } from "react-router-dom";

const RegisterForm: React.FC = () => {

    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
                    <div className="text-center mb-5">
                        <Link to={'/'}><img src="/circle-logo.png" alt="Hàn Ngữ Munan" className="mb-3 h-24 mx-auto" /></Link>
                        <div className="text-gray-900 text-3xl font-semibold mb-3">Munan xin chào!</div>
                        <span className="text-gray-600 font-medium">Đã có tài khoản?</span>
                        <Link to={"/dang-nhap"} className="font-medium no-underline ml-2 link-text">Đăng nhập ngay!</Link>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-900 font-medium mb-1 mt-2"> Email </label>
                        <InputText id="email" type="text" placeholder="Địa chỉ email" className="w-full p-2 border border-gray-300 rounded mb-3" />

                        <label htmlFor="password" className="block text-gray-900 font-medium mb-1 mt-2">Mật khẩu</label>
                        <Password id="password" type="password" placeholder="Mật khẩu" className="w-full border-gray-300" toggleMask />

                        <label htmlFor="password" className="block text-gray-900 font-medium mb-1 mt-2">Xác nhận mật khẩu</label>
                        <Password id="confirmedPassword" type="password" placeholder="Mật khẩu" className="w-full border-gray-300" toggleMask />

                        <Button label="Đăng ký" icon="pi pi-user" className="w-full btn-primary text-white p-2 rounded mt-5!" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;