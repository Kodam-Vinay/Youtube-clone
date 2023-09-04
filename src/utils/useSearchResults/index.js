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
  const getData = async () => {
    if (searchInput === "") {
      return null;
    }
    const apiUrl = SEARCH_RESULTS_API.replace("q=vinay", `q=${searchInput}`);
    const response = await fetch(apiUrl);
    const data = await response.json();
    setSearchResults(data?.items);
  };
  return searchResults;
};
export default useSearchResults;
