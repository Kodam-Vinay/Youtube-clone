import { useSelector } from "react-redux";
import { BsDot } from "react-icons/bs";
import useDateToDistanceFormat from "../../utils/useDateToDistanceFormat";
import { Link } from "react-router-dom";
// import useChannelDetails from "../../utils/useChannelDetails";
// import { DUMMY_IMG_URL } from "../../config/constants";
import useNumericToAlpha from "../../utils/useNumericToAlpha";

const VideoCard = ({ videosList }) => {
  const { snippet, statistics } = videosList;
  const noOfViews = useNumericToAlpha(statistics?.viewCount);
  // console.log(snippet.channelId);
  // const channelDetails = useChannelDetails(snippet.channelId);
  // console.log(channelDetails);
  const isMenuOpen = useSelector((store) => store.hamburger.isMenuOpen);
  const date = useDateToDistanceFormat(snippet.publishedAt);
  const onClickVideo = () => {
    document.title = snippet?.title;
  };
  return (
    <Link to={`/watch?v=${videosList?.id}`} onClick={onClickVideo}>
      <div
        className={`m-2 w-full mb-4 sm:mb-2 ${
          isMenuOpen ? "mxs:w-60" : "mxs:w-64"
        }`}
      >
        <img
          src={snippet?.thumbnails?.medium?.url}
          alt="youtbeVideoLogo"
          className="rounded-lg w-full shadow-lg"
        />
        <div className="mt-3 flex">
          {/* <img
            src={
              channelDetails
                ? channelDetails?.snippet?.thumbnails?.medium?.url
                : DUMMY_IMG_URL
            }
            alt="channel-logo"
            className="h-8 w-8 rounded-full mr-2"
          /> */}

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
      </div>
    </Link>
  );
};

export default VideoCard;
