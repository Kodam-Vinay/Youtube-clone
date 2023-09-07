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
  let [apiStaus1, setApiStatus1] = useState({
    status: constApiStatus.initial,
    data: [],
  });
  const [searchVideosList, setSearchVideosList] = useState([]);
  useEffect(() => {
    setApiStatus1((prev) => ({
      ...prev,
      status: constApiStatus.inProgress,
    }));
  }, []);
  const results = useSearchResults();
  useEffect(() => {
    if (results.length > 0) {
      setApiStatus1((prev) => ({
        ...prev,
        status: constApiStatus.success,
        data: results,
      }));
    } else {
      setApiStatus1((prev) => ({
        ...prev,
        status: constApiStatus.failure,
      }));
    }
  }, [results]);
  const FirstSuccessView = () => {
    if (apiStaus1.data.includes(undefined)) {
      const index = apiStaus1.data.indexOf(undefined);
      apiStaus1.data.splice(index, 1);
    }
    const videosList = useVideoDetailsWithOneAPi(apiStaus1.data);
    useEffect(() => {
      if (videosList.length > 0) {
        setSearchVideosList(videosList);
      }
    }, []);
  };

  const FailureView = () => {
    return <ErrorPage />;
  };

  const RenderResults = () => {
    switch (apiStaus1.status) {
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
  const RenderSuccessView = () => {
    return (
      <>
        {searchVideosList.length > 0 &&
          searchVideosList.map((each) => (
            <ShowSearchResults key={uuidV4()} searchResults={each} />
          ))}
      </>
    );
  };
  return (
    <div className="p-2 mxs:p-4 flex flex-col overflow-y-auto h-[96%] pb-10 w-full space-y-2">
      {RenderResults()}
      {apiStaus1.status === constApiStatus.success && RenderSuccessView()}
    </div>
  );
};

export default SearchResults;
