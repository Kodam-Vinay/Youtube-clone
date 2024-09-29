import ReactPlayer from "react-player";
import { YOUTUBE_VIDEO_PLAYER_URL } from "../../config/constants";
import { useSelector } from "react-redux";
import LikesAndSaveButtons from "../LikesAndSaveButtons";
import CommentSection from "../CommentSection";
import LiveChat from "../LiveChat";
import SuggestionVideos from "../SuggestionVideos";

const VideoComponent = ({ id, data, channelDetails, snippet }) => {
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  return (
    <>
      <div className="w-full lg:w-3/4 flex flex-col">
        <div className="h-96 w-full xs:h-[400px] mxs:h-[480px] sm:h-[560px] md:h-[640px]">
          <div className="w-full h-44 xs:h-52 mxs:h-72 sm:h-96 md:h-[450px] lg:h-[500px]">
            <ReactPlayer
              url={YOUTUBE_VIDEO_PLAYER_URL + id}
              width="100%"
              height="100%"
              controls
              className={`overflow-hidden rounded-md shadow-2xl ${
                isDarkMode ? "border border-white" : ""
              }`}
              playing
            />
          </div>
          <LikesAndSaveButtons
            videoDetails={data}
            channelDetails={channelDetails}
          />
        </div>
        {snippet?.liveBroadcastContent !== "live" && (
          <CommentSection videoId={id} />
        )}
      </div>
      <div className="p-2 lg:w-1/3 xl:1/4 mt-8 mxs:mt-4 lg:mt-0 lg:pt-0 space-y-4">
        {snippet?.liveBroadcastContent === "live" && <LiveChat />}

        <SuggestionVideos categoryId={snippet?.categoryId} />
      </div>
    </>
  );
};
export default VideoComponent;
