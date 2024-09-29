import { useEffect } from "react";
import {
  API_STATUS_LIST,
  YOUTUBE_VIDEO_DETAILS_API,
} from "../../config/constants";
import { useSearchParams } from "react-router-dom";

const useVideoDetails = ({ setData, setApiStatus }) => {
  const [searchId] = useSearchParams();
  const videoId = searchId.get("v");

  useEffect(() => {
    if (videoId) {
      getData();
    }
  }, [videoId]);

  const getData = async () => {
    try {
      setApiStatus((prev) => ({
        ...prev,
        status: API_STATUS_LIST.inProgress,
      }));
      if (videoId !== "") {
        const apiUrl = YOUTUBE_VIDEO_DETAILS_API.replace(
          "id=Ks-_Mh1QhMc",
          `id=${videoId}`
        );

        const response = await fetch(apiUrl);
        const data = await response.json();
        if (response.ok) {
          setApiStatus((prev) => ({
            ...prev,
            status: API_STATUS_LIST.success,
          }));
          setData(data?.items[0]);
        } else {
          setApiStatus((prev) => ({
            ...prev,
            status: API_STATUS_LIST.failure,
            errorMessage: data?.message || "Something Error Occured",
          }));
        }
      }
    } catch (error) {
      setApiStatus((prev) => ({
        ...prev,
        status: API_STATUS_LIST.failure,
        errorMessage: error?.message || "Something Error Occured",
      }));
    }
  };
};
export default useVideoDetails;
