import { useEffect } from "react";
import { API_STATUS_LIST, CHANNEL_DETAILS_API } from "../../config/constants";

const useGetSingleChannelDetails = ({ channelId, setApiStatus, setData }) => {
  useEffect(() => {
    getChannelDetails();
  }, [channelId]);

  const getChannelDetails = async () => {
    if (channelId !== undefined) {
      const apiUrl = CHANNEL_DETAILS_API.replace(
        "UC_x5XG1OV2P6uZZ5FSM9Ttw",
        channelId
      );
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
          setData(data?.items[0]);
        } else if (response.status === 403) {
          setApiStatus((prev) => ({
            ...prev,
            status: API_STATUS_LIST.failure,
            errorMessage: "Your Key was Expired",
          }));
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
};
export default useGetSingleChannelDetails;
