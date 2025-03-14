import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { TopNavbar } from "./Navbar";
import { RightSideBar } from "./Sidebar";
import { ScrollTop } from "primereact/scrolltop";

export default function Layout() {
  const [visible, setVisible] = useState(false);
  const toggleSidebar = () => setVisible(!visible);
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <RightSideBar visible={visible} toggleSidebar={toggleSidebar} />
      <TopNavbar toggleSidebar={toggleSidebar} />
      <div className="w-[90%] mx-auto flex-grow p-3 m-3 shadow-lg rounded-md">
        <Outlet />
      </div>
      <ScrollTop />
      <Footer />
    </div>
  );
}
