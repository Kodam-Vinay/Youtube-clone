import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
// import useNumericToAlpha from "../../utils/useNumericToAlpha";
import useDateToDistanceFormat from "../../utils/useDateToDistanceFormat";

const ShowSearchResults = ({ searchResults }) => {
  const { snippet, id } = searchResults;
  const { videoId } = id;
  const noOfViews = 10;
  const date = useDateToDistanceFormat(snippet.publishedAt);
  if (!searchResults.id.videoId) {
    return null;
  }
  //   const noOfViews = useNumericToAlpha(statistics?.viewCount);
  return (
    <Link to={`/watch?v=${videoId}`}>
      <div className="flex">
        <img
          src={snippet?.thumbnails?.medium?.url}
          alt="youtbeVideoLogo"
          className="rounded-lg w-24 h-20 xs:w-32 mxs:w-40 sm:w-44 sm:h-28 lg:w-80 lg:h-40 shadow-lg mr-2 lg:mr-4"
        />
        <div>
          <p className="font-bold text-sm mb-1">
            {snippet?.title.length > 35
              ? snippet?.title.slice(0, 45) + "..."
              : snippet?.title}
          </p>
          <p className="text-sm">{snippet?.channelTitle}</p>
          <div className="flex items-center space-x-2">
            <p className="text-sm">{noOfViews}</p>
            <BsDot />
            <p className=" text-sm">{date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ShowSearchResults;
