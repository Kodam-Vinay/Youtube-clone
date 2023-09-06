import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import useNumericToAlpha from "../../utils/useNumericToAlpha";
import useDateToDistanceFormat from "../../utils/useDateToDistanceFormat";
import useVideoDetails from "../../utils/useVideoDetails";
import { makeSearchClicked } from "../../Slices/SearchSuggestionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const constApiStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const ShowSearchResults = ({ searchResults }) => {
  const [apiStaus, setApiStatus] = useState({
    status: constApiStatus.initial,
    errorMsg: "",
    data: {},
  });
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  const dispatch = useDispatch();
  const { snippet, id } = searchResults;
  const { videoId } = id;
  const date = useDateToDistanceFormat(snippet.publishedAt);
  useEffect(() => {
    setApiStatus((prev) => ({
      ...prev,
      status: constApiStatus.inProgress,
    }));
  }, []);
  const result = useVideoDetails(videoId !== undefined ? videoId : "");
  useEffect(() => {
    if (Object.keys(result).length !== 0) {
      if (result?.items[0]) {
        setApiStatus((prev) => ({
          ...prev,
          status: constApiStatus.success,
          data: result?.items[0],
        }));
      } else {
        setApiStatus((prev) => ({
          ...prev,
          status: apiStaus.failure,
          errorMsg: "Bad Request",
        }));
      }
    }
  }, [result]);

  const onClickVideo = () => {
    dispatch(makeSearchClicked(false));
  };

  const SuccessView = () => {
    const count = useNumericToAlpha(apiStaus.data?.statistics?.viewCount);

    return (
      <Link to={`/watch?v=${videoId}`} onClick={onClickVideo}>
        <div className="flex">
          <img
            src={snippet?.thumbnails?.medium?.url}
            alt="youtbeVideoLogo"
            className="rounded-lg w-24 h-16 xs:w-32 xs:h-20 mxs:w-40 mxs:h-28 sm:w-44 lg:w-72 lg:h-40 shadow-lg mr-2 lg:mr-4"
          />
          <div className={`${isDarkMode ? "text-white" : "text-black"}`}>
            <p className="font-bold text-sm mb-1">
              {snippet?.title.length > 35
                ? snippet?.title.slice(0, 45) + "..."
                : snippet?.title}
            </p>
            <p className="text-sm">{snippet?.channelTitle}</p>
            <div className="flex items-center space-x-2">
              <p className="text-sm">{count && count}</p>
              <BsDot />
              <p className=" text-sm">{date}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  };
  const RenderResults = () => {
    switch (apiStaus.status) {
      case constApiStatus.inProgress:
        return <h1>Loading.....</h1>;
      case constApiStatus.success:
        return <SuccessView />;
      default:
        return null;
    }
  };

  if (!searchResults.id.videoId) {
    return null;
  }

  return <>{RenderResults()}</>;
};
export default ShowSearchResults;
