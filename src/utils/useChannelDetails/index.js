import { useEffect, useState } from "react";
import { CHANNEL_DETAILS_API } from "../../config/constants";
import { useSelector } from "react-redux";

const useChannelDetails = () => {
  const channelList = useSelector((store) => store.channelDetails.channels);

  useEffect(() => {
    getChannelDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [channelDetails, setChannelDetails] = useState([]);
  const getChannelDetails = () => {
    channelList.length > 0 &&
      channelList.map(async (each) => {
        try {
          const apiUrl = CHANNEL_DETAILS_API.replace(
            "id=UCjJKg01HAP01xCLVhDmnLhw",
            `id=${each}`
          );
          const response = await fetch(apiUrl);
          const data = await response.json();
          console.log(data);
          setChannelDetails(data?.items[0]);
        } catch (error) {
          console.log(error);
        }
      });
  };
  return channelDetails;
};
export default useChannelDetails;
