import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";

const LoginForm: React.FC = () => {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
                <div className="text-center mb-5">
                    <img
                        src="/demo/images/blocks/logos/hyper.svg"
                        alt="hyper"
                        className="mb-3 h-12 mx-auto"
                    />
                    <div className="text-gray-900 text-3xl font-semibold mb-3">Welcome Back</div>
                    <span className="text-gray-600 font-medium">Don't have an account?</span>
                    <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
                </div>

                <div>
                    <label htmlFor="email" className="block text-gray-900 font-medium mb-2">
                        Email
                    </label>
                    <InputText
                        id="email"
                        type="text"
                        placeholder="Email address"
                        className="w-full p-2 border border-gray-300 rounded mb-3"
                    />

                    <label htmlFor="password" className="block text-gray-900 font-medium mb-2">
                        Password
                    </label>
                    <InputText
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 border border-gray-300 rounded mb-3"
                    />

                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <Checkbox
                                inputId="rememberme"
                                onChange={(e) => setChecked(e.checked as boolean)}
                                checked={checked}
                                className="mr-2"
                            />
                            <label htmlFor="rememberme" className="text-gray-700">Remember me</label>
                        </div>
                        <a className="font-medium text-blue-500 cursor-pointer">Forgot your password?</a>
                    </div>

                    <Button label="Sign In" icon="pi pi-user" className="w-full bg-blue-500 text-white p-2 rounded" />
                </div>
            </div>
        </div>
    );
};

export default LoginForm;