import "animate.css";
import { Button } from "primereact/button";
import { FaCalendarAlt } from "react-icons/fa";

export default function CourseCaoCap() {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-9/12 p-4">
        <h1 className="text-2xl font-bold text-left uppercase mb-10 animate__animated animate__fadeIn text-primary-color">
          Lớp Tiếng Hàn Cao Cấp - Hàn Ngữ Munan
        </h1>
        <h1 className="text-3xl text-center uppercase animate__animated animate__fadeIn text-primary-color font-bold">
          Lớp Tiếng Hàn Cao Cấp - Hàn Ngữ Munan
        </h1>
        <img
          src="../../src/assets/tieng-han-khong-kho-1.png"
          alt="Hàn Ngữ Munan"
          className="my-6 mx-auto animate__animated animate__fadeIn rounded-lg shadow-lg"
        />

        {/* Nút Đăng ký ngay */}
        <div className="flex justify-center mt-6">
          <Button
            label="Đăng ký ngay"
            className="btn-primary px-8 py-4 text-lg font-bold rounded-full shadow-lg animate__animated animate__pulse hover:bg-primary-color-dark transition-all duration-300"
            onClick={() => (window.location.href = "/register")}
          />
        </div>

        <h3 className="text-xl font-semibold mt-8 animate__animated animate__fadeIn text-primary-color text-center">
          KHÓA HỌC CAO CẤP TIẾNG HÀN DÀNH CHO AI?
        </h3>
        <p className="mt-4 animate__animated animate__fadeIn text-text-color">
          Hiện tại có hàng ngàn doanh nghiệp có vốn nước ngoài đang được đầu tư
          tại TP.HCM và các tỉnh lân cận, trong đó có không ít doanh nghiệp đến
          từ Hàn Quốc. Vì thế, cơ hội cho các bạn trẻ học tiếng Hàn sau khi tốt
          nghiệp rất dễ kiếm việc làm với mức lương khá cao.
        </p>
        <ul className="list-disc list-inside mt-4 animate__animated animate__fadeIn text-text-color space-y-2">
          <li>Bạn viết được, nhưng không nói tốt.</li>
          <li>
            Bạn đã tự học khóa Sơ cấp nhưng hoang mang khi bắt đầu tự học Trung
            Cấp.
          </li>
          <li>Bạn đang chuẩn bị để du học, định cư, kết hôn.</li>
          <li>Bạn ngại nói vì phát âm không rõ.</li>
          <li>Không biết cách sử dụng đúng dù bạn biết rõ ngữ pháp.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 animate__animated animate__fadeIn text-primary-color text-center">
          KẾT QUẢ ĐẠT ĐƯỢC SAU KHÓA HỌC
        </h3>
        <ul className="list-disc list-inside mt-4 animate__animated animate__fadeIn text-text-color space-y-2">
          <li>Nâng cao vốn từ, phản xạ, giao tiếp.</li>
          <li>
            Nắm chắc về ngữ pháp Trung Cấp và cách sử dụng, các trường hợp cần
            sử dụng và nên hay không nên.
          </li>
          <li>
            Chương trình học bám sát với hệ thống giảng dạy tiếng Hàn cho người
            nước ngoài tại Hàn Quốc.
          </li>
          <li>
            Luyện phản xạ với môi trường bắt buộc phải sử dụng, tự tin hơn.
          </li>
          <li>
            Hiểu văn hóa, ngữ cảnh của từng loại ngữ pháp để sử dụng cho đúng.
          </li>
        </ul>

        <img
          src="../../src/assets/tieng-han-khong-kho.png"
          alt="Tiếng Hàn Cao Cấp"
          className="my-6 mx-auto animate__animated animate__fadeIn rounded-lg shadow-lg"
        />

        <h3 className="text-xl font-semibold mt-8 animate__animated animate__fadeIn text-primary-color text-center">
          LỘ TRÌNH ĐÀO TẠO
        </h3>

        {/* Phần 1 */}
        <h4 className="text-lg font-bold mt-4 animate__animated animate__fadeIn text-primary-color">
          PHẦN 1: KỸ NĂNG
        </h4>
        <h5 className="text-md font-semibold mt-2 animate__animated animate__fadeIn text-primary-color">
          CHINH PHỤC CHẶNG ĐƯỜNG TRỞ THÀNH MỘT THÔNG DỊCH VIÊN CHUYÊN NGHIỆP
        </h5>
        <ul className="list-disc list-inside mt-2 animate__animated animate__fadeIn text-text-color space-y-2">
          <li>
            Củng cố lại kiến thức cũ và nâng cao kỹ năng truyền đạt, diễn đạt
            trong giao tiếp.
          </li>
          <li>Nâng cao kỹ năng đàm thoại, phản xạ cao cấp.</li>
          <li>Thành thạo kỹ năng viết luận, soạn thảo văn bản.</li>
        </ul>

        {/* Phần 2 */}
        <h4 className="text-lg font-bold mt-4 animate__animated animate__fadeIn text-primary-color">
          PHẦN 2: KIẾN THỨC
        </h4>
        <h5 className="text-md font-semibold mt-2 animate__animated animate__fadeIn text-primary-color">
          ỨNG BIẾN VỚI MỌI TÌNH HUỐNG QUA 30 CHỦ ĐỀ
        </h5>
        <ul className="list-disc list-inside mt-2 animate__animated animate__fadeIn text-text-color space-y-2">
          <li>
            Ứng dụng thành thạo từ vựng, ngữ pháp, cấu trúc các câu tiếng Hàn
            cao cấp.
          </li>
          <li>
            Vận dụng linh hoạt vốn từ vựng, ngữ pháp trong 15 chủ đề bao quát
            trong đời sống, văn hóa, xã hội... trên chặng đường trở thành một
            thông dịch viên chuyên nghiệp.
          </li>
          <li>
            Trở thành một thông dịch viên đẳng cấp với 15 chủ đề nâng cao liên
            quan đến kinh tế, thương mại, văn hóa, lịch sử, báo chí, du học… Hàn
            Quốc.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 animate__animated animate__fadeIn text-primary-color text-center">
          THỜI GIAN HỌC
        </h3>
        <ul className="list-disc list-inside mt-4 animate__animated animate__fadeIn text-text-color space-y-2">
          <li>Thời gian học: 6 tháng</li>
          <li>Thời lượng lên lớp: 144 giờ</li>
          <li>Hình thức học: Online/ Offline</li>
          <li>Sỉ số: 15-20</li>
          <li>Ngôn ngữ: Tiếng Việt - Tiếng Hàn</li>
        </ul>
      </div>

      <div className="w-full lg:w-3/12 p-4">
        <div className="border p-4 animate__animated animate__fadeIn">
          <img src="../../src/assets/logo.jpg" alt="logo Hàn Ngữ Munan" />
        </div>

        <div className="border p-4 mt-4 animate__animated animate__fadeIn">
          <h2 className="text-xl font-bold mb-4 text-primary-color">
            TIN CHO BẠN
          </h2>
          <div className="flex items-center mb-4 animate__animated animate__fadeIn hover:animate__pulse">
            <img
              src="../../src/assets/news1.png"
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
              src="../../src/assets/news1.png"
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
              src="../../src/assets/news1.png"
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
