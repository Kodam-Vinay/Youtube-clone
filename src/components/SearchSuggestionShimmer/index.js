import { useSelector } from "react-redux";

const SearchSuggestionShimmer = () => {
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);

  return (
    <div className="flex flex-col w-full space-y-3">
      {Array(5)
        .fill("")
        .map((each, index) => (
          <div
            key={index}
            className={`px-2 cursor-default flex items-center rounded-sm h-5 ${
              isDarkMode
                ? "text-white bg-slate-500 hover:bg-slate-800"
                : "text-black bg-gray-400 hover:bg-gray-100"
            }`}
          ></div>
        ))}
    </div>
  );
};

export default SearchSuggestionShimmer;
