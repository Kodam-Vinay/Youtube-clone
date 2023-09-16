import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../Slices/HamburgerSlice";
import useVideoDetails from "../../utils/useVideoDetails";
import useGetSingleChannelDetails from "../../utils/useGetSingleChannelDetails";
import ErrorPage from "../ErrorPage";
import { clearLiveChat } from "../../Slices/LiveChatSlice";
import VideoComponent from "../../components/VideoComponent";

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
        <VideoComponent
          id={id}
          apiStaus={apiStaus}
          channelDetails={channelDetails}
          snippet={snippet}
        />
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
