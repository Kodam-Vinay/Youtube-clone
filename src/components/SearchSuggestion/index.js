import { BsSearch } from "react-icons/bs";

const SearchSuggestion = ({ suggestion, setSearchActive }) => {
  const onClickSuggestion = () => {
    console.log("hello");
  };
  return (
    <li
      className="px-2 hover:bg-gray-100 cursor-default flex items-center"
      onClick={onClickSuggestion}
    >
      <BsSearch />
      <span className="ml-2">{suggestion}</span>
    </li>
  );
};
export default SearchSuggestion;
