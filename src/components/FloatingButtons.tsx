import { Link } from "react-router-dom";
import '../styles/Home.css';

export default function FloatingButtons() {
  return (
    <div className="floating-buttons">
      <Link to="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="floating-button youtube">
        <img src="/youtube.png" alt="YouTube" />
      </Link>
      <Link to="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="floating-button tiktok">
        <img src="/tik-tok.png" alt="TikTok" />
      </Link>
      <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="floating-button facebook">
        <img src="/facebook.png" alt="Facebook" />
      </Link>
      <Link to="https://zalo.me" target="_blank" rel="noopener noreferrer" className="floating-button zalo">
        <img src="/zalo.webp" alt="Zalo" />
      </Link>
    </div>
  );
}