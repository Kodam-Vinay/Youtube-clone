import { useEffect, useState } from "react";
import {
  API_STATUS_LIST,
  YOUTUBE_VIDEO_DETAILS_WITH_ONE_API,
} from "../../config/constants";
import useChannelDetails from "../useChannelDetails";

const useVideoDetailsWithOneAPi = ({ videosList, setApiStatus }) => {
  useEffect(() => {
    getData();
  }, []);

  const [videosInfo, setVideosInfo] = useState({
    videos: [],
    channelIds: [],
  });

  const channelDetails = useChannelDetails(videosInfo.channelIds);

  const getData = async () => {
    if (videosList.length > 0 && typeof (videosList !== "")) {
      const videoListWithoutUndefined = videosList.filter(
        (each) => each !== undefined
      );
      const joinListVideosIds = videoListWithoutUndefined.join("%2C");
      try {
        setApiStatus((prev) => ({
          ...prev,
          status: API_STATUS_LIST.inProgress,
        }));
        const apiUrl = YOUTUBE_VIDEO_DETAILS_WITH_ONE_API.replace(
          "Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI",
          joinListVideosIds
        );
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (response.ok) {
          setApiStatus((prev) => ({
            ...prev,
            status: API_STATUS_LIST.success,
          }));

          const channelDetails = data?.items?.map(
            (each) => each?.snippet?.channelId
          );

          setVideosInfo({
            videos: data?.items,
            channelIds: channelDetails,
          });
        } else {
          setApiStatus((prev) => ({
            ...prev,
            status: API_STATUS_LIST.failure,
            errorMessage: data?.message || "Something Error Occured",
          }));
        }
      } catch (error) {
        setApiStatus((prev) => ({
          ...prev,
          status: API_STATUS_LIST.failure,
          errorMessage: error?.message || "Something Error Occured",
        }));
      }
    }
  };

  return (
    videosInfo.videos?.length > 0 &&
    channelDetails.length > 0 && {
      videos: videosInfo?.videos,
      channelDetails: channelDetails,
    }
  );
};
export default useVideoDetailsWithOneAPi;
