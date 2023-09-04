import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_DETAILS_API } from "../../config/constants";
import { useSearchParams } from "react-router-dom";

const useVideoDetails = () => {
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [videoInfo, setVideoInfo] = useState({});
  const [searchId] = useSearchParams();
  const getData = async () => {
    try {
      const videoId = searchId.get("v");
      const apiUrl = YOUTUBE_VIDEO_DETAILS_API.replace(
        "id=Ks-_Mh1QhMc",
        `id=${videoId}`
      );
      const response = await fetch(apiUrl);
      if (response.status === 200) {
        const data = await response.json();
        setVideoInfo(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return videoInfo;
};
export default useVideoDetails;
