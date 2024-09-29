import useSearchResults from "../../utils/useSearchResults";
import ShowSearchResults from "../../components/ShowSearchResults";
import { v4 as uuidV4 } from "uuid";
import useVideoDetailsWithOneAPi from "../../utils/useVideoDetailsWithOneAPi";
import { useEffect, useState } from "react";
import ErrorPage from "../ErrorPage";
import SearchResultsShimmer from "../../components/SearchResultsShimmer";
import { API_STATUS_LIST } from "../../config/constants";
import { storeToastError } from "../../helper";

const SearchResults = () => {
  const [apiStatus, setApiStatus] = useState({
    status: API_STATUS_LIST.initial,
    errorMessage: "",
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    if (apiStatus?.status === API_STATUS_LIST.failure) {
      storeToastError(apiStatus?.errorMessage);
    }
  }, [apiStatus]);

  useSearchResults({
    setApiStatus,
    setData,
  });

  const SuccessView = () => {
    const videosList = useVideoDetailsWithOneAPi({
      setApiStatus,
      videosList: data,
    });
    const videos = videosList?.videos;
    const channel = videosList?.channelDetails;
    if (
      typeof videos === "object" &&
      videos.length > 0 &&
      typeof channel === "object" &&
      channel.length > 0
    ) {
      const fullDetails = videos?.map((each) => {
        let channelId = channel?.find(
          (eachItem) => eachItem.id === each?.snippet?.channelId
        );
        if (channelId) {
          each = { ...each, channelDetails: channelId };
        }
        return each;
      });
      return (
        <div className="flex flex-col space-y-4">
          {fullDetails.length > 0 &&
            fullDetails.map((each) => (
              <ShowSearchResults key={uuidV4()} searchResults={each} />
            ))}
        </div>
      );
    } else if (videosList >= 400 || videosList.error >= 400) {
      setApiStatus((prev) => ({
        ...prev,
        status: API_STATUS_LIST.failure,
      }));
    } else {
      return null;
    }
  };

  const FailureView = () => {
    return <ErrorPage />;
  };

  const RenderResults = () => {
    switch (apiStatus.status) {
      case API_STATUS_LIST.inProgress:
        return <SearchResultsShimmer />;
      case API_STATUS_LIST.success:
        return <SuccessView />;
      case API_STATUS_LIST.failure:
        return <FailureView />;
      default:
        return null;
    }
  };
  return (
    <div className="p-2 mxs:p-4 flex flex-col overflow-y-auto h-[96%] pb-10 w-full space-y-2">
      {RenderResults()}
    </div>
  );
};

export default SearchResults;
