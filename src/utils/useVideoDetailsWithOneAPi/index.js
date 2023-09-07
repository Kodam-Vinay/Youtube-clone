import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_DETAILS_WITH_ONE_API } from "../../config/constants";

const useVideoDetailsWithOneAPi = (videosList) => {
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [videoInfo, setVideoInfo] = useState([]);
  const getData = async () => {
    if (videosList.includes(undefined)) {
    }
    const joinListVideosIds = videosList.join("%2C");
    try {
      const apiUrl = YOUTUBE_VIDEO_DETAILS_WITH_ONE_API.replace(
        "Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI",
        joinListVideosIds
      );
      const response = await fetch(apiUrl);
      const data = await response.json();
      setVideoInfo(data.items);
    } catch (error) {
      console.log(error);
    }
  };
  return videoInfo;
};
export default useVideoDetailsWithOneAPi;
