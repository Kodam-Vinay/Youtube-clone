import React, { useEffect, useState } from "react";
import { POPULAR_VIDEOS_API } from "../../config/constants";
import useGetVideosList from "../../utils/useGetVideosList";
import ErrorPage from "../../pages/ErrorPage";
import ShowSearchResults from "../ShowSearchResults";
import { RingLoader } from "react-spinners";
import { getFullDetails } from "../../helper";
import { videos, channelDetails } from "../../config/constants";

const constApiStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const SuggestionVideos = ({ categoryId }) => {
  const [apiStaus, setApiStatus] = useState({
    status: constApiStatus.initial,
    data: {},
  });

  useEffect(() => {
    setApiStatus((prev) => ({
      ...prev,
      status: constApiStatus.inProgress,
    }));
  }, []);
  const videosList = useGetVideosList(
    (POPULAR_VIDEOS_API + "&videoCategoryId=" + categoryId).replace(
      "maxResults=50",
      "maxResults=20"
    )
  );
  useEffect(() => {
    if (videosList?.videos?.length > 0) {
      setApiStatus((prev) => ({
        ...prev,
        status: constApiStatus.success,
        data: videosList,
      }));
    } else if (videosList.error === 404) {
      setApiStatus((prev) => ({
        ...prev,
        status: constApiStatus.success,
        data: { videos, channelDetails },
      }));
    } else if (videosList.error) {
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
  }, [videosList?.videos, videosList.error]);
  const SuccessView = () => {
    const videos = apiStaus?.data?.videos;
    const channel = apiStaus?.data?.channelDetails;
    const fullDetails = getFullDetails(videos, channel);
    return (
      <div className="flex flex-col h-[96%] space-y-2 w-full">
        {fullDetails.length > 0 &&
          fullDetails?.map((each) => (
            <ShowSearchResults key={each?.id} searchResults={each} />
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
        return (
          <div className="w-full h-full flex items-center justify-center m-auto">
            <RingLoader />
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
  return (
    <div className="w-full h-full">
      <RenderResults />
    </div>
  );
};

export default SuggestionVideos;
