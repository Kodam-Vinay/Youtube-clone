import React, { useEffect, useState } from "react";
import { POPULAR_VIDEOS_API } from "../../config/constants";
import useGetVideosList from "../../utils/useGetVideosList";
import ErrorPage from "../ErrorPage";
import { getFullDetails } from "../../helper";
import Shimmer from "../../components/Shimmer";
import RenderComponent from "../../components/RenderComponent";

const constApiStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Gaming = () => {
  const [apiStaus, setApiStatus] = useState({
    status: constApiStatus.initial,
    data: {},
  });

  document.title = "Gaming";
  useEffect(() => {
    setApiStatus((prev) => ({
      ...prev,
      status: constApiStatus.inProgress,
    }));
  }, []);
  const videosList = useGetVideosList(
    POPULAR_VIDEOS_API +
      "&videoCategoryId=20".replace("maxResults=50", "maxResults=30")
  );
  useEffect(() => {
    if (videosList?.videos?.length > 0) {
      setApiStatus((prev) => ({
        ...prev,
        status: constApiStatus.success,
        data: videosList,
      }));
    } else if (videosList?.error) {
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
  }, [videosList?.videos, videosList?.error]);

  const SuccessView = () => {
    const videos = apiStaus?.data?.videos;
    const channel = apiStaus?.data?.channelDetails;
    const fullDetails = getFullDetails(videos, channel);
    return <RenderComponent fullDetails={fullDetails} />;
  };

  const FailureView = () => {
    return <ErrorPage />;
  };
  const RenderResults = () => {
    switch (apiStaus.status) {
      case constApiStatus.inProgress:
        return <Shimmer />;
      case constApiStatus.success:
        return <SuccessView />;
      case constApiStatus.failure:
        return <FailureView />;
      default:
        return null;
    }
  };
  return (
    <div className="w-full h-full">
      <RenderResults />
    </div>
  );
};

export default Gaming;
