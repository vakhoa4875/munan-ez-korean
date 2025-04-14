import { Button } from "primereact/button";
import { Password } from "primereact/password";
import React from "react";
import { Link } from "react-router-dom";

const ChangePassword: React.FC = () => {

    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
                    <div className="text-center mb-5">
                        <Link to={'/'}><img src="/circle-logo.png" alt="Hàn Ngữ Munan" className="mb-3 h-24 mx-auto" /></Link>
                        <div className="text-gray-900 text-3xl font-semibold mb-3">Đổi mật khẩu</div>
                    </div>

                    <div>
                        <label htmlFor="oldPassword" className="block text-gray-900 font-medium mb-1 mt-2">Mật khẩu cũ</label>
                        <Password id="oldPassword" type="password" placeholder="Mật khẩu" className="w-full border-gray-300" toggleMask />

                        <label htmlFor="password" className="block text-gray-900 font-medium mb-1 mt-2">Mật khẩu mới</label>
                        <Password id="password" type="password" placeholder="Mật khẩu" className="w-full border-gray-300" toggleMask />

                        <label htmlFor="confirmedPassword" className="block text-gray-900 font-medium mb-1 mt-2">Xác nhận mật khẩu</label>
                        <Password id="confirmedPassword" type="password" placeholder="Mật khẩu" className="w-full border-gray-300" toggleMask />

                        <Button label="Cập nhật" icon="pi pi-key" className="w-full btn-primary text-white p-2 rounded mt-5!" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;