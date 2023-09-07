import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../Slices/HamburgerSlice";
import ReactPlayer from "react-player";
import { YOUTUBE_VIDEO_PLAYER_URL } from "../../config/constants";
import useVideoDetails from "../../utils/useVideoDetails";
const constApiStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Video = () => {
  const [apiStaus, setApiStatus] = useState({
    status: constApiStatus.initial,
    errorMsg: "",
    data: {},
  });
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
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
    if (Object.keys(videoDetails).length !== 0) {
      if (videoDetails?.items[0]) {
        setApiStatus((prev) => ({
          ...prev,
          status: constApiStatus.success,
          data: videoDetails?.items[0],
        }));
      } else {
        setApiStatus((prev) => ({
          ...prev,
          status: apiStaus.failure,
          errorMsg: "Bad Request",
        }));
      }
    }
  }, [videoDetails]);

  const dispatch = useDispatch();

  const SuccessView = () => {
    const { id, snippet, statistics } = apiStaus.data;
    return (
      <div className="w-full h-full">
        <div className="w-full h-1/3 xs:h-2/5 mxs:h-1/2 md:h-2/3 lg:w-2/3 lg:h-3/4 p-2">
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
        <div className="details"></div>
      </div>
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

  return <div className="w-full h-full">{RenderResults()}</div>;
};

export default Video;
