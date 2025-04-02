import "animate.css";
import { FaCalendarAlt, FaEye } from "react-icons/fa";

export default function KoreanVocabulary() {
  const vocabularyCards = [
    {
      image: "../../src/assets/tieng-han-khong-kho-1.png",
      title: "Từ vựng tiếng Hàn về chủ đề gia đình",
      date: "01/04/2025",
      views: 1200,
      description: "Học từ vựng tiếng Hàn về các thành viên trong gia đình, cách gọi thân mật và trang trọng.",
    },
    {
      image: "../../src/assets/tieng-han-khong-kho-1.png",
      title: "Từ vựng tiếng Hàn về chủ đề công việc",
      date: "28/03/2025",
      views: 950,
      description: "Khám phá các từ vựng liên quan đến công việc, văn phòng và giao tiếp nơi làm việc.",
    },
    {
      image: "../../src/assets/tieng-han-khong-kho-1.png",
      title: "Từ vựng tiếng Hàn về chủ đề du lịch",
      date: "15/03/2025",
      views: 1350,
      description: "Tìm hiểu từ vựng tiếng Hàn cần thiết khi đi du lịch, đặt phòng khách sạn và hỏi đường.",
    },
    {
      image: "../../src/assets/tieng-han-khong-kho-1.png",
      title: "Từ vựng tiếng Hàn về chủ đề du lịch",
      date: "15/03/2025",
      views: 1350,
      description: "Tìm hiểu từ vựng tiếng Hàn cần thiết khi đi du lịch, đặt phòng khách sạn và hỏi đường.",
    },
    {
      image: "../../src/assets/tieng-han-khong-kho-1.png",
      title: "Từ vựng tiếng Hàn về chủ đề du lịch",
      date: "15/03/2025",
      views: 1350,
      description: "Tìm hiểu từ vựng tiếng Hàn cần thiết khi đi du lịch, đặt phòng khách sạn và hỏi đường.",
    },
    {
      image: "../../src/assets/tieng-han-khong-kho-1.png",
      title: "Từ vựng tiếng Hàn về chủ đề du lịch",
      date: "15/03/2025",
      views: 1350,
      description: "Tìm hiểu từ vựng tiếng Hàn cần thiết khi đi du lịch, đặt phòng khách sạn và hỏi đường.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-9/12 p-4">
        <h1 className="text-3xl font-bold text-primary-color mb-6 animate__animated animate__fadeIn">
          Từ Vựng Tiếng Hàn
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vocabularyCards.map((card, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-lg p-4 animate__animated animate__fadeIn hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-bold text-primary-color mb-2">
                {card.title}
              </h2>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <FaCalendarAlt className="mr-1" />
                {card.date}
                <FaEye className="ml-4 mr-1" />
                {card.views} lượt xem
              </div>
              <p className="text-sm text-text-color">{card.description}</p>
            </div>
          ))}
        </div>
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