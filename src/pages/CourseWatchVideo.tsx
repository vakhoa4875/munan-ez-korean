import { Button } from "primereact/button";
import { useState, useEffect, useCallback } from "react";
import YouTube from "react-youtube";
import "animate.css";
import { useLocation } from "react-router-dom";
import { Video } from "@/types/Video";
import { Comment } from "@/types/Comment";

export default function CourseWatchVideo() {
  const location = useLocation();
  const video = location.state?.video;

  if (!video) {
    return <p>Không tìm thấy video. Vui lòng chọn một video từ danh sách.</p>;
  }

  // State cho bình luận và reply
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      avatar: "/avatar-default.jpg",
      name: "Nguyễn Văn A",
      content: "Video rất hữu ích, cảm ơn!",
      replies: [],
    },
    {
      id: 2,
      avatar: "/avatar-default.jpg",
      name: "Trần Thị B",
      content: "Mong chờ bài học tiếp theo!",
      replies: [],
    },
  ]);

  const [commentInput, setCommentInput] = useState("");
  const [replyInputs, setReplyInputs] = useState<{ [key: number]: string }>({});
  const [showReplyInput, setShowReplyInput] = useState<{ [key: number]: boolean }>({});

  const [currentTime, setCurrentTime] = useState(0); // Thời gian hiện tại của video
  const [hasStarted, setHasStarted] = useState(false); // Cờ để kiểm soát việc áp dụng thời gian

  // Thêm bình luận mới
  const handleAddComment = () => {
    if (!commentInput.trim()) return;
    setComments((prev) => [
      {
        id: prev.length + 1,
        avatar: "/avatar-default.jpg",
        name: "Bạn",
        content: commentInput,
        replies: [],
      },
      ...prev,
    ]);
    setCommentInput("");
  };

  // Thêm reply cho comment
  const handleAddReply = (commentId: number) => {
    const replyContent = replyInputs[commentId]?.trim();
    if (!replyContent) return;
    setComments((prev) =>
      prev.map((c) =>
        c.id === commentId
          ? {
            ...c,
            replies: [
              {
                id: (c.replies?.length || 0) + 1,
                avatar: "/avatar-default.jpg",
                name: "Bạn",
                content: replyContent,
              },
              ...(c.replies || []),
            ],
          }
          : c
      )
    );
    setReplyInputs((prev) => ({ ...prev, [commentId]: "" }));
    setShowReplyInput((prev) => ({ ...prev, [commentId]: false }));
  };

  const videos: Video[] = [
    {
      id: 1,
      title: "Bài học 1: Giới thiệu về tiếng Hàn",
      videoId: "SJXcYilt2a4",
      description:
        "Trong bài học này, bạn sẽ được giới thiệu về tiếng Hàn và cách học hiệu quả.",
    },
    {
      id: 2,
      title: "Bài học 2: Học bảng chữ cái tiếng Hàn",
      videoId: "aoiXvOkOjW0",
      description:
        "Trong bài học này, bạn sẽ được học bảng chữ cái tiếng Hàn và cách phát âm.",
    },
    {
      id: 3,
      title: "Bài học 3: Ngữ pháp cơ bản",
      videoId: "SJXcYilt2a4",
      description:
        "Trong bài học này, bạn sẽ được tìm hiểu về ngữ pháp cơ bản trong tiếng Hàn.",
    },
    {
      id: 4,
      title: "Bài học 4: Giao tiếp cơ bản",
      videoId: "SJXcYilt2a4",
      description:
        "Trong bài học này, bạn sẽ được học cách giao tiếp cơ bản trong tiếng Hàn.",
    },
  ];

  // Hàm lưu thời gian vào localStorage
  const saveProgress = useCallback((videoId: string, time: number) => {
    const savedData = localStorage.getItem("videoProgress");
    const progress = savedData ? JSON.parse(savedData) : {};
    progress[videoId] = time;
    localStorage.setItem("videoProgress", JSON.stringify(progress));
  }, []);

  // Hàm lấy thời gian từ localStorage
  const getSavedTime = useCallback((videoId: string): number => {
    const savedData = localStorage.getItem("videoProgress");
    const progress = savedData ? JSON.parse(savedData) : {};
    return progress[videoId] || 0;
  }, []);

  // Khi video thay đổi, lấy thời gian đã lưu
  useEffect(() => {
    const savedTime = getSavedTime(video.videoId);
    setCurrentTime(savedTime);
    setHasStarted(false); // Reset cờ để áp dụng thời gian khi video bắt đầu
  }, [video.videoId, getSavedTime]);

  // Xử lý trạng thái của YouTube Player
  const onPlayerStateChange = useCallback(
    (event: any) => {
      if (event.data === 1) {
        const player = event.target;

        // Áp dụng thời gian từ localStorage lần đầu
        if (!hasStarted) {
          player.seekTo(currentTime, true);
          setHasStarted(true);
        }

        // Lưu thời gian vào localStorage mỗi giây
        const interval = setInterval(() => {
          const time = player.getCurrentTime();
          setCurrentTime(time);
          saveProgress(video.videoId, time);
        }, 1000);

        // Xóa interval khi video dừng
        return () => clearInterval(interval);
      }
    },
    [video.videoId, currentTime, hasStarted, saveProgress]
  );

  // Xử lý khi chuyển video
  const handleVideoChange = useCallback(
    (newVideo: Video) => {
      const savedTime = getSavedTime(newVideo.videoId);
      setCurrentTime(savedTime);
      setHasStarted(false);
      location.state.video = newVideo; // Cập nhật video trong state
    },
    [getSavedTime, location.state]
  );

  return (
    <div className="flex flex-col lg:flex-row gap-6 animate__animated animate__fadeIn">
      {/* Phần bên trái: Video và bình luận */}
      <div className="w-full lg:w-9/12 p-4">
        <div className="relative w-full pb-[56.25%] bg-black rounded-lg overflow-hidden shadow-lg">
          <YouTube
            videoId={video.videoId}
            opts={{
              height: "100%",
              width: "100%",
              playerVars: {
                autoplay: 1,
                controls: 1,
                rel: 0,
              },
            }}
            onStateChange={onPlayerStateChange}
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
        <h1 className="text-2xl font-bold mt-4">{video.title}</h1>
        <p className="text-gray-600 mt-2">{video.description}</p>

        {/* Phần bình luận */}
        {/* Thêm bình luận mới */}
        <div className="mt-6 flex gap-2 items-start">
          <img src="/avatar-default.jpg" alt="avatar" className="w-10 h-10 rounded-full object-cover" />
          <div className="flex-1">
            <textarea
              className="w-full border rounded px-2 py-1 text-sm resize-none"
              placeholder="Viết bình luận..."
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              rows={2}
            />
            <div className="flex justify-end mt-1">
              <Button
                label="Bình luận"
                className="btn-primary"
                onClick={handleAddComment}
                disabled={!commentInput.trim()}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-3">
              <img src={comment.avatar} alt={comment.name} className="w-10 h-10 rounded-full object-cover" />
              <div className="flex-1">
                <div className="bg-gray-100 rounded-lg px-3 py-2">
                  <span className="font-semibold">{comment.name}</span>
                  <p className="text-gray-700">{comment.content}</p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    className="text-xs text-blue-600 hover:underline"
                    onClick={() =>
                      setShowReplyInput((prev) => ({
                        ...prev,
                        [comment.id]: !prev[comment.id],
                      }))
                    }
                  >
                    Phản hồi
                  </button>
                </div>
                {/* Reply input */}
                {showReplyInput[comment.id] && (
                  <div className="flex gap-2 mt-2">
                    <img src="/avatar-default.jpg" alt="avatar" className="w-8 h-8 rounded-full object-cover" />
                    <input
                      type="text"
                      className="border rounded px-2 py-1 text-sm flex-1"
                      placeholder="Phản hồi bình luận..."
                      value={replyInputs[comment.id] || ""}
                      onChange={(e) =>
                        setReplyInputs((prev) => ({
                          ...prev,
                          [comment.id]: e.target.value,
                        }))
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && replyInputs[comment.id]?.trim()) {
                          handleAddReply(comment.id);
                        }
                      }}
                    />
                    <Button
                      label="Gửi"
                      className="btn-primary"
                      onClick={() => handleAddReply(comment.id)}
                      disabled={!replyInputs[comment.id]?.trim()}
                    />
                  </div>
                )}
                {/* Hiển thị replies */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="mt-2 pl-6 border-l border-gray-200 space-y-2">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex gap-2">
                        <img src={reply.avatar} alt={reply.name} className="w-8 h-8 rounded-full object-cover" />
                        <div className="bg-gray-50 rounded-lg px-3 py-1 flex-1">
                          <span className="font-semibold text-xs">{reply.name}</span>
                          <p className="text-gray-700 text-xs">{reply.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Phần bên phải: Danh sách video */}
      <div className="w-full lg:w-3/12 p-4">
        <h2 className="text-lg font-semibold mb-4">Video kế tiếp</h2>
        <div className="space-y-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-all duration-300 animate__animated animate__fadeIn"
              onClick={() => handleVideoChange(video)}
            >
              <img
                src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                alt={video.title}
                className="w-32 h-20 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold line-clamp-2" title={video.title}>
                  {video.title}
                </h3>
                <p className="text-xs text-gray-600">Xem ngay</p>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
