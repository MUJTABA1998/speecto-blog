import React from "react";
import { Outlet } from "react-router-dom";
import MobileSidebar from "../components/MobileSidebar";
import Sidebar from "../components/Sidebar";
import { FiMenu } from "react-icons/fi";

const Dashboard = () => {
  const [showMobileSidebar, setSidebar] = React.useState(false);

  const toggleSidebar = () => {
    setSidebar(!showMobileSidebar);
  };
  return (
    <div className="relative flex">
      <Sidebar />
      <MobileSidebar
        showMobileSidebar={showMobileSidebar}
        toggleSidebar={toggleSidebar}
      />
      <button
        className="absolute top-6 right-5 text-[25px] md:hidden"
        onClick={() => toggleSidebar()}
      >
        <FiMenu />
      </button>
      <div className="max-w-[84%] mx-auto overflow-x-hidden overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
