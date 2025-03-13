import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

const AdvisingForm: React.FC = () => {
    return (
        <div className="flex rounded-2xl bg-white shadow-lg p-5 m-4">
            <div className="flex-1">
                <div className="text-center mb-5">
                    <div className="text-[var(--text-color)] text-3xl font-semibold mb-3">Đăng ký tư vấn</div>
                </div>

                <div>
                    <div className="flex flex-row gap-2">
                        <div className="w-full">
                            <label htmlFor="name" className="block text-gray-900 font-medium mb-1 mt-2">Họ và tên</label>
                            <InputText id="name" type="text" placeholder="Họ và tên" className="w-full p-2 border border-gray-300 rounded mb-3" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="email" className="block text-gray-900 font-medium mb-1 mt-2"> Email </label>
                            <InputText id="email" type="text" placeholder="Địa chỉ email" className="w-full p-2 border border-gray-300 rounded mb-3" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="phone" className="block text-gray-900 font-medium mb-1 mt-2">Số điện thoại</label>
                            <InputText id="phone" type="text" placeholder="Số điện thoại" className="w-full p-2 border border-gray-300 rounded mb-3" />
                        </div>
                    </div>
                    <label htmlFor="message" className="block text-gray-900 font-medium mb-1 mt-2">Nội dung</label>
                    <InputTextarea id="message" rows={5} className="w-full p-2 border border-gray-300 rounded mb-3" placeholder="Nội dung" />
                    <div className="w-full mt-5 flex justify-end">
                        <Button label="Gửi" icon="pi pi-user" className="btn-primary text-white p-2 rounded" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AdvisingForm;
