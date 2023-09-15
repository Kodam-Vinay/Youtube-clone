import React, { useContext, useEffect, useState } from "react";
import { POPULAR_VIDEOS_API } from "../../config/constants";
import VideoCard from "../../components/VideoCard";
import useGetVideosList from "../../utils/useGetVideosList";
import ErrorPage from "../ErrorPage";
import Filters from "../../components/Filters";
import FilterContext from "../../utils/FilterContext";
import { filterData, getFullDetails } from "../../helper";
import NoVideos from "../../components/NoVideos";
import Shimmer from "../../components/Shimmer";
import FilterShimmer from "../../components/FilterShimmer";

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

  const { activeFilterButton } = useContext(FilterContext);
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
    const List = filterData(fullDetails, activeFilterButton);
    return (
      <div className="w-full h-full">
        <Filters />
        <div
          className={`p-4 mxs:p-2 flex flex-col mxs:flex-row mxs:flex-wrap overflow-y-auto h-[96%]`}
        >
          {activeFilterButton === "0" && fullDetails.length > 0 ? (
            fullDetails?.map((each) => (
              <VideoCard key={each?.id} videosList={each} />
            ))
          ) : List.length > 0 ? (
            List?.map((each) => <VideoCard key={each?.id} videosList={each} />)
          ) : (
            <NoVideos />
          )}
        </div>
      </div>
    );
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
