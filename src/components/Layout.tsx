import { MenuItem } from "primereact/menuitem";
import { ScrollTop } from "primereact/scrolltop";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { createAvatarDropdownItems, createMenuItems } from "@/data/menu";
import Footer from "./Footer";
import { TopNavbar } from "./Navbar";
import { RightSideBar } from "./Sidebar";

export default function Layout() {
  const [visible, setVisible] = useState(false);
  const toggleSidebar = () => setVisible(!visible);
  const navigate = useNavigate();
  const [menuItems] = useState<MenuItem[]>(createMenuItems(navigate));
  const [avatarDropdownItems] = useState<MenuItem[]>(createAvatarDropdownItems(navigate));

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <RightSideBar
        visible={visible}
        toggleSidebar={toggleSidebar}
        menuItems={menuItems}
        onSearch={(e) => console.log(e.target.value)}
      />
      <TopNavbar
        toggleSidebar={toggleSidebar}
        menuItems={menuItems}
        onSearch={(e) => console.log(e.target.value)}
        avatarDropdownItems={avatarDropdownItems}
      />
      <div className="c-container mx-auto flex-grow p-3 m-3 shadow-lg rounded-md">
        <Outlet />
      </div>
      <ScrollTop />
      <Footer isAdmin={false} />
    </div>
  );

}