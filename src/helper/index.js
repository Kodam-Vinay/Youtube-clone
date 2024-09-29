import { toast } from "react-toastify";

export const filterData = (fullDetails, activeFilterButton) =>
  fullDetails.filter(
    (each) => each?.snippet?.categoryId === activeFilterButton
  );

export const getFullDetails = (videos, channel) =>
  videos?.map((each) => {
    let channelId = channel.find(
      (eachItem) => eachItem?.id === each?.snippet?.channelId
    );
    if (channelId) {
      each = { ...each, channelDetails: channelId };
    }
    return each;
  });

export const randomNameGenerator = (namesList) => {
  const randomNum = Math.ceil(Math.random() * namesList.length);
  return namesList[randomNum];
};

export const storeToastError = (errorMessage) => {
  toast.error(errorMessage);
};
