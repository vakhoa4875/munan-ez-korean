import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";

export default function Footer({ isAdmin }: { isAdmin: boolean }) {
    return (
        <footer className="py-4 text-[var(--primary-color)] bg-[var(--text-color)] mt-auto rounded-t-md">
            {isAdmin ? (
                <div className="text-center">
                    <p className="text-sm text-center">
                        &copy; 2025 Hàn Ngữ Munan. All Rights Reserved.
                    </p>
                </div>
            ) : (
                <div className="flex flex-col md:flex-row justify-evenly w-full items-center">
                    <div className="hidden flex-col text-left md:flex">
                        <div className="text-2xl font-bold mb-1">Khóa học dành cho bạn</div>
                        <Link to={'/khoa-hoc/tieng-han-so-cap'} className="link-text"><span className="font-bold">1.</span> Tiếng Hàn sơ cấp</Link>
                        <Link to={'/khoa-hoc/tieng-han-trung-cap'} className="link-text"><span className="font-bold">2.</span> Tiếng Hàn trung cấp</Link>
                        <Link to={'/khoa-hoc/luyen-thi-topic'} className="link-text"><span className="font-bold">3.</span> Luyện thi TOPIK</Link>
                        <Link to={'/khoa-hoc/tieng-han-cap-toc'} className="link-text"><span className="font-bold">4.</span> Tiếng Hàn cấp tốc</Link>
                        <Link to={'/khoa-hoc/luyen-thi-eps'} className="link-text"><span className="font-bold">5.</span> Luyện thi EPS</Link>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <img alt="logo" src="/circle-logo.png" className="mr-2 h-[10rem] flex-none" />
                        <div className="flex flex-row gap-4">
                            <Link to="/lien-he" className="pi pi-tiktok"></Link>
                            <Link to="/lien-he" className="pi pi-youtube"></Link>
                            <Link to="/lien-he" className="pi pi-facebook"></Link>
                        </div>
                        <p className="text-sm text-center">

                            © 2025 Hàn Ngữ Munan. All Rights Reserved.
                        </p>
                    </div>
                    <div className="flex flex-col text-center md:text-left">
                        <div className="text-2xl font-bold mb-1">Hàn Ngữ Munan</div>
                        <div><span className="font-bold">Hotline:</span> 0877 728 526</div>
                        <div><span className="font-bold">Email:</span> office.tienghankhongkho@gmail.com</div>
                        <div className="text-2xl font-bold mt-3 mb-1">Đăng ký nhận thông tin</div>
                        <div className="flex flex-row">
                            <InputText placeholder="Email" type="email" className="input-rounded-s-md"></InputText>
                            <Button label="Đăng ký" className="btn-rounded-e-md btn-primary"></Button>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );

}