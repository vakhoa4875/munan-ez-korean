import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { TopNavbar } from "./Navbar";
import { RightSideBar } from "./Sidebar";

export default function Layout() {
  const [visible, setVisible] = useState(false);
  const toggleSidebar = () => setVisible(!visible);
  return (
    <div className="min-h-screen flex flex-col">
      <RightSideBar visible={visible} toggleSidebar={toggleSidebar} />
      <TopNavbar toggleSidebar={toggleSidebar} />
      <div className="p-4 w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
