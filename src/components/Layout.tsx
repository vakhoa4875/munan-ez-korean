import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="p-4 w-full">
        <Outlet /> {/* This renders child pages */}
      </div>
    </div>
  );
}
