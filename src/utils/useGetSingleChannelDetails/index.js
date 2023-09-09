import { useEffect, useState } from "react";
import { CHANNEL_DETAILS_API } from "../../config/constants";

const useGetSingleChannelDetails = (channelId) => {
  useEffect(() => {
    getChannelDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelId]);

  const [channel, setChannel] = useState({});
  const getChannelDetails = async () => {
    if (channelId !== undefined) {
      const apiUrl = CHANNEL_DETAILS_API.replace(
        "UC_x5XG1OV2P6uZZ5FSM9Ttw",
        channelId
      );
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (response.status === 200) {
          setChannel(data?.items[0]);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return Object.keys(channel).length > 0 ? channel : "";
};
export default useGetSingleChannelDetails;
