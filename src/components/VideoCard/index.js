import { useSelector } from "react-redux";
import { BsDot } from "react-icons/bs";
import useDateToDistanceFormat from "../../utils/useDateToDistanceFormat";
import { Link } from "react-router-dom";
import useNumericToAlpha from "../../utils/useNumericToAlpha";
import { DUMMY_IMG_URL } from "../../config/constants";

const VideoCard = ({ videosList }) => {
  const { snippet, statistics, channelDetails } = videosList;
  const noOfViews = useNumericToAlpha(statistics?.viewCount);
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  const date = useDateToDistanceFormat(snippet.publishedAt);
  const onClickVideo = () => {
    document.title = snippet?.title;
  };
  return (
    <Link to={`/watch?v=${videosList?.id}`} onClick={onClickVideo}>
      <div className={`m-2 w-full mb-2 mxs:w-64`}>
        <img
          src={snippet?.thumbnails?.medium?.url}
          alt="youtbeVideoLogo"
          className="rounded-lg w-full shadow-lg"
        />
        <div className="mt-3 flex">
          <img
            src={
              channelDetails
                ? channelDetails?.snippet?.thumbnails?.medium?.url
                : DUMMY_IMG_URL
            }
            alt="channel-logo"
            className="h-8 w-8 rounded-full mr-2"
          />

          <div className={`${isDarkMode ? "text-white" : "text-black"}`}>
            <p className="font-bold text-sm mb-1">
              {snippet?.title.length > 35
                ? snippet?.title.slice(0, 45) + "..."
                : snippet?.title}
            </p>
            <p className="text-sm">{snippet?.channelTitle}</p>
            <div className="flex items-center space-x-2">
              <p className="text-sm">{statistics ? noOfViews : 200 + "k"}</p>
              <BsDot />
              <p className=" text-sm">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
