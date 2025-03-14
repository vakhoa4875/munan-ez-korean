import AdvisingForm from "../components/AdvisingForm";
import BlogShowcase from "../components/BlogShowcase";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-white flex-col gap-3">
      <Carousel />
      <img src="/2.gif" className="rounded-md" alt="" />
      <img src="/3.gif" className="rounded-md" alt="" />
      <img src="/4.webp" className="rounded-md" alt="" />
      <img src="/5.webp" className="rounded-md" alt="" />
      <div className="mt-3">
        <div className="text-3xl font-bold text-center text-[var(--text-color)]">Thư viện Hàn Ngữ Munan</div>
        <BlogShowcase />
      </div>
      <div className="mt-3">
        <div className="text-3xl font-bold text-center text-[var(--text-color)]">Cảm nhận học viên</div>
        
      </div>
      <img src="/6.webp" className="rounded-md" alt="" />
      <AdvisingForm />
    </div>
  )
}
