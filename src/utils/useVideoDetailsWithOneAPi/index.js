import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_DETAILS_WITH_ONE_API } from "../../config/constants";
import useChannelDetails from "../useChannelDetails";

const useVideoDetailsWithOneAPi = (videosList) => {
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [videosInfo, setVideosInfo] = useState({
    videos: [],
    channelIds: [],
  });

  const [error, setError] = useState({});
  const channelDetails = useChannelDetails(videosInfo.channelIds);

  const getData = async () => {
    if (videosList.length > 0 && typeof (videosList !== "")) {
      const videoListWithoutUndefined = videosList.filter(
        (each) => each !== undefined
      );
      const joinListVideosIds = videoListWithoutUndefined.join("%2C");
      try {
        const apiUrl = YOUTUBE_VIDEO_DETAILS_WITH_ONE_API.replace(
          "Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI",
          joinListVideosIds
        );
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (response.status === 200) {
          const channelDetails = data?.items?.map(
            (each) => each?.snippet?.channelId
          );
          setVideosInfo({
            videos: data?.items,
            channelIds: channelDetails,
          });
        } else {
          setError({ error: response.status });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return videosInfo.videos?.length > 0 && channelDetails.length > 0
    ? { videos: videosInfo?.videos, channelDetails: channelDetails }
    : error
    ? error
    : "IN_PROGRESS";
};
export default useVideoDetailsWithOneAPi;
