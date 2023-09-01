import { RxHamburgerMenu } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import YoutubeLogo from "../../utils/svgs/YoutubeLogo";
import { toggleMenu } from "../../Slices/HamburgerSlice";
import { Link } from "react-router-dom";
import {
  DUMMY_IMG_URL,
  YOUTUBE_SEARCH_SUGGESTIONS_API,
} from "../../config/constants";
import { useEffect, useState } from "react";
import SearchSuggestion from "../SearchSuggestion";
import { handleCacheData } from "../../Slices/SearchSuggestionSlice";

const Header = () => {
  const dispatch = useDispatch();
  const suggestionsList = useSelector((store) => store.suggestions.cacheData);
  const handleSlider = () => {
    dispatch(toggleMenu());
  };
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isSearchActive, setSearchActive] = useState(false);

  useEffect(() => {
    //adding debouncing using setTimeout

    const timerId = setTimeout(() => {
      if (suggestionsList[searchInput]) {
        setSearchSuggestions(suggestionsList[searchInput]);
      } else {
        getData();
      }
    }, 200);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  const getData = async () => {
    try {
      const response = await fetch(
        YOUTUBE_SEARCH_SUGGESTIONS_API + searchInput
      );
      const data = await response.json();
      setSearchSuggestions(data[1]);
      dispatch(handleCacheData({ [searchInput]: data[1] }));
    } catch (error) {}
  };

  return (
    <div className="grid grid-flow-col items-center p-1 sm:px-3">
      <div className="col-span-8 sm:col-span-2 flex items-center space-x-2 sm:space-x-3">
        <button
          className="hover:bg-gray-300 p-2 rounded-full"
          onClick={handleSlider}
        >
          <RxHamburgerMenu size={20} />
        </button>
        <Link to="/">
          <YoutubeLogo className="h-4" />
        </Link>
      </div>
      <div className="flex col-span-1 sm:col-span-6 w-3/4 m-auto">
        <div className="hidden sm:flex w-2/3">
          <div className="flex flex-col w-full">
            <div
              className={`hidden sm:flex  sm:items-center w-full border border-gray-200  rounded-l-full px-2 ${
                isSearchActive && "border-blue-500"
              }`}
            >
              {isSearchActive && <BsSearch />}
              <input
                type="search"
                className="hidden sm:block outline-none rounded-l-full pl-2 w-full h-8"
                placeholder="search"
                onChange={(event) => setSearchInput(event.target.value)}
                onFocus={() => setSearchActive(true)}
                onBlur={() => setSearchActive(false)}
              />
            </div>
            {isSearchActive && searchSuggestions.length > 0 && (
              <ul className="p-1 py-2 shadow-md rounded-lg mt-1 absolute top-10  xl:w-[30%]">
                {searchSuggestions.map((each) => (
                  <SearchSuggestion key={uuidV4()} suggestion={each} />
                ))}
              </ul>
            )}
          </div>
          <button className="flex items-center justify-center rounded-r-full border border-gray-200 p-4 h-8 bg-gray-100 hover:bg-gray-200">
            <BsSearch />
          </button>
        </div>
        <button className="sm:hidden">
          <BsSearch />
        </button>
      </div>
      <div className="flex col-span-1">
        <img src={DUMMY_IMG_URL} alt="user" className="h-8 w-8" />
      </div>
    </div>
  );
};

export default Header;