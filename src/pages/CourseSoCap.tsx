import "animate.css";
import { Button } from "primereact/button";
import {
  FaCalendarAlt,
} from "react-icons/fa";

export default function CourseSoCap() {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-9/12 p-4">
        <h1 className="text-2xl font-bold text-left uppercase mb-10 animate__animated animate__fadeIn text-primary-color">
          Lớp Tiếng Hàn Sơ Cấp - Hàn Ngữ Munan
        </h1>
        <h1 className="text-3xl text-center uppercase animate__animated animate__fadeIn text-primary-color font-bold">
          Lớp Tiếng Hàn Sơ Cấp - Hàn Ngữ Munan
        </h1>
        <img
          src="/Gif 4 - Munan.gif"
          alt="Hàn Ngữ Munan"
          className="my-6 mx-auto animate__animated animate__fadeIn rounded-lg shadow-lg"
        />

        {/* Nút Đăng ký ngay */}
        <div className="flex justify-center mt-6">
          <Button
            label="Đăng ký ngay"
            className="btn-primary px-8 py-4 text-lg font-bold rounded-full shadow-lg animate__animated animate__pulse hover:bg-primary-color-dark transition-all duration-300"
            onClick={() => (window.location.href = "/register")} // Thay đổi URL theo nhu cầu
          />
        </div>

        <h3 className="text-xl font-semibold mt-8 animate__animated animate__fadeIn text-primary-color text-center">
          KHÓA HỌC SƠ CẤP TIẾNG HÀN DÀNH CHO AI?
        </h3>
        <ul className="list-disc list-inside mt-4 animate__animated animate__fadeIn text-text-color space-y-2">
          <li>
            Sinh viên đang học chương trình ngôn ngữ Hàn trên trường cần phát
            triển: giao tiếp, nghe, phát âm
          </li>
          <li>
            Sinh viên đang học các ngôn ngữ khác nhưng cần bằng TOPIK ngôn ngữ 2
            để ra trường
          </li>
          <li>Người cần TOPIK để đi du học</li>
          <li>Mê phim Kdrama, ghiền nhạc Kpop</li>
          <li>
            Người cần TOPIK để tìm việc mới, làm biên phiên dịch tiếng Hàn
          </li>
          <li>
            Đang học tiếng Hàn ở các trung tâm khác nhưng không tiến bộ vì chủ
            yếu học ngữ pháp không nghe nói, giao tiếp được
          </li>
        </ul>

        <img
          src="/Gif 5 - Munan.gif"
          alt="Tiếng Hàn Không Khó"
          className="my-6 mx-auto animate__animated animate__fadeIn rounded-lg shadow-lg"
        />

        <h3 className="text-xl font-semibold mt-8 animate__animated animate__fadeIn text-primary-color text-center">
          LỘ TRÌNH ĐÀO TẠO QUỐC TẾ
        </h3>
        <h4 className="text-lg font-bold mt-4 animate__animated animate__fadeIn text-primary-color">
          Phần 1: Tự tin giao tiếp cơ bản
        </h4>
        <ul className="list-disc list-inside mt-2 animate__animated animate__fadeIn text-text-color space-y-2">
          <li>
            Khám phá bảng chữ cái tiếng Hàn và cách phát âm, biến âm, nối âm,
            ngữ điệu… cơ bản.
          </li>
          <li>Làm quen với kỹ năng nghe – nói – đọc – viết bằng tiếng Hàn.</li>
          <li>
            Chinh phục kỹ năng giao tiếp tự nhiên, đúng văn phong về 18 chủ đề
            trong đời sống.
          </li>
        </ul>
        <h4 className="text-lg font-bold mt-4 animate__animated animate__fadeIn text-primary-color">
          Phần 2: Luyện Thi Đạt Topik 2
        </h4>
        <ul className="list-disc list-inside mt-2 animate__animated animate__fadeIn text-text-color space-y-2">
          <li>
            Dựng xây nền tảng ngữ pháp, từ vựng với các cấu trúc câu từ đơn
            giản.
          </li>
          <li>
            Chinh phục tiếng Hàn với 9 chủ đề cơ bản trong cuộc sống: mua sắm,
            đời sống hàng ngày, địa điểm, thời khóa biểu, nhà hàng, ngày cuối
            tuần, thông tin liên lạc…
          </li>
          <li>
            Tăng dần độ khó với 9 chủ đề về thời tiết, gia đình, kế hoạch, nhà
            cửa, nơi chốn, thời trang, món quà, sức khỏe…
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 animate__animated animate__fadeIn text-primary-color text-center">
          THỜI GIAN HỌC
        </h3>
        <ul className="list-disc list-inside mt-4 animate__animated animate__fadeIn text-text-color space-y-2">
          <li>Thời gian học: 6 - 9 tháng</li>
          <li>Thời lượng lên lớp: 250 giờ</li>
          <li>Hình thức học: Online/ Offline</li>
          <li>Sỉ số: ~15</li>
          <li>Ngôn ngữ: Tiếng Việt - Tiếng Hàn</li>
        </ul>
      </div>

      <div className="w-full lg:w-3/12 p-4">
        <div className="border p-4 animate__animated animate__fadeIn">
          <img src="/logo.jpg" alt="logo Hàn Ngữ Munan" />
        </div>

        <div className="border p-4 mt-4 animate__animated animate__fadeIn">
          <h2 className="text-xl font-bold mb-4 text-primary-color">
            TIN CHO BẠN
          </h2>
          <div className="flex items-center mb-4 animate__animated animate__fadeIn hover:animate__pulse">
            <img
              src="/news1.png"
              alt="news 1"
              className="w-16 h-16 object-cover mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-text-color">
                Tiêu đề tin tức 1
              </h3>
              <p className="text-sm text-gray-600 flex items-center">
                <FaCalendarAlt className="mr-1" /> 13/03/2025
              </p>
            </div>
          </div>
          <hr className="border-t border-gray-200 my-2 animate__animated animate__fadeIn" />
          <div className="flex items-center mb-4 animate__animated animate__fadeIn hover:animate__pulse">
            <img
              src="/news1.png"
              alt="news 2"
              className="w-16 h-16 object-cover mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-text-color">
                Tiêu đề tin tức 2
              </h3>
              <p className="text-sm text-gray-600 flex items-center">
                <FaCalendarAlt className="mr-1" /> 13/03/2025
              </p>
            </div>
          </div>
          <hr className="border-t border-gray-200 my-2 animate__animated animate__fadeIn" />
          <div className="flex items-center mb-4 animate__animated animate__fadeIn hover:animate__pulse">
            <img
              src="/news1.png"
              alt="news 3"
              className="w-16 h-16 object-cover mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-text-color">
                Tiêu đề tin tức 3
              </h3>
              <p className="text-sm text-gray-600 flex items-center">
                <FaCalendarAlt className="mr-1" /> 13/03/2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
