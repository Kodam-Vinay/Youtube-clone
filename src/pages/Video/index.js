import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../Slices/HamburgerSlice";
import useVideoDetails from "../../utils/useVideoDetails";
import useGetSingleChannelDetails from "../../utils/useGetSingleChannelDetails";
import ErrorPage from "../ErrorPage";
import { clearLiveChat } from "../../Slices/LiveChatSlice";
import VideoComponent from "../../components/VideoComponent";
import { API_STATUS_LIST } from "../../config/constants";
import { RingLoader } from "react-spinners";

const Video = () => {
  const [apiStatus, setApiStatus] = useState({
    status: API_STATUS_LIST.initial,
    errorMessage: "",
  });

  const [data, setData] = useState({});
  const [channelDetails, setChannelDetails] = useState({});
  useEffect(() => {
    return () => {
      dispatch(clearLiveChat());
    };
  }, []);

  useEffect(() => {
    dispatch(closeMenu());
  });

  useEffect(() => {
    setApiStatus(API_STATUS_LIST.inProgress);
  }, []);

  useVideoDetails({
    setData,
    setApiStatus,
  });

  useGetSingleChannelDetails({
    channelId: data?.snippet?.channelId,
    setApiStatus,
    setData: setChannelDetails,
  });
  const dispatch = useDispatch();

  const SuccessView = () => {
    const { id, snippet } = data;
    document.title = snippet?.title;
    return (
      <div className="w-full h-[94%] overflow-y-auto pb-10 flex flex-col lg:flex-row p-1 lg:p-4 lg:pb-10">
        <VideoComponent
          id={id}
          data={data}
          channelDetails={channelDetails}
          snippet={snippet}
        />
      </div>
    );
  };

  const RenderResults = () => {
    switch (apiStatus.status) {
      case API_STATUS_LIST.inProgress:
        return (
          <div className="w-full h-full flex items-center justify-center m-auto">
            <RingLoader />
          </div>
        );
      case API_STATUS_LIST.success:
        return <SuccessView />;
      case API_STATUS_LIST.failure:
        return <ErrorPage />;
      default:
        return null;
    }
  };

  return <>{RenderResults()}</>;
};

export default Video;
