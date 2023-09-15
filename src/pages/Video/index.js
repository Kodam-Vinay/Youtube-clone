import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { closeMenu } from "../../Slices/HamburgerSlice";
import ReactPlayer from "react-player";
import { YOUTUBE_VIDEO_PLAYER_URL } from "../../config/constants";
import useVideoDetails from "../../utils/useVideoDetails";

import SuggestionVideos from "../../components/SuggestionVideos";
import useGetSingleChannelDetails from "../../utils/useGetSingleChannelDetails";
import ErrorPage from "../ErrorPage";
import CommentSection from "../../components/CommentSection";
import LiveChat from "../../components/LiveChat";
import { clearLiveChat } from "../../Slices/LiveChatSlice";
import LikesAndSaveButtons from "../../components/LikesAndSaveButtons";

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

  useEffect(() => {
    return () => {
      dispatch(clearLiveChat());
    };
  }, []);

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

  const SuccessView = () => {
    const { id, snippet } = apiStaus.data;
    document.title = snippet?.title;
    return (
      <div className="w-full h-[94%] overflow-y-auto pb-10 flex flex-col lg:flex-row p-1 lg:p-4 lg:pb-10">
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
              videoDetails={apiStaus.data}
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
