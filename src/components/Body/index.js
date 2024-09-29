import React, { useEffect } from "react";
import SideBar from "../Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { API_STATUS_LIST } from "../../config/constants";
import { storeToastError } from "../../helper";

const Body = () => {
  const apiStatus = useSelector((store) => store?.response?.apiStatus);
  const errorMessage = useSelector((store) => store?.response?.errorMessage);
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);

  useEffect(() => {
    if (apiStatus === API_STATUS_LIST.failure) {
      storeToastError(errorMessage);
    }
  }, [errorMessage]);

  return (
    <div className={`flex h-full ${isDarkMode ? "bg-black" : "bg-white"}`}>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
