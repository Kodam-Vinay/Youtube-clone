import { useEffect, useState } from "react";
import { SEARCH_RESULTS_API } from "../../config/constants";
import { useSelector } from "react-redux";

const useSearchResults = () => {
  const isSearchClicked = useSelector(
    (store) => store.suggestions.isSearchClicked
  );
  const searchInput = useSelector((store) => store.suggestions.searchInput);
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSearchClicked, searchInput]);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(0);
  const getData = async () => {
    if (searchInput === "") {
      return null;
    }
    try {
      const apiUrl = SEARCH_RESULTS_API.replace("q=vinay", `q=${searchInput}`);
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (response.ok) {
        const videoIds = data?.items?.map((each) => each?.id?.videoId);
        setSearchResults(videoIds);
      } else {
        setError(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return searchResults.length > 0 ? searchResults : error;
};
export default useSearchResults;
