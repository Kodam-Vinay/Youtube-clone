import React, { useEffect, useState } from "react";
import { POPULAR_VIDEOS_API } from "../../config/constants";
import VideoCard from "../../components/VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { storeChannelId } from "../../Slices/ChannelDetailsSlice";

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
  document.title = "Youtube Vinay";
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dispatch = useDispatch();
  const getData = async () => {
    setApiStatus((prev) => ({
      ...prev,
      status: constApiStatus.inProgress,
    }));
    try {
      const apiUrl = POPULAR_VIDEOS_API;
      const response = await fetch(apiUrl);

      const data = await response.json();
      if (response.status === 200) {
        setApiStatus((prev) => ({
          ...prev,
          data: data?.items,
          status: constApiStatus.success,
        }));
        const channelDetails = data?.items?.map(
          (each) => each?.snippet?.channelId
        );
        dispatch(storeChannelId(channelDetails));
      } else {
        setApiStatus((prev) => ({
          ...prev,
          status: constApiStatus.failure,
          errorMsg: "Something Has Been Happend",
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const SuccessView = () => {
    return (
      <div
        className={`p-4 mxs:p-2 flex flex-col mxs:flex-row mxs:flex-wrap mxs:justify-center overflow-y-auto h-[96%]`}
      >
        {apiStaus?.data &&
          apiStaus?.data?.map((each) => (
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
