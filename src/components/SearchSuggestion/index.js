import { BsSearch } from "react-icons/bs";

const SearchSuggestion = ({ suggestion }) => {
  return (
    <li className="px-2 hover:bg-gray-100 cursor-default flex items-center">
      <BsSearch />
      <span className="ml-2">{suggestion}</span>
    </li>
  );
};
export default SearchSuggestion;
