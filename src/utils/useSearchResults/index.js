import { useEffect } from "react";
import { API_STATUS_LIST, SEARCH_RESULTS_API } from "../../config/constants";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { storeSearchQuery } from "../../Slices/SearchSuggestionSlice";

const useSearchResults = ({ setApiStatus, setData }) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const urlSearchInput = searchParams.get("query");

  const isSearchClicked = useSelector(
    (store) => store.suggestions.isSearchClicked
  );
  const searchInput = useSelector((store) => store.suggestions.searchInput);
  const searchQuery = searchInput || urlSearchInput || "";

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

      const apiUrl = SEARCH_RESULTS_API.replace("q=vinay", `q=${searchQuery}`);
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (response.ok) {
        setApiStatus((prev) => ({
          ...prev,
          status: API_STATUS_LIST.success,
        }));

        const videoIds = data?.items?.map((each) => each?.id?.videoId);
        setData(videoIds);
      } else {
        setApiStatus((prev) => ({
          ...prev,
          status: API_STATUS_LIST.inProgress,
          errorMessage: data?.message || "Something Error Occured",
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
