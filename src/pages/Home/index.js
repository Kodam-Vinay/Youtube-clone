import React, { useState } from "react";
import { API_STATUS_LIST, POPULAR_VIDEOS_API } from "../../config/constants";
import useGetVideosList from "../../utils/useGetVideosList";
import ErrorPage from "../ErrorPage";
import { getFullDetails } from "../../helper";
import Shimmer from "../../components/Shimmer";
import FilterShimmer from "../../components/FilterShimmer";
import HomeComponent from "../../components/HomeComponent";

const Home = () => {
  const [apiStatus, setApiStatus] = useState({
    status: API_STATUS_LIST.initial,
    errorMessage: "",
  });
  const [data, setData] = useState({});

  document.title = "Youtube Vinay";
  useGetVideosList({
    apiUrl: POPULAR_VIDEOS_API,
    setApiStatus,
    setData,
  });

  const SuccessView = () => {
    const videos = data?.videos;
    const channel = data?.channelDetails;
    const fullDetails = getFullDetails(videos, channel);

    return <HomeComponent fullDetails={fullDetails} />;
  };

  const FailureView = () => {
    return <ErrorPage />;
  };
  const RenderResults = () => {
    switch (apiStatus.status) {
      case API_STATUS_LIST.inProgress:
        return (
          <div className="h-full w-full">
            <FilterShimmer />
            <Shimmer />
          </div>
        );
      case API_STATUS_LIST.success:
        return <SuccessView />;
      case API_STATUS_LIST.failure:
        return <FailureView />;
      default:
        return null;
    }
  };
  return <div className="w-full h-full pb-20 mxs:pb-15">{RenderResults()}</div>;
};

export default Home;
