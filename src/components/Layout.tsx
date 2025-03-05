import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <nav className="p-4 bg-gray-800 text-white w-full flex justify-center space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </nav>
      <div className="p-4 w-full max-w-4xl">
        <Outlet /> {/* This renders child pages */}
      </div>
    </div>
  );
}
