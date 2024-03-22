import { useEffect, useState } from "react";
import { CHANNEL_DETAILS_API } from "../../config/constants";

const useChannelDetails = (channelList) => {
  useEffect(() => {
    getChannelDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelList]);

  const [channelDetails, setChannelDetails] = useState([]);
  const getChannelDetails = async () => {
    if (channelList?.length > 0) {
      const channelsIdList = channelList?.join("%2C");
      const apiUrl = CHANNEL_DETAILS_API.replace(
        "UC_x5XG1OV2P6uZZ5FSM9Ttw",
        channelsIdList
      );
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (response.ok) {
          setChannelDetails(data?.items);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setTimeout(() => {}, 0);
    }
  };
  return channelDetails?.length > 0 ? channelDetails : "";
};
export default useChannelDetails;
