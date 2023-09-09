import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_DETAILS_API } from "../../config/constants";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

const useVideoDetails = (id) => {
  const [searchId] = useSearchParams();
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, searchId]);
  const isSearchClicked = useSelector(
    (store) => store.suggestions.isSearchClicked
  );
  const [videoInfo, setVideoInfo] = useState({});
  const getData = async () => {
    try {
      const videoId = isSearchClicked ? id : searchId.get("v");
      if (videoId !== "") {
        const apiUrl = YOUTUBE_VIDEO_DETAILS_API.replace(
          "id=Ks-_Mh1QhMc",
          `id=${videoId}`
        );
        const response = await fetch(apiUrl);
        if (response.status === 200) {
          const data = await response.json();
          setVideoInfo(data?.items[0]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return Object.keys(videoInfo).length > 0 ? videoInfo : "";
};
export default useVideoDetails;
