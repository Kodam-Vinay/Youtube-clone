import React from "react";
import SideBar from "../Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex p-1 sm:p-2 h-full">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
