import { useEffect, useState } from "react";
import useChannelDetails from "../useChannelDetails";
import { API_STATUS_LIST } from "../../config/constants";

const useGetVideosList = ({ apiUrl, setApiStatus, setData }) => {
  useEffect(() => {
    getData();
  }, [apiUrl]);

  const [videosList, setVideosList] = useState({
    videos: [],
    channelIds: [],
  });
  const [channelDetails, setChannelDetails] = useState([]);

  useChannelDetails({
    channelList: videosList?.channelIds,
    setApiStatus,
    setData: setChannelDetails,
  });

  useEffect(() => {
    setData({
      videos: videosList?.videos,
      channelDetails: channelDetails,
    });
  }, [videosList, channelDetails]);

  const getData = async () => {
    try {
      setApiStatus((prev) => ({
        ...prev,
        status: API_STATUS_LIST.inProgress,
      }));
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (response.ok) {
        setApiStatus((prev) => ({
          ...prev,
          status: API_STATUS_LIST.success,
        }));
        const channelIdsInfo = data?.items?.map(
          (each) => each?.snippet?.channelId
        );
        setVideosList({
          videos: data?.items?.slice(0, 50),
          channelIds: channelIdsInfo?.slice(0, 50),
        });
      } else if (response.status === 403) {
        setApiStatus((prev) => ({
          ...prev,
          status: API_STATUS_LIST.failure,
          errorMessage: "Your Key was Expired",
        }));
      } else {
        setApiStatus((prev) => ({
          ...prev,
          status: API_STATUS_LIST.inProgress,
          errorMessage: data?.message || "Something Error Occured",
        }));
      }
    } catch (error) {
      setApiStatus((prev) => ({
        ...prev,
        status: API_STATUS_LIST.inProgress,
        errorMessage: error?.message || "Something Error Occured",
      }));
    }
  };
};
export default useGetVideosList;
