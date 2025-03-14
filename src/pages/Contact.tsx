import 'animate.css';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background-color p-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 animate__animated animate__fadeIn">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary-color">Liên hệ với chúng tôi</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-color">
              Tên của bạn
            </label>
            <InputText
              id="name"
              name="name"
              placeholder="Nhập tên của bạn"
              className="mt-1 block w-full p-inputtext-sm input-rounded-s-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-color">
              Email của bạn
            </label>
            <InputText
              id="email"
              name="email"
              type="email"
              placeholder="Nhập email của bạn"
              className="mt-1 block w-full p-inputtext-sm input-rounded-s-md"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-text-color">
              Số điện thoại của bạn
            </label>
            <InputText
              id="phone"
              name="phone"
              type="tel"
              placeholder="Nhập số điện thoại của bạn"
              className="mt-1 block w-full p-inputtext-sm input-rounded-s-md"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-text-color">
              Chủ đề
            </label>
            <InputText
              id="subject"
              name="subject"
              placeholder="Nhập chủ đề"
              className="mt-1 block w-full p-inputtext-sm input-rounded-s-md"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text-color">
              Tin nhắn của bạn
            </label>
            <InputTextarea
              id="message"
              name="message"
              rows={4}
              placeholder="Nhập tin nhắn của bạn"
              className="mt-1 block w-full p-inputtextarea-sm input-rounded-s-md"
              required
            />
          </div>
          <div>
            <Button
              type="submit"
              label="Gửi tin nhắn"
              className="w-full p-button-rounded animate__animated animate__pulse btn-primary"
            />
          </div>
        </form>
      </div>
      <div className="mt-8 text-center">
        <p className="text-text-color">Hoặc liên hệ với chúng tôi qua:</p>
        <p className="text-text-color">Email: office.tienghankhongkho@gmail.com</p>
        <p className="text-text-color">Điện thoại: +84 901 552 219</p>
        <div className="mt-4">
          <h3 className="text-lg font-bold text-primary-color">Địa chỉ của chúng tôi</h3>
          <p className="text-text-color">28/2B Đường 45, Phường Hiệp Bình Chánh, Thành phố Thủ Đức</p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-bold text-primary-color">Giờ làm việc</h3>
          <p className="text-text-color">Thứ Hai - Thứ Sáu: 9:00 - 18:00</p>
          <p className="text-text-color">Thứ Bảy: 9:00 - 12:00</p>
          <p className="text-text-color">Chủ Nhật: Nghỉ</p>
        </div>
      </div>
    </div>
  );
}