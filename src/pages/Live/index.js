import React, { useEffect, useState } from "react";
import { SEARCH_RESULTS_API } from "../../config/constants";
import VideoCard from "../../components/VideoCard";
import useGetVideosList from "../../utils/useGetVideosList";
import ErrorPage from "../ErrorPage";
import { getFullDetails } from "../../helper";
import { v4 as uuidV4 } from "uuid";
import useVideoDetailsWithOneAPi from "../../utils/useVideoDetailsWithOneAPi";
import Shimmer from "../../components/Shimmer";

const constApiStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Live = () => {
  const [apiStaus, setApiStatus] = useState({
    status: constApiStatus.initial,
    data: {},
  });

  document.title = "Live";
  useEffect(() => {
    setApiStatus((prev) => ({
      ...prev,
      status: constApiStatus.inProgress,
    }));
  }, []);
  const videosList = useGetVideosList(
    SEARCH_RESULTS_API.replace(
      "q=vinay&maxResults=20",
      "q=live&maxResults=50&regionCode=IN"
    )
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
    let fullDetails = [];
    const result = apiStaus?.data?.videos?.map((each) => each?.id?.videoId);
    const getVideosList = useVideoDetailsWithOneAPi(result);
    const { videos, channelDetails } = getVideosList;
    if (videos !== undefined && channelDetails !== undefined) {
      fullDetails = getFullDetails(videos, channelDetails);
    }
    if (getVideosList === "IN_PROGRESS") {
      return null;
    }
    const onlyLiveVideos = fullDetails.filter(
      (each) => each?.snippet?.liveBroadcastContent === "live"
    );

    return (
      <div
        className={`p-4 mxs:p-2 flex flex-col mxs:flex-row mxs:flex-wrap overflow-y-auto h-[96%]`}
      >
        {onlyLiveVideos.length > 0 &&
          onlyLiveVideos?.map((each) => (
            <VideoCard key={uuidV4()} videosList={each} />
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

export default Live;
