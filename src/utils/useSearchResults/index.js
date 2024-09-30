import { useEffect, useState } from "react";
import { API_STATUS_LIST, SEARCH_RESULTS_API } from "../../config/constants";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { storeSearchQuery } from "../../Slices/SearchSuggestionSlice";
import useChannelDetails from "../useChannelDetails";

const useSearchResults = ({ setApiStatus, setData }) => {
  const [videosList, setVideosList] = useState({
    videos: [],
    channelIds: [],
  });
  const [channelDetails, setChannelDetails] = useState([]);

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const urlSearchInput = searchParams.get("query");
  const isSearchClicked = useSelector(
    (store) => store.suggestions.isSearchClicked
  );
  const searchInput = useSelector((store) => store.suggestions.searchInput);
  const searchQuery = searchInput || urlSearchInput || "";

  useChannelDetails({
    channelList: videosList?.channelIds,
    setApiStatus,
    setData: setChannelDetails,
  });

  useEffect(() => {
    setData({
      videos: videosList?.videos,
      channelDetails: channelDetails,
    });
  }, [videosList, channelDetails]);

  useEffect(() => {
    if (searchQuery?.length > 0) {
      getData();
    }
  }, [isSearchClicked, searchQuery]);

  useEffect(() => {
    if (searchQuery?.length > 0) {
      dispatch(storeSearchQuery(searchQuery));
    }
  }, [searchQuery, urlSearchInput, dispatch]);

  const getData = async () => {
    if (searchQuery === "") {
      return null;
    }
    try {
      setApiStatus((prev) => ({
        ...prev,
        status: API_STATUS_LIST.inProgress,
      }));

      const apiUrl = SEARCH_RESULTS_API.replace(
        "q=vinay&maxResults=20",
        `q=${searchQuery}&maxResults=50`
      );
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (response.ok) {
        setApiStatus((prev) => ({
          ...prev,
          status: API_STATUS_LIST.success,
        }));
        // const videoIds = data?.items?.map((each) => each?.id?.videoId);
        const channelIdsInfo = data?.items?.map(
          (each) => each?.snippet?.channelId
        );
        setVideosList({
          videos: data?.items?.slice(0, 50),
          channelIds: channelIdsInfo?.slice(0, 50),
        });
      } else if (response.status === 403) {
        setApiStatus((prev) => ({
          ...prev,
          status: API_STATUS_LIST.failure,
          errorMessage: data?.error?.message || "Your Key was Expired",
        }));
      } else {
        setApiStatus((prev) => ({
          ...prev,
          status: API_STATUS_LIST.inProgress,
        }));
      }
    } catch (error) {
      setApiStatus((prev) => ({
        ...prev,
        status: API_STATUS_LIST.inProgress,
        errorMessage: error?.message || "Something Error Occured",
      }));
    }
  };
};
export default useSearchResults;
