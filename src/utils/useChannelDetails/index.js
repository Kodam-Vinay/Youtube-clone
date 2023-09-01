import { useEffect, useState } from "react";
import { CHANNEL_DETAILS_API } from "../../config/constants";

const useChannelDetails = (channelId) => {
  useEffect(() => {
    getChannelDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelId]);
  const [channelDetails, setChannelDetails] = useState({});
  const getChannelDetails = async () => {
    try {
      const apiUrl = CHANNEL_DETAILS_API.replace(
        "id=UCjJKg01HAP01xCLVhDmnLhw",
        `id=${channelId}`
      );
      const response = await fetch(apiUrl);
      const data = await response.json();
      setChannelDetails(data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };
  return channelDetails;
};
export default useChannelDetails;
