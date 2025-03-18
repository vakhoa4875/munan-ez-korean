import AdvisingForm from "../components/AdvisingForm";
import { HomepageBlogShowcase } from "../components/BlogShowcase";
import Carousel from "../components/Carousel";
import FloatingButtons from "../components/FloatingButtons";
import { HomepageFeedback } from "../components/StudentFeedback";
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-white flex-col gap-3">
      <Carousel />
      <img src="/2.gif" className="rounded-md" alt="" />
      <img src="/3.gif" className="rounded-md" alt="" />
      <img src="/4.webp" className="rounded-md" alt="" />
      <img src="/5.webp" className="rounded-md" alt="" />
      <img src="/6.webp" className="rounded-md" alt="" />
      <HomepageBlogShowcase />
      <AdvisingForm />
      <HomepageFeedback />
      <FloatingButtons />
    </div>
  );
}