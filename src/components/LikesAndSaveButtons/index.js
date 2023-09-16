import { useDispatch, useSelector } from "react-redux";
import {
  addToLikedVideos,
  addToSavedVideos,
  addToUnlikedVideos,
} from "../../Slices/LikedAndSavedVideosSlice";
import useNumericToAlpha from "../../utils/useNumericToAlpha";
import { DUMMY_IMG_URL } from "../../config/constants";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import { BiListCheck, BiListPlus } from "react-icons/bi";

const LikesAndSaveButtons = (data) => {
  const { videoDetails, channelDetails } = data;
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  const likedVideos = useSelector((store) => store.storeVideo.likedVideos);
  const unlikedVideos = useSelector((store) => store.storeVideo.unlikedVideos);
  const savedVideos = useSelector((store) => store.storeVideo.savedVideos);

  const dispatch = useDispatch();

  const { snippet, statistics } = videoDetails;
  document.title = snippet?.title;

  const checkThisVideoIsSaved = savedVideos.find(
    (each) => each?.id === videoDetails?.id
  );

  const checkThisVideoIsLiked = likedVideos.find(
    (each) => each?.id === videoDetails?.id
  );

  const checkThisVideoIsDisLiked = unlikedVideos.find(
    (each) => each?.id === videoDetails?.id
  );
  const onClickLike = () => {
    const completeVideoDetails = { ...videoDetails, channelDetails };
    dispatch(addToLikedVideos(completeVideoDetails));
  };
  const onClickUnLike = () => {
    const completeVideoDetails = { ...videoDetails, channelDetails };
    dispatch(addToUnlikedVideos(completeVideoDetails));
  };
  const onClickSaveVideo = () => {
    const completeVideoDetails = { ...videoDetails, channelDetails };
    dispatch(addToSavedVideos(completeVideoDetails));
  };
  const likesCount = useNumericToAlpha(statistics?.likeCount);
  return (
    <div
      className={`details h-52 xs:h-60 ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <div className="px-2">
        <h1 className="font-bold xs:text-base mxs:text-lg sm:text-xl mt-1">
          {snippet?.title}
        </h1>
        <div className="channel-details mt-2 flex items-center">
          <img
            src={
              channelDetails
                ? channelDetails?.snippet?.thumbnails?.medium?.url
                : DUMMY_IMG_URL
            }
            alt="channel-logo"
            className="h-6 w-6 mxs:h-10 mxs:w-10 rounded-full mr-2"
          />
          <div className="flex items-center justify-between w-full">
            <div className="channel-text">
              <h1 className="font-bold text-sm mxs:text-base">
                {channelDetails?.snippet?.title}
              </h1>
              <p className="font-bold text-gray-400 text-sm">
                {useNumericToAlpha(channelDetails?.statistics?.subscriberCount)}
                <span className="text-xs"> subscribers</span>
              </p>
            </div>
            <div
              className={`py-2 h-fit  rounded-full flex flex-col justify-center items-center w-36 ${
                isDarkMode ? "bg-slate-900" : "bg-gray-200"
              }`}
            >
              {useNumericToAlpha(statistics?.viewCount) + "  views"}
            </div>
          </div>
        </div>
      </div>
      <div className="like-save-video mt-2 flex items-center justify-between px-2">
        <div className="flex items-center w-fit rounded-full">
          <button
            type="button"
            onClick={onClickLike}
            className="border rounded-l-full px-2 py-1 hover:bg-gray-100"
          >
            {checkThisVideoIsLiked !== undefined ? (
              <div className="flex items-center">
                <AiFillLike size={30} />
                <span className="font-bold">{likesCount}</span>
              </div>
            ) : (
              <div className="flex items-center">
                <AiOutlineLike size={30} />
                <span className="font-bold">{likesCount}</span>
              </div>
            )}
          </button>
          <button
            type="button"
            onClick={onClickUnLike}
            className="border rounded-r-full px-2 py-1 hover:bg-gray-100"
          >
            {checkThisVideoIsDisLiked !== undefined ? (
              <AiFillDislike size={30} />
            ) : (
              <AiOutlineDislike size={30} />
            )}
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={onClickSaveVideo}
            className="border rounded-full px-2 py-1 hover:bg-gray-100"
          >
            {checkThisVideoIsSaved !== undefined ? (
              <div className="flex items-center">
                <BiListCheck size={30} />
                <span className="font-bold">Saved</span>
              </div>
            ) : (
              <div className="flex items-center">
                <BiListPlus size={30} />
                <span className="font-bold">Save</span>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default LikesAndSaveButtons;
