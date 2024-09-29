import React, { useState } from "react";
import { API_STATUS_LIST, POPULAR_VIDEOS_API } from "../../config/constants";
import useGetVideosList from "../../utils/useGetVideosList";
import ErrorPage from "../ErrorPage";
import { getFullDetails } from "../../helper";
import Shimmer from "../../components/Shimmer";
import RenderComponent from "../../components/RenderComponent";

const News = () => {
  const [apiStatus, setApiStatus] = useState({
    status: API_STATUS_LIST.initial,
    errorMessage: "",
  });
  const [data, setData] = useState({});

  document.title = "News";
  useGetVideosList({
    apiUrl:
      POPULAR_VIDEOS_API +
      "&videoCategoryId=25".replace("maxResults=50", "maxResults=30"),
    setApiStatus,
    setData,
  });

  const SuccessView = () => {
    const videos = data?.videos;
    const channel = data?.channelDetails;
    const fullDetails = getFullDetails(videos, channel);
    return <RenderComponent fullDetails={fullDetails} />;
  };

  const FailureView = () => {
    return <ErrorPage />;
  };
  const RenderResults = () => {
    switch (apiStatus.status) {
      case API_STATUS_LIST.inProgress:
        return <Shimmer />;
      case API_STATUS_LIST.success:
        return <SuccessView />;
      case API_STATUS_LIST.failure:
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

export default News;
