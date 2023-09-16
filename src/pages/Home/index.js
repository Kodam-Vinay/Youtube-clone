import React, { useEffect, useState } from "react";
import { POPULAR_VIDEOS_API } from "../../config/constants";
import useGetVideosList from "../../utils/useGetVideosList";
import ErrorPage from "../ErrorPage";
import { getFullDetails } from "../../helper";
import Shimmer from "../../components/Shimmer";
import FilterShimmer from "../../components/FilterShimmer";
import HomeComponent from "../../components/HomeComponent";

const constApiStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Home = () => {
  const [apiStaus, setApiStatus] = useState({
    status: constApiStatus.initial,
    data: {},
  });

  document.title = "Youtube Vinay";
  useEffect(() => {
    setApiStatus((prev) => ({
      ...prev,
      status: constApiStatus.inProgress,
    }));
  }, []);
  const videosList = useGetVideosList(POPULAR_VIDEOS_API);
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

    return <HomeComponent fullDetails={fullDetails} />;
  };

  const FailureView = () => {
    return <ErrorPage />;
  };
  const RenderResults = () => {
    switch (apiStaus.status) {
      case constApiStatus.inProgress:
        return (
          <div className="h-full w-full">
            <FilterShimmer />
            <Shimmer />
          </div>
        );
      case constApiStatus.success:
        return <SuccessView />;
      case constApiStatus.failure:
        return <FailureView />;
      default:
        return null;
    }
  };
  return <div className="w-full h-full pb-20 mxs:pb-15">{RenderResults()}</div>;
};

export default Home;
