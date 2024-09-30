import useSearchResults from "../../utils/useSearchResults";
import { useEffect, useState } from "react";
import ErrorPage from "../ErrorPage";
import SearchResultsShimmer from "../../components/SearchResultsShimmer";
import { API_STATUS_LIST } from "../../config/constants";
import { getFullDetails, storeToastError } from "../../helper";
import ShowSearchResults from "../../components/ShowSearchResults";

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
    const videos = data?.videos;
    const channel = data?.channelDetails;
    const fullDetails = getFullDetails(videos, channel);
    return (
      <>
        {fullDetails?.map((each) => (
          <ShowSearchResults key={each?.id?.videoId} searchResults={each} />
        ))}
      </>
    );
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
