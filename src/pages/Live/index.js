import React, { useEffect, useState } from "react";
import { SEARCH_RESULTS_API } from "../../config/constants";
import VideoCard from "../../components/VideoCard";
import { useSelector } from "react-redux";
import useGetVideosList from "../../utils/useGetVideosList";
import ErrorPage from "../ErrorPage";
import { getFullDetails } from "../../helper";
import { v4 as uuidV4 } from "uuid";

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

  const isMenuOpen = useSelector((store) => store.hamburger.isMenuOpen);

  document.title = "Live";
  useEffect(() => {
    setApiStatus((prev) => ({
      ...prev,
      status: constApiStatus.inProgress,
    }));
  }, []);
  const videosList = useGetVideosList(
    SEARCH_RESULTS_API.replace("q=vinay&maxResults=20", "q=live&maxResults=30")
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
    const fullDetails = getFullDetails(videos, channel);
    return (
      <div
        className={`p-4 mxs:p-2 flex flex-col mxs:flex-row mxs:flex-wrap mxs:justify-center overflow-y-auto h-[96%]`}
      >
        {fullDetails.length > 0 &&
          fullDetails?.map((each) => (
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

export default Live;
