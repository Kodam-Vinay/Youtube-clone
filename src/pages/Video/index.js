import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AiOutlineDislike,
  AiOutlineLike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import { closeMenu } from "../../Slices/HamburgerSlice";
import { BiListPlus, BiListCheck } from "react-icons/bi";
import ReactPlayer from "react-player";
import {
  DUMMY_IMG_URL,
  YOUTUBE_VIDEO_PLAYER_URL,
} from "../../config/constants";
import useVideoDetails from "../../utils/useVideoDetails";
import useNumericToAlpha from "../../utils/useNumericToAlpha";
import {
  addToLikedVideos,
  addToSavedVideos,
  addToUnlikedVideos,
} from "../../Slices/LikedAndSavedVideosSlice";
import SuggestionVideos from "../../components/SuggestionVideos";
import useGetSingleChannelDetails from "../../utils/useGetSingleChannelDetails";
import ErrorPage from "../ErrorPage";
const constApiStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Video = () => {
  const [apiStaus, setApiStatus] = useState({
    status: constApiStatus.initial,
    data: {},
  });

  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  const likedVideos = useSelector((store) => store.storeVideo.likedVideos);
  const unlikedVideos = useSelector((store) => store.storeVideo.unlikedVideos);
  const savedVideos = useSelector((store) => store.storeVideo.savedVideos);

  useEffect(() => {
    dispatch(closeMenu());
  });
  useEffect(() => {
    setApiStatus((prev) => ({
      ...prev,
      status: constApiStatus.inProgress,
    }));
  }, []);
  const videoDetails = useVideoDetails();
  useEffect(() => {
    if (Object.keys(videoDetails).length > 0) {
      setApiStatus((prev) => ({
        ...prev,
        status: constApiStatus.success,
        data: videoDetails,
      }));
    } else if (videoDetails?.error) {
      setApiStatus((prev) => ({
        ...prev,
        status: constApiStatus.failure,
      }));
    }
  }, [videoDetails, videoDetails.error]);

  const channelDetails = useGetSingleChannelDetails(
    apiStaus?.data?.snippet?.channelId
  );
  const dispatch = useDispatch();
  const onClickLike = () => {
    if (
      Object.keys(videoDetails).length !== 0 &&
      Object.keys(channelDetails).length !== 0
    ) {
      const completeVideoDetails = { ...videoDetails, channelDetails };
      dispatch(addToLikedVideos(completeVideoDetails));
    }
  };
  const onClickUnLike = () => {
    if (
      Object.keys(videoDetails).length !== 0 &&
      Object.keys(channelDetails).length !== 0
    ) {
      const completeVideoDetails = { ...videoDetails, channelDetails };
      dispatch(addToUnlikedVideos(completeVideoDetails));
    }
  };
  const onClickSaveVideo = () => {
    if (
      Object.keys(videoDetails).length !== 0 &&
      Object.keys(channelDetails).length !== 0
    ) {
      const completeVideoDetails = { ...videoDetails, channelDetails };
      dispatch(addToSavedVideos(completeVideoDetails));
    }
  };
  const checkThisVideoIsSaved = savedVideos.find(
    (each) => each?.id === videoDetails?.id
  );

  const checkThisVideoIsLiked = likedVideos.find(
    (each) => each?.id === videoDetails?.id
  );

  const checkThisVideoIsDisLiked = unlikedVideos.find(
    (each) => each?.id === videoDetails?.id
  );

  const SuccessView = () => {
    const { id, snippet, statistics } = apiStaus.data;
    document.title = snippet?.title;
    const likesCount = useNumericToAlpha(statistics?.likeCount);
    return (
      <div className="w-full h-[96%] overflow-y-auto pb-5 flex flex-col lg:flex-row p-1 lg:p-4 lg:mb-10">
        <div className="h-96 lg:w-4/6 xl:3/4 xs:h-[400px] mxs:h-[480px] sm:h-[560px] md:h-[640px] lg:h-full">
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
                <div className="channel-text">
                  <h1 className="font-bold text-sm mxs:text-base">
                    {channelDetails?.snippet?.title}
                  </h1>
                  <p className="font-bold text-gray-400 text-sm">
                    {useNumericToAlpha(
                      channelDetails?.statistics?.subscriberCount
                    )}
                    <span className="text-xs"> subscribers</span>
                  </p>
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
        </div>
        <div className="p-2 lg:w-1/3 xl:1/4 mt-8 mxs:mt-4">
          <SuggestionVideos categoryId={snippet?.categoryId} />
        </div>
      </div>
    );
  };

  const RenderResults = () => {
    switch (apiStaus.status) {
      case constApiStatus.inProgress:
        return <h1>Loading.....</h1>;
      case constApiStatus.success:
        return <SuccessView />;
      case constApiStatus.failure:
        return <ErrorPage />;
      default:
        return null;
    }
  };
  return <>{RenderResults()}</>;
};

export default Video;
