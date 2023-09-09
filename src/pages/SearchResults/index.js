import useSearchResults from "../../utils/useSearchResults";
import ShowSearchResults from "../../components/ShowSearchResults";
import { v4 as uuidV4 } from "uuid";
import useVideoDetailsWithOneAPi from "../../utils/useVideoDetailsWithOneAPi";
import { useEffect, useState } from "react";
import ErrorPage from "../ErrorPage";

const constApiStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const SearchResults = () => {
  const [apiStaus, setApiStatus] = useState({
    status: constApiStatus.initial,
    data: [],
  });

  useEffect(() => {
    setApiStatus((prev) => ({
      ...prev,
      status: constApiStatus.inProgress,
    }));
  }, []);
  const results = useSearchResults();
  useEffect(() => {
    if (results.length > 0) {
      setApiStatus((prev) => ({
        ...prev,
        status: constApiStatus.success,
        data: results,
      }));
    } else if (results >= 400) {
      setApiStatus((prev) => ({
        ...prev,
        status: constApiStatus.failure,
      }));
    } else {
      setApiStatus((prev) => ({
        ...prev,
        status: constApiStatus.inProgress,
      }));
    }
  }, [results]);
  const FirstSuccessView = () => {
    const videosList = useVideoDetailsWithOneAPi(apiStaus.data);
    const videos = videosList?.videos;
    const channel = videosList?.channelDetails;
    if (
      typeof videos === "object" &&
      videos.length > 0 &&
      typeof channel === "object" &&
      channel.length > 0
    ) {
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
        status: constApiStatus.failure,
      }));
    } else {
      return null;
    }
  };

  const FailureView = () => {
    return <ErrorPage />;
  };

  const RenderResults = () => {
    switch (apiStaus.status) {
      case constApiStatus.inProgress:
        return <h1>Loading.....</h1>;
      case constApiStatus.success:
        return <FirstSuccessView />;
      case constApiStatus.failure:
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
