import { useEffect } from "react";
import { API_STATUS_LIST, CHANNEL_DETAILS_API } from "../../config/constants";

const useChannelDetails = ({ channelList, setApiStatus, setData }) => {
  useEffect(() => {
    channelList?.length > 0 && getChannelDetails();
  }, [channelList]);

  const getChannelDetails = async () => {
    if (channelList?.length > 0) {
      const channelsIdList = channelList?.join("%2C");
      const apiUrl = CHANNEL_DETAILS_API.replace(
        "UC_x5XG1OV2P6uZZ5FSM9Ttw",
        channelsIdList
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
          setData(data?.items);
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
    } else {
      setTimeout(() => {}, 0);
    }
  };
};
export default useChannelDetails;
