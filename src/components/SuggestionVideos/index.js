import React, { useEffect, useState } from "react";
import { POPULAR_VIDEOS_API } from "../../config/constants";
import useGetVideosList from "../../utils/useGetVideosList";
import ErrorPage from "../../pages/ErrorPage";
import ShowSearchResults from "../ShowSearchResults";
import { RingLoader } from "react-spinners";

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
          <div className="w-full h-full flex items-center justify-center">
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
