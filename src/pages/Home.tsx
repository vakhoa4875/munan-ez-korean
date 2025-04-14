import AdvisingForm from "@/modules/cores/components/AdvisingForm";
import { HomepageBlogShowcase } from "@/modules/cores/components/BlogShowcase";
import Carousel from "@/modules/cores/components/Carousel";
import FloatingButtons from "@/modules/cores/components/FloatingButtons";
import { HomepageFeedback } from "@/modules/cores/components/StudentFeedback";
import '@/styles/Home.css';

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-white flex-col gap-3">
      <Carousel />
      <img src="/Gif 4 - Munan.gif" className="rounded-md" alt="" />
      <img src="/Gif 5 - Munan.gif" className="rounded-md" alt="" />
      <img src="/Hình 6 - Munan.png" className="rounded-md" alt="" />
      <img src="/Hình 7 - Munan.png" className="rounded-md" alt="" />
      <img src="/Hình 8 - Munan.png" className="rounded-md" alt="" />
      <HomepageBlogShowcase />
      <AdvisingForm />
      <HomepageFeedback />
      <FloatingButtons />
    </div>
  );
}