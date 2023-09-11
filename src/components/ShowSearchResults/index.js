import { BsDot } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import useNumericToAlpha from "../../utils/useNumericToAlpha";
import useDateToDistanceFormat from "../../utils/useDateToDistanceFormat";
import { makeSearchClicked } from "../../Slices/SearchSuggestionSlice";
import { useDispatch, useSelector } from "react-redux";
import { DUMMY_IMG_URL } from "../../config/constants";
import useWindowSize from "../../utils/useWindowSize";

const ShowSearchResults = ({ searchResults }) => {
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  const dispatch = useDispatch();
  const { snippet, id, statistics } = searchResults;
  const { channelDetails } = searchResults;
  const { snippet: channelSnippet } = channelDetails;
  const date = useDateToDistanceFormat(snippet?.publishedAt);
  const onClickVideo = () => {
    dispatch(makeSearchClicked(false));
  };
  const size = useWindowSize();
  const count = useNumericToAlpha(statistics?.viewCount);
  const location = useLocation();
  const SuccessView = () => {
    return (
      <Link to={`/watch?v=${id}`} onClick={onClickVideo}>
        <div className="flex">
          <img
            src={snippet?.thumbnails?.medium?.url}
            alt="youtbeVideoLogo"
            className={`${
              location.pathname === "/watch"
                ? "mxs:h-24"
                : "mxs:h-28 mxs:w-40 sm:w-44 lg:w-72 lg:h-40 shadow-lg mr-2 lg:mr-4"
            } rounded-lg w-24 h-20 xs:w-32 mr-2`}
          />
          <div className={`${isDarkMode ? "text-white" : "text-black"}`}>
            <p className={`mxs:font-bold text-sm mb-1`}>
              {size.width < 300
                ? snippet?.title.slice(0, 15) + "..."
                : size.width >= 300 && size.width < 650
                ? snippet?.title.slice(0, 35) + "..."
                : snippet?.title}
            </p>
            <div className="flex items-center space-x-1">
              <p className="text-sm">{count}</p>
              <BsDot />
              <p className=" text-sm">{date}</p>
            </div>
            <div className="flex items-center">
              <img
                src={
                  channelDetails
                    ? channelSnippet?.thumbnails?.medium?.url
                    : DUMMY_IMG_URL
                }
                alt="channel-logo"
                className="h-8 w-8 rounded-full mr-2"
              />
              <p className="text-sm">{snippet?.channelTitle}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return <>{SuccessView()}</>;
};
export default ShowSearchResults;
