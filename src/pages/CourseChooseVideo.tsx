import { useNavigate } from "react-router-dom";
import { Video } from "@/types/Video";
import "animate.css";

export default function CourseChooseVideo() {
  const navigate = useNavigate();

  // Danh sách video giả lập
  const videos: Video[] = [
    {
      id: 1,
      title: "Bài học 1: Giới thiệu về tiếng Hàn",
      videoId: "UpVMRdyHXx0",
      thumbnail: "/thumbnail/thumbnail-2.jpg",
      description: "Trong bài học này, bạn sẽ được giới thiệu về tiếng Hàn.",
    },
    {
      id: 2,
      title: "Bài học 2: Học bảng chữ cái tiếng Hàn",
      videoId: "UpVMRdyHXx0",
      thumbnail: "/thumbnail/thumbnail-2.jpg",
      description: "Học bảng chữ cái tiếng Hàn và cách phát âm.",
    },
    {
      id: 3,
      title: "Bài học 3: Ngữ pháp cơ bản",
      videoId: "UpVMRdyHXx0",
      thumbnail: "/thumbnail/thumbnail-2.jpg",
      description: "Tìm hiểu về ngữ pháp cơ bản trong tiếng Hàn.",
    },
    {
      id: 4,
      title: "Bài học 4: Giao tiếp cơ bản",
      videoId: "UpVMRdyHXx0",
      thumbnail: "/thumbnail/thumbnail-2.jpg",
      description: "Học cách giao tiếp cơ bản trong tiếng Hàn.",
    },
  ];

  // Xử lý khi người dùng chọn video
  const handleVideoClick = (video: Video) => {
    navigate(`/khoa-hoc/tieng-han-so-cap/xem-video`, { state: { video } });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 animate__animated animate__fadeIn">
        Chọn Video
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 animate__animated animate__fadeInUp">
        {videos.map((video) => (
          <div
            key={video.id}
            className="cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden bg-white border border-gray-200"
            onClick={() => handleVideoClick(video)}
          >
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover rounded-t-lg transition-all duration-300 hover:brightness-75"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{video.title}</h2>
              <p className="text-sm text-gray-600">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
