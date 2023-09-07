import { useEffect, useState } from "react";
import useChannelDetails from "../useChannelDetails";

const useGetVideosList = (apiUrl) => {
  useEffect(() => {
    getData();
  }, []);
  const [videosList, setVideosList] = useState({
    videos: [],
    channelIds: [],
  });
  const [error, setError] = useState();
  const channelDetails = useChannelDetails(videosList.channelIds);
  const getData = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (response.status === 200) {
        const channelDetails = data?.items?.map(
          (each) => each?.snippet?.channelId
        );
        setVideosList({
          videos: data?.items,
          channelIds: channelDetails,
        });
      } else {
        setError(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return videosList.videos?.length > 0 && channelDetails.length > 0
    ? { videos: videosList?.videos, channelDetails: channelDetails }
    : error
    ? error
    : "IN_PROGRESS";
};
export default useGetVideosList;
