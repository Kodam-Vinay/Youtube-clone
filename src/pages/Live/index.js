import React, { useEffect, useState } from "react";
import { API_STATUS_LIST, SEARCH_RESULTS_API } from "../../config/constants";
import useGetVideosList from "../../utils/useGetVideosList";
import ErrorPage from "../ErrorPage";
import { getFullDetails, storeToastError } from "../../helper";
import Shimmer from "../../components/Shimmer";
import LiveComponent from "../../components/LIveComponent";

const Live = () => {
  const [apiStatus, setApiStatus] = useState({
    status: API_STATUS_LIST.initial,
    errorMessage: "",
  });
  const [data, setData] = useState({});

  useEffect(() => {
    if (apiStatus?.status === API_STATUS_LIST.failure) {
      storeToastError(apiStatus?.errorMessage);
    }
  }, [apiStatus]);

  document.title = "Live";

  useGetVideosList({
    apiUrl: SEARCH_RESULTS_API.replace(
      "q=vinay&maxResults=20",
      "eventType=live&type=video&maxResults=50&regionCode=IN"
    ),
    setApiStatus,
    setData,
  });

  const SuccessView = () => {
    const videos = data?.videos;
    const channelDetails = data?.channelDetails;

    const fullDetails = getFullDetails(videos, channelDetails);
    const onlyLiveVideos = fullDetails?.filter(
      (each) => each?.snippet?.liveBroadcastContent === "live"
    );

    return <LiveComponent onlyLiveVideos={onlyLiveVideos} />;
  };

  const RenderResults = () => {
    switch (apiStatus.status) {
      case API_STATUS_LIST.inProgress:
        return <Shimmer />;
      case API_STATUS_LIST.success:
        return <SuccessView />;
      case API_STATUS_LIST.failure:
        return <ErrorPage />;
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

export default Live;
