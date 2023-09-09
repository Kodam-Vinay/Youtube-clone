import React, { useEffect, useState } from "react";
import { POPULAR_VIDEOS_API } from "../../config/constants";
import VideoCard from "../../components/VideoCard";
import { useSelector } from "react-redux";
import useGetVideosList from "../../utils/useGetVideosList";
import ErrorPage from "../ErrorPage";

const constApiStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Music = () => {
  const [apiStaus, setApiStatus] = useState({
    status: constApiStatus.initial,
    data: {},
  });

  const isMenuOpen = useSelector((store) => store.hamburger.isMenuOpen);

  document.title = "Music";
  useEffect(() => {
    setApiStatus((prev) => ({
      ...prev,
      status: constApiStatus.inProgress,
    }));
  }, []);
  const videosList = useGetVideosList(
    POPULAR_VIDEOS_API +
      "&videoCategoryId=10".replace("maxResults=50", "maxResults=30")
  );
  useEffect(() => {
    if (videosList?.videos?.length > 0) {
      setApiStatus((prev) => ({
        ...prev,
        status: constApiStatus.success,
        data: videosList,
      }));
    } else if (videosList >= 400) {
      setApiStatus((prev) => ({
        ...prev,
        status: constApiStatus.failure,
      }));
    } else if (videosList === undefined) {
      setApiStatus((prev) => ({
        ...prev,
        status: constApiStatus.inProgress,
      }));
    }
  }, [videosList?.videos]);

  const SuccessView = () => {
    const videos = apiStaus?.data?.videos;
    const channel = apiStaus?.data?.channelDetails;
    const fullDetails = videos.map((each) => {
      let channelId = channel.find(
        (eachItem) => eachItem.id === each?.snippet?.channelId
      );
      if (channelId) {
        each = { ...each, channelDetails: channelId };
      }
      return each;
    });
    return (
      <div
        className={`p-4 mxs:p-2 flex flex-col mxs:flex-row mxs:flex-wrap mxs:justify-center overflow-y-auto h-[96%]`}
      >
        {fullDetails.length > 0 &&
          fullDetails?.map((each) => (
            <VideoCard key={each?.id} videosList={each} />
          ))}
      </div>
    );
  };

  const FailureView = () => {
    return <ErrorPage />;
  };
  const RenderResults = () => {
    switch (apiStaus.status) {
      case constApiStatus.inProgress:
        return <h1>Loading.....</h1>;
      case constApiStatus.success:
        return <SuccessView />;
      case constApiStatus.failure:
        return <FailureView />;
      default:
        return null;
    }
  };
  return (
    <div className={`${isMenuOpen ? "w-full mxs:w-[90%] " : "w-full"} h-full`}>
      <RenderResults />
    </div>
  );
};

export default Music;