import React, { useEffect, useState } from "react";
import { POPULAR_VIDEOS_API } from "../../config/constants";
import VideoCard from "../../components/VideoCard";
import { useSelector } from "react-redux";

const constApiStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Home = () => {
  const [apiStaus, setApiStatus] = useState({
    status: constApiStatus.initial,
    errorMsg: "",
    cityName: "",
    data: [],
  });
  const isMenuOpen = useSelector((store) => store.hamburger.isMenuOpen);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setApiStatus((prev) => ({
      ...prev,
      status: constApiStatus.inProgress,
    }));
    const apiUrl = POPULAR_VIDEOS_API;
    const response = await fetch(apiUrl);
    let data = await response.json();
    setApiStatus((prev) => ({
      ...prev,
      data: data?.items,
      status: constApiStatus.success,
    }));
  };
  const SuccessView = () => {
    return (
      <div
        className={`p-4 mxs:p-2 mxs:flex mxs:flex-wrap overflow-y-auto h-[96%]`}
      >
        {apiStaus?.data?.map((each) => (
          <VideoCard key={each?.id} videosList={each} />
        ))}
      </div>
    );
  };
  const RenderResults = () => {
    switch (apiStaus.status) {
      case constApiStatus.inProgress:
        return <h1>Loading.....</h1>;
      case constApiStatus.success:
        return <SuccessView />;
      default:
        return null;
    }
  };
  return (
    <div className={`${isMenuOpen ? "w-[90%]" : "w-full"} h-full`}>
      <RenderResults />
    </div>
  );
};

export default Home;
