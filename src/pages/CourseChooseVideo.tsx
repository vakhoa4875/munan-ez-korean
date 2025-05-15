import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Video } from "@/types/Video";
import "animate.css";

// Thay YOUR_API_KEY bằng API key của bạn
const YOUTUBE_API_KEY = "AIzaSyAYJOWvBODGB7PgcC1UV10cyImhZST_H4s";

export default function CourseChooseVideo() {
  const navigate = useNavigate();
  const [durations, setDurations] = useState<{ [id: number]: number }>({});
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [countdown, setCountdown] = useState<{ [id: number]: number }>({});

  // Danh sách video giả lập
  const videos: Video[] = [
    {
      id: 1,
      title: "Bài học 1: Giới thiệu về tiếng Hàn",
      videoId: "UpVMRdyHXx0",
      description: "Trong bài học này, bạn sẽ được giới thiệu về tiếng Hàn.",
    },
    {
      id: 2,
      title: "Bài học 2: Học bảng chữ cái tiếng Hàn",
      videoId: "aoiXvOkOjW0",
      description: "Học bảng chữ cái tiếng Hàn và cách phát âm.",
    },
    {
      id: 3,
      title: "Bài học 3: Ngữ pháp cơ bản",
      videoId: "HkAB1Gavw1Y",
      description: "Tìm hiểu về ngữ pháp cơ bản trong tiếng Hàn.",
    },
    {
      id: 4,
      title: "Bài học 4: Giao tiếp cơ bản",
      videoId: "9kaCAbIXuyg",
      description: "Học cách giao tiếp cơ bản trong tiếng Hàn.",
    },
  ];

  // Lấy thời lượng video thật từ YouTube API
  useEffect(() => {
    async function fetchDurations() {
      const ids = videos.map((v) => v.videoId).join(",");
      const url = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${ids}&key=${YOUTUBE_API_KEY}`;
      try {
        const res = await axios.get(url);
        const data = res.data.items;
        const newDurations: { [id: number]: number } = {};
        data.forEach((item: any) => {
          const video = videos.find((v) => v.videoId === item.id);
          if (video) {
            newDurations[video.id] = parseISODuration(item.contentDetails.duration);
          }
        });
        setDurations(newDurations);
        setCountdown(newDurations);
      } catch (err) {
        // fallback nếu lỗi
        setDurations({});
      }
    }
    fetchDurations();
    // eslint-disable-next-line
  }, []);

  // Chuyển ISO 8601 duration (PT2M30S) thành giây
  function parseISODuration(iso: string): number {
    const match = iso.match(/PT(?:(\d+)M)?(?:(\d+)S)?/);
    const minutes = match && match[1] ? parseInt(match[1]) : 0;
    const seconds = match && match[2] ? parseInt(match[2]) : 0;
    return minutes * 60 + seconds;
  }

  const handleVideoClick = (video: Video) => {
    // Lấy thời gian đã phát từ localStorage (nếu có)
    const savedData = localStorage.getItem("videoProgress");
    const progress = savedData ? JSON.parse(savedData) : {};
    const played = progress[video.videoId] || 0;
    navigate(`/khoa-hoc/tieng-han-so-cap/xem-video`, { state: { video, seekTime: played } });
  };

  function saveProgress(videoId: string, time: number) {
    const savedData = localStorage.getItem("videoProgress");
    const progress = savedData ? JSON.parse(savedData) : {};
    progress[videoId] = time;
    localStorage.setItem("videoProgress", JSON.stringify(progress));
  }

  const intervalRefs = useRef<{ [id: number]: NodeJS.Timeout }>({});

  const handleMouseEnter = (id: number) => {
    setHoveredId(id);
    setCountdown((prev) => ({
      ...prev,
      [id]: durations[id] ?? 0,
    }));
    if (intervalRefs.current[id]) clearInterval(intervalRefs.current[id]);
    if (durations[id]) {
      intervalRefs.current[id] = setInterval(() => {
        setCountdown((prev) => {
          const next = prev[id] > 0 ? prev[id] - 1 : 0;
          // Lưu thời gian đã phát vào localStorage
          const played = (durations[id] ?? 0) - next;
          saveProgress(videos.find(v => v.id === id)?.videoId || "", played);
          if (next > 0) {
            return { ...prev, [id]: next };
          } else {
            clearInterval(intervalRefs.current[id]);
            return prev;
          }
        });
      }, 1000);
    }
  };

  const handleMouseLeave = (id: number) => {
    setHoveredId(null);
    setCountdown((prev) => ({
      ...prev,
      [id]: durations[id] ?? 0,
    }));
    if (intervalRefs.current[id]) clearInterval(intervalRefs.current[id]);
  };

  // Format thời gian mm:ss
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
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
            onMouseEnter={() => handleMouseEnter(video.id)}
            onMouseLeave={() => handleMouseLeave(video.id)}
          >
            <div className="relative w-full h-48 bg-black">
              {hoveredId === video.id ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1`}
                  title={video.title}
                  allow="autoplay"
                  className="w-full h-48"
                />
              ) : (
                <img
                  src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-48 object-cover rounded-t-lg transition-all duration-300 hover:brightness-75"
                />
              )}
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                {formatTime(
                  hoveredId === video.id
                    ? countdown[video.id] ?? durations[video.id] ?? 0
                    : durations[video.id] ?? 0
                )}
              </div>
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