import SideBar from "../Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);

  return (
    <div className={`flex h-full ${isDarkMode ? "bg-black" : "bg-white"}`}>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
