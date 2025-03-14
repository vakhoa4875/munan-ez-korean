import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaTumblr,
  FaCalendarAlt,
} from "react-icons/fa";
import 'animate.css';

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-9/12 p-4">
        <h1 className="text-2xl font-bold text-left uppercase mb-10 animate__animated animate__fadeIn text-primary-color">
          Giới thiệu
        </h1>
        <h1
          className="text-3xl text-center uppercase animate__animated animate__fadeIn"
          style={{ color: "var(--primary-color)", fontWeight: "900" }}
        >
          Hàn Ngữ Munan
        </h1>
        <img
          src="../../src/assets/232216-1.png"
          alt="Hàn Ngữ Munan"
          className="my-4 mx-auto animate__animated animate__fadeIn"
        />
        <p className="mt-4 animate__animated animate__fadeIn text-text-color">
          <strong>Hàn Ngữ Munan</strong> nơi đào tạo tiếng Hàn dành cho những
          bạn bắt đầu từ con số 0, nơi trao đổi chia sẻ kiến thức về tiếng Hàn
          và Hàn Quốc dành cho các bạn có niềm đam mê bất tận với tiếng Hàn.
        </p>
        <p className="mt-4 animate__animated animate__fadeIn text-text-color">
          Với những chương trình học từ cơ bản đến nâng cao, giao tiếp đến luyện
          thi Topik hay EPS, chúng tôi tâm đắc tạo nên một môi trường học công
          bằng với phương châm <strong>“Không ai bị bỏ lại phía sau”</strong>,
          có nghĩa là đến với <strong>Hàn Ngữ Munan</strong> chúng tôi đảm bảo sự quan tâm đến
          tất cả học viên trong giờ học là như nhau, tại <strong>Hàn Ngữ Munan</strong> tất cả
          học viên trong lớp đều sẽ có cơ hội để luyện phản xạ giao tiếp với
          giáo viên.
        </p>
        <p className="mt-4 animate__animated animate__fadeIn text-text-color">
          Chúng tôi tin rằng việc học ngoại ngữ giỏi gắn liền với tự tin trong
          giao tiếp, <strong>Hàn Ngữ Munan</strong> sẽ khơi dậy sự tự tin trong con người bạn,
          các bạn sẽ không còn ngại ngùng khi nói tiếng Hàn nữa. Để làm được
          điều đó, chúng tôi đảm bảo lớp học chỉ tối đa 6 bạn để chắc rằng tất
          cả các bạn trong một lớp đều có khoảng thời gian học và tiếp thu là
          như nhau. Dù là vậy, mức học phí so với chương trình học mà chúng tôi
          đưa ra là vô cùng phù hợp với các bạn học sinh, sinh viên và người đi
          làm, chỉ đáng bằng 1 có trà sữa cho mỗi buổi học.
        </p>
        <img
          src="../../src/assets/232215-2.png"
          alt="Hàn Ngữ Munan"
          className="my-4 mx-auto animate__animated animate__fadeIn"
        />
        <h2 className="text-xl font-bold mt-8 animate__animated animate__fadeIn text-primary-color">
          Chương trình học tiếng Hàn gồm:
        </h2>
        <ul className="list-disc list-inside mt-4 font-bold animate__animated animate__fadeIn text-text-color">
          <li className="ms-4">Tiếng Hàn sơ cấp</li>
          <li className="ms-4">Học tiếng Hàn trung cấp</li>
          <li className="ms-4">Học tiếng Hàn cao cấp</li>
          <li className="ms-4">Học tiếng Hàn cấp tốc</li>
          <li className="ms-4">Học tiếng Hàn thi Topik</li>
          <li className="ms-4">Học tiếng Hàn xuất khẩu lao động EPS</li>
        </ul>
        <p className="animate__animated animate__fadeIn text-text-color">
          Và đặc biệt chương trình tự học tiếng Hàn online. Mua một lần học trọn
          đời dành cho người bận rộn. Chi tiết xem tại đây nhé!
        </p>
        <h2 className="text-xl font-bold mt-8 animate__animated animate__fadeIn text-primary-color">Học tiếng Hàn để làm gì?</h2>
        <h3 className="text-lg font-semibold mt-4 animate__animated animate__fadeIn text-primary-color">
          1. Phiên dịch, dịch thuật
        </h3>
        <p className="mt-2 animate__animated animate__fadeIn text-text-color">
          Nếu bạn học tiếng Hàn chuyên sâu thì biên phiên dịch sẽ là sự lựa chọn
          nghề nghiệp cho bạn khi bạn đang băn khoăn tại sao nên học tiếng Hàn.
          Có thể thấy đây là công việc mà hầu hết mọi người đều có thu nhập cao
          và ổn định. Tuy nhiên, nghề này đòi hỏi những yêu cầu khắt khe hơn rất
          nhiều. Đặc biệt kiến thức của bạn phải đa dạng ở nhiều lĩnh vực khác
          nhau như kinh tế, khoa học – công nghệ, sản xuất, giáo dục,…
        </p>
        <h3 className="text-lg font-semibold mt-4 animate__animated animate__fadeIn text-primary-color">2. Giáo viên tiếng Hàn</h3>
        <p className="mt-2 animate__animated animate__fadeIn text-text-color">
          Giáo viên tiếng Hàn chính là câu trả lời hoàn hảo cho câu hỏi 'Học
          tiếng Hàn tôi có thể làm được gì?' Nghề này được mọi người yêu thích
          và đi theo. Lựa chọn nghề dạy học không đòi hỏi gì hơn ngoài sự hiểu
          biết sâu sắc về ngôn ngữ và kỹ năng sư phạm. Khi đó mọi người có thể
          truyền đạt kiến ​​thức cho học sinh tốt hơn.
        </p>
        <h3 className="text-lg font-semibold mt-4 animate__animated animate__fadeIn text-primary-color">
          3. Hướng dẫn viên du lịch
        </h3>
        <p className="mt-2 animate__animated animate__fadeIn text-text-color">
          Đối với những người học tiếng Hàn và thích khám phá, tìm hiểu về văn
          hóa, thắng cảnh,… thì hướng dẫn viên du lịch là sự lựa chọn hoàn hảo
          dành cho bạn. Hàng năm lượng khách du lịch đến thăm Việt Nam hay Hàn
          Quốc rất lớn và ngày càng tăng. Vì vậy, cơ hội nghề nghiệp của nghề
          này là rất lớn.
        </p>
        <h3 className="text-lg font-semibold mt-4 animate__animated animate__fadeIn text-primary-color">
          4. Nhân viên biết tiếng Hàn
        </h3>
        <p className="mt-2 animate__animated animate__fadeIn text-text-color">
          Trong bối cảnh mối quan hệ hữu nghị Việt Nam- Hàn Quốc ngày càng thắt
          chặt như hiện nay, thì nhiều công ty Hàn Quốc đã và đang đầu tư mở
          rộng kinh doanh tại Việt Nam. Bên cạnh việc hiểu về một chuyên ngành
          như xuất nhập khẩu, sale, truyền thông, marketing, IT... thì việc biết
          thêm một ngôn ngữ như tiếng Hàn giúp bạn có thêm cơ hội làm tìm việc ở
          các công ty Hàn Quốc với một mức lương đáng mong đợi hơn so với việc
          không biết ngôn ngữ nào.
        </p>
        <img
          src="../../src/assets/232415-3.png"
          alt="Hàn Ngữ Munan"
          className="my-4 mx-auto animate__animated animate__fadeIn"
        />
        <h2 className="text-xl font-bold mt-8 animate__animated animate__fadeIn text-primary-color">
          Tại sao chọn học tiếng Hàn tại <strong>Hàn Ngữ Munan</strong>?
        </h2>
        <p className="mt-4 animate__animated animate__fadeIn text-text-color">
          <strong>Đội ngũ giáo viên:</strong> Với đội ngũ giáo viên trẻ, năng
          động, gần gũi và phương pháp đào tạo hiện đại. Các giáo viên được chọn
          lọc kỹ lưỡng từ những ứng viên đã tốt nghiệp chuyên ngành tiếng Hàn,
          hoặc đi du học Hàn Quốc về, đối với sinh viên đang học chuyên ngành
          tiếng Hàn, các thông dịch viên tại các công ty Hàn Quốc thì sẽ có
          trình độ tối thiểu Topik 4. Nhằm đảo bảo chất lượng giảng dạy được tốt
          nhất.
        </p>
        <p className="mt-4 animate__animated animate__fadeIn text-text-color">
          <strong>Học phí lớp tiếng Hàn:</strong> <strong>Hàn Ngữ Munan</strong>{" "}
          có mức học phí lớp tiếng Hàn rẻ và phù hợp với hầu hết học sinh, sinh
          viên và người đi làm, chỉ bằng một cóc trà sữa cho một buổi học.
        </p>
        <p className="mt-4 animate__animated animate__fadeIn text-text-color">
          <strong>Chất lượng đào tạo tiếng Hàn:</strong> Với mong muốn phổ cập
          và nâng cao trình độ tiếng Hàn cho học viên học, đồng thời tạo nên một
          môi trường đào tạo tiếng Hàn công bằng giúp mỗi học viên đều được tham
          gia vào các buổi học một cách tích cực nhất, tìm lại sự tự tin khi nói
          ngoại ngữ. Tại <strong>Hàn Ngữ Munan</strong> học viên không chỉ có
          một mình, giáo viên sẽ luôn quan tâm đến các bạn trong mỗi giờ học.
        </p>
        <h2 className="text-xl font-bold mt-8 animate__animated animate__fadeIn text-primary-color">
          Lộ trình học tiếng Hàn như thế nào?
        </h2>
        <p className="mt-4 animate__animated animate__fadeIn text-text-color">
          Khi bắt đầu học một ngôn ngữ mới, chắc hẳn các bạn sẽ thắc mắc cần bao
          nhiêu thời gian để có thể nói được tiếng Hàn.{" "}
          <strong>Hàn Ngữ Munan</strong> đưa ra lộ trình học cho các bạn chưa
          biết gì về tiếng Hàn trong vòng 3 tháng có thể giao tiếp trao đổi liên
          quan đến cuộc sống thường ngày. Với mỗi khóa học kéo dài 3 tháng, bao
          gồm 28 buổi, mỗi buổi 1.5 tiếng các bạn có thể từ con số 0 đạt được
          Topik I trong vòng 6 tháng và đạt Topik II trong vòng 1~2 năm học.
        </p>
        <p className="mt-4 animate__animated animate__fadeIn text-text-color">
          Lộ trình chúng tôi có sẵn, việc đi hay không phụ thuộc vào bạn.{" "}
          <strong>Hàn Ngữ Munan</strong> dọn sẵn 80% con đường, còn 20% con
          đường còn lại phụ thuộc vào sự nỗ lực của bạn.
        </p>
        <p className="mt-4 animate__animated animate__fadeIn text-text-color">
          Các bạn có thể xem lịch khai giảng và học phí tiếng Hàn cùng với các
          chương trình khuyến mãi được cập nhật liên tục tại đây.
        </p>
        <div className="mt-8 animate__animated animate__fadeIn">
          <h2 className="text-xl font-bold text-primary-color">Chia sẻ bài viết này:</h2>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com/intent/tweet?url=https://yourwebsite.com&text=Check%20this%20out!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/shareArticle?mini=true&url=https://yourwebsite.com&title=Check%20this%20out!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://pinterest.com/pin/create/button/?url=https://yourwebsite.com&media=&description=Check%20this%20out!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600"
            >
              <FaPinterest size={24} />
            </a>
            <a
              href="https://www.tumblr.com/widgets/share/tool?canonicalUrl=https://yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              <FaTumblr size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-3/12 p-4">
        <div className="border p-4 animate__animated animate__fadeIn">
          <img src="../../src/assets/logo.jpg" alt="logo Hàn Ngữ Munan" />
        </div>

        <div className="border p-4 mt-4 animate__animated animate__fadeIn">
          <h2 className="text-xl font-bold mb-4 text-primary-color">TIN CHO BẠN</h2>
          <div className="flex items-center mb-4 animate__animated animate__fadeIn hover:animate__pulse">
            <img
              src="../../src/assets/news1.png"
              alt="news 1"
              className="w-16 h-16 object-cover mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-text-color">Tiêu đề tin tức 1</h3>
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
              <h3 className="text-lg font-semibold text-text-color">Tiêu đề tin tức 2</h3>
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
              <h3 className="text-lg font-semibold text-text-color">Tiêu đề tin tức 3</h3>
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