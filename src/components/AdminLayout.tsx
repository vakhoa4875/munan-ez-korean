import { adminAvatarDropdownItems, adminMenuItems } from "@/data/menu";
import { ScrollTop } from "primereact/scrolltop";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { TopNavbar } from "./Navbar";
import { RightSideBar } from "./Sidebar";

export default function AdminLayout() {
  const [visible, setVisible] = useState(false);
  const toggleSidebar = () => setVisible(!visible);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <RightSideBar
        visible={visible}
        toggleSidebar={toggleSidebar}
      />
      <TopNavbar
        toggleSidebar={toggleSidebar}
        menuItems={adminMenuItems}
        onSearch={(e) => console.log(e.target.value)}
        avatarDropdownItems={adminAvatarDropdownItems}
      />
      <div className="c-container mx-auto flex-grow p-3 m-3 shadow-lg rounded-md">
        <Outlet />
      </div>
      <ScrollTop />
      <Footer isAdmin={true} />
    </div>
  );
}
