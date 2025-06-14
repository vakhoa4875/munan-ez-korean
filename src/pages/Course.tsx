import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import "animate.css";
import { useState } from "react";

const courses = [
  {
    id: 1,
    title: "Tiếng Hàn sơ cấp",
    description: "Khóa học dành cho người mới bắt đầu làm quen với tiếng Hàn.",
    image: "/images/course-basic.jpg",
    path: "/khoa-hoc/tieng-han-so-cap/chon-video",
    level: "basic",
  },
  {
    id: 2,
    title: "Tiếng Hàn trung cấp",
    description: "Nâng cao kỹ năng nghe, nói, đọc, viết tiếng Hàn.",
    image: "/images/course-intermediate.jpg",
    path: "/khoa-hoc/tieng-han-trung-cap/chon-video",
    level: "intermediate",
  },
  {
    id: 3,
    title: "Luyện thi TOPIK",
    description: "Ôn luyện và chuẩn bị cho kỳ thi năng lực tiếng Hàn TOPIK.",
    image: "/images/course-topik.jpg",
    path: "/khoa-hoc/luyen-thi-topik/chon-video",
    level: "topik",
  },
];

const levelOptions = [
  { label: "Tất cả", value: "all" },
  { label: "Sơ cấp", value: "basic" },
  { label: "Trung cấp", value: "intermediate" },
  { label: "Luyện thi TOPIK", value: "topik" },
];

export default function Course() {
  const navigate = useNavigate();
  const [level, setLevel] = useState("all");
  const filteredCourses =
    level === "all" ? courses : courses.filter((c) => c.level === level);

  return (
    <div className="p-6 max-w-6xl mx-auto font-[var(--font-gowun)]">
      <h1 className="text-3xl font-bold mb-8 text-center animate__animated animate__fadeInDown text-[var(--primary-color)]">
        Các khóa học của chúng tôi
      </h1>

      <Dropdown
        className="mb-6 w-full sm:w-60 border border-[var(--primary-color)] rounded-lg shadow-sm focus:ring-2 focus:ring-[var(--primary-color)] text-[var(--primary-color)] font-semibold"
        value={level}
        options={levelOptions}
        onChange={(e) => setLevel(e.value)}
        placeholder="Chọn cấp độ"
        optionLabel="label"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course, idx) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col animate__animated animate__fadeInUp border border-[var(--primary-color)]"
            style={{ animationDelay: `${idx * 0.1}s` }}
            onClick={() => navigate(course.path)}
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold mb-2 text-[var(--primary-color)]">{course.title}</h2>
              <p className="text-gray-700 flex-1">{course.description}</p>
              <Button
                label="Xem chi tiết"
                className="mt-4 btn-primary w-fit self-end px-4 py-2 text-base"
                onClick={e => {
                  e.stopPropagation();
                  navigate(course.path);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}