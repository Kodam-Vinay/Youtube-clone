import React, { useState } from "react";
import { API_STATUS_LIST, POPULAR_VIDEOS_API } from "../../config/constants";
import useGetVideosList from "../../utils/useGetVideosList";
import ErrorPage from "../../pages/ErrorPage";
import ShowSearchResults from "../ShowSearchResults";
import { RingLoader } from "react-spinners";
import { getFullDetails } from "../../helper";

const SuggestionVideos = ({ categoryId }) => {
  const [apiStatus, setApiStatus] = useState({
    status: API_STATUS_LIST.initial,
    errorMessage: "",
  });
  const [data, setData] = useState({});

  useGetVideosList({
    apiUrl:
      POPULAR_VIDEOS_API +
      "&videoCategoryId=" +
      categoryId.replace("maxResults=50", "maxResults=20"),
    setApiStatus,
    setData,
  });

  const SuccessView = () => {
    const videos = data?.videos;
    const channel = data?.channelDetails;
    const fullDetails = getFullDetails(videos, channel);

    return (
      <div className="flex flex-col h-[96%] space-y-2 w-full">
        {fullDetails?.length > 0 &&
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
    switch (apiStatus.status) {
      case API_STATUS_LIST.inProgress:
        return (
          <div className="w-full h-full flex items-center justify-center m-auto">
            <RingLoader />
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
  return (
    <div className="w-full h-full">
      <RenderResults />
    </div>
  );
};

export default SuggestionVideos;
