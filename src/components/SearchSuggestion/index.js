import { BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";

const SearchSuggestion = ({
  suggestion,
  setSearchActive,
  setSearchInput,
  onClickSearch,
}) => {
  const onClickSuggestion = () => {
    setSearchInput(suggestion);
    setSearchActive(false);
    onClickSearch(suggestion);
  };
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  return (
    <li
      className={`px-2 cursor-default flex items-center rounded-sm ${
        isDarkMode
          ? "text-white hover:bg-slate-800"
          : "text-black hover:bg-gray-100"
      }`}
      onClick={onClickSuggestion}
    >
      <BsSearch color={isDarkMode ? "white" : "black"} />
      <span className="ml-2">{suggestion}</span>
    </li>
  );
};
export default SearchSuggestion;
