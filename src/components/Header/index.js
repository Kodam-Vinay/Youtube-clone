import { RxHamburgerMenu } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import { IoIosArrowBack } from "react-icons/io";
import YoutubeLogo from "../../utils/svgs/YoutubeLogo";
import { toggleMenu } from "../../Slices/HamburgerSlice";
import { Link, useNavigate } from "react-router-dom";
import {
  API_STATUS_LIST,
  DUMMY_IMG_URL,
  YOUTUBE_SEARCH_SUGGESTIONS_API,
} from "../../config/constants";
import { useEffect, useState } from "react";
import SearchSuggestion from "../SearchSuggestion";
import {
  handleCacheData,
  makeSearchClicked,
  storeSearchInput,
  storeSearchQuery,
} from "../../Slices/SearchSuggestionSlice";
import { closeMenu } from "../../Slices/HamburgerSlice";
import { CiDark, CiLight } from "react-icons/ci";
import { toggleTheme } from "../../Slices/ThemeModeSlice";
import { RingLoader } from "react-spinners";
import { storeToastError } from "../../helper";

const Header = () => {
  const [apiStatus, setApiStatus] = useState({
    status: API_STATUS_LIST.initial,
    errorMessage: "",
  });

  useEffect(() => {
    if (apiStatus?.status === API_STATUS_LIST.failure) {
      storeToastError(apiStatus?.errorMessage);
    }
  }, [apiStatus]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.screen.availWidth >= 640 && setIsSearchClicked(false);
      window.screen.availWidth < 550 && dispatch(closeMenu());
    });
    window.screen.availWidth < 550 && dispatch(closeMenu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatch = useDispatch();
  const suggestionsList = useSelector((store) => store.suggestions.cacheData);
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  const handleSlider = () => {
    dispatch(toggleMenu());
  };
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const searchQuery = useSelector((store) => store?.suggestions?.searchQuery);
  const [isSearchActive, setSearchActive] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    //adding debouncing using setTimeout
    const timerId = setTimeout(() => {
      if (suggestionsList[searchQuery]) {
        setSearchSuggestions(suggestionsList[searchQuery]);
      } else {
        getData();
      }
    }, 200);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getData = async () => {
    try {
      if (searchQuery === "") return;
      setApiStatus((prev) => ({
        ...prev,
        status: API_STATUS_LIST.inProgress,
      }));
      const apiUrl = YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery;
      const response = await fetch(apiUrl);
      const data = await response.text();
      const searchSuggestions = [];
      if (response.ok) {
        setApiStatus((prev) => ({
          ...prev,
          status: API_STATUS_LIST.success,
          errorMessage: data?.message || "Something Error Occured",
        }));
        data.split("[").forEach((ele, index) => {
          if (!ele.split('"')[1] || index === 1) return;
          return searchSuggestions.push(ele.split('"')[1]);
        });

        setSearchSuggestions(
          searchSuggestions.slice(0, searchSuggestions.length - 1)
        );
        dispatch(handleCacheData({ [searchQuery]: searchSuggestions }));
      } else {
        setApiStatus((prev) => ({
          ...prev,
          status: API_STATUS_LIST.failure,
          errorMessage: data?.message || "Something Error Occured",
        }));
      }
    } catch (error) {
      setApiStatus((prev) => ({
        ...prev,
        status: API_STATUS_LIST.failure,
        errorMessage: error?.message || "Something Error Occured",
      }));
    }
  };

  const onClickSearch = (suggestion) => {
    if (searchQuery !== "") {
      if (typeof suggestion === "string") {
        navigate(`/search?query=${suggestion}`);
        dispatch(makeSearchClicked(true));
        dispatch(storeSearchInput(suggestion));
      } else if (searchQuery !== "") {
        navigate(`/search?query=${searchQuery}`);
        dispatch(makeSearchClicked(true));
        dispatch(storeSearchInput(searchQuery));
      }
    }
    setSearchActive(false);
  };

  const onPressEnterWithSearch = (event) => {
    if (event.key === "Enter") {
      if (searchQuery !== "") {
        onClickSearch();
        setSearchActive(false);
      }
    }
  };

  const onClickLightMode = () => {
    dispatch(toggleTheme(false));
  };

  const onClickDarkMode = () => {
    dispatch(toggleTheme(true));
  };

  return (
    <>
      {!isSearchClicked ? (
        <div
          className={`grid grid-flow-col items-center p-1 sm:px-3 justify-between ${
            isDarkMode ? "bg-black" : "bg-white"
          }`}
        >
          <div className="col-span-8 sm:col-span-2 flex items-center space-x-2 sm:space-x-3">
            <button
              type="button"
              className="hover:bg-gray-300 p-2 rounded-full"
              onClick={handleSlider}
            >
              <RxHamburgerMenu
                size={20}
                color={isDarkMode ? "white" : "black"}
              />
            </button>
            <Link to="/">
              {isDarkMode ? (
                <YoutubeLogo className="h-4" color="white" />
              ) : (
                <YoutubeLogo className="h-4" color="black" />
              )}
            </Link>
          </div>
          <div
            className={`flex col-span-1 sm:col-span-9 lg:col-span-5 w-3/4 m-auto ${
              isDarkMode ? "bg-black" : "bg-white"
            }`}
          >
            <div
              className={`hidden sm:flex w-3/4 ${
                isDarkMode ? "bg-black" : "bg-white"
              }`}
            >
              <div className="flex flex-col w-full">
                <div
                  className={`hidden sm:flex sm:items-center w-full border rounded-l-full px-2 ${
                    isSearchActive ? "border-blue-500" : "border-gray-200"
                  } ${isDarkMode ? "bg-black" : "bg-white"}`}
                >
                  {isSearchActive && (
                    <BsSearch color={isDarkMode ? "white" : "black"} />
                  )}
                  <input
                    type="search"
                    className={`hidden sm:block outline-none rounded-l-full pl-2 w-full h-8 ${
                      isDarkMode ? "bg-black text-white" : "bg-white text-black"
                    }`}
                    placeholder="search"
                    onChange={(event) =>
                      dispatch(storeSearchQuery(event.target.value))
                    }
                    onFocus={() => setSearchActive(true)}
                    value={searchQuery}
                    onBlur={() =>
                      searchSuggestions
                        ? setSearchActive(true)
                        : setSearchActive(false)
                    }
                    onKeyDown={onPressEnterWithSearch}
                  />
                </div>
                {isSearchActive &&
                  searchSuggestions.length > 0 &&
                  searchQuery !== "" && (
                    <ul
                      className={`p-1 py-2 shadow-md rounded-lg mt-1 absolute top-10 w-[29%] md:w-1/3 xl:w-[30%] space-y-1 ${
                        isDarkMode ? "bg-black" : "bg-white"
                      }`}
                    >
                      {apiStatus === API_STATUS_LIST.success ? (
                        searchSuggestions.map((each) => (
                          <SearchSuggestion
                            key={uuidV4()}
                            suggestion={each}
                            setSearchActive={setSearchActive}
                            setSearchInput={() => dispatch(storeSearchQuery)}
                            onClickSearch={onClickSearch}
                            searchInput={searchQuery}
                          />
                        ))
                      ) : apiStatus === API_STATUS_LIST.inProgress ? (
                        <div className="w-full h-full flex items-center justify-center m-auto">
                          <RingLoader />
                        </div>
                      ) : null}
                    </ul>
                  )}
              </div>

              <button
                type="button"
                className={`flex items-center justify-center rounded-r-full border border-gray-200 p-4 h-8  ${
                  isDarkMode
                    ? "bg-black hover:bg-slate-800"
                    : "bg-white hover:bg-gray-200"
                }`}
                onClick={onClickSearch}
              >
                <BsSearch color={isDarkMode ? "white" : "black"} />
              </button>
            </div>

            <button
              type="button"
              className="sm:hidden"
              onClick={() => setIsSearchClicked(true)}
            >
              <BsSearch color={isDarkMode ? "white" : "black"} />
            </button>
          </div>
          <div className="flex col-span-1 items-center">
            {isDarkMode ? (
              <button className="mr-2" onClick={onClickLightMode}>
                <CiLight size={30} fill="white" />
              </button>
            ) : (
              <button className="mr-2" onClick={onClickDarkMode}>
                <CiDark size={30} fill="black" />
              </button>
            )}
            <img
              src={DUMMY_IMG_URL}
              alt="user"
              className="h-8 w-8 rounded-full"
            />
          </div>
        </div>
      ) : (
        <div
          className={`sm:hidden pt-2 px-3 pb-1 flex items-center ${
            isDarkMode ? "bg-black" : "bg-white"
          }`}
        >
          <button
            className="bg-transparent"
            type="button"
            onClick={() => setIsSearchClicked(false)}
          >
            <IoIosArrowBack
              size={20}
              className="mr-2"
              color={isDarkMode ? "white" : "black"}
            />
          </button>
          <div className="flex m-auto">
            <div className="flex flex-col w-full">
              <div
                className={`flex items-center w-full border rounded-l-full px-2 ${
                  isSearchActive ? "border-blue-500" : "border-gray-200"
                }`}
              >
                {isSearchActive && (
                  <BsSearch color={isDarkMode ? "white" : "black"} />
                )}
                <input
                  type="search"
                  className={`outline-none rounded-l-full pl-2 w-full h-8 ${
                    isDarkMode ? "bg-black text-white" : "bg-white text-black"
                  }`}
                  placeholder="search"
                  onChange={(event) =>
                    dispatch(storeSearchQuery(event.target.value))
                  }
                  onFocus={() => setSearchActive(true)}
                  value={searchQuery}
                  onBlur={() =>
                    searchSuggestions
                      ? setSearchActive(true)
                      : setSearchActive(false)
                  }
                  onKeyDown={onPressEnterWithSearch}
                />
              </div>
              {isSearchActive &&
                searchSuggestions.length > 0 &&
                searchQuery !== "" && (
                  <ul
                    className={`p-1 py-2 shadow-md rounded-lg mt-1 absolute top-10  space-y-1 w-4/5 ${
                      isDarkMode ? "bg-black" : "bg-white"
                    }`}
                  >
                    {searchSuggestions.map((each) => (
                      <SearchSuggestion
                        key={uuidV4()}
                        suggestion={each}
                        setSearchActive={setSearchActive}
                        setSearchInput={() => storeSearchQuery()}
                        onClickSearch={onClickSearch}
                        searchInput={searchQuery}
                      />
                    ))}
                  </ul>
                )}
            </div>
            <button
              type="button"
              className={`flex items-center justify-center rounded-r-full border border-gray-200 p-4 h-8 hover:bg-gray-200 ${
                isDarkMode
                  ? "bg-black hover:bg-slate-800"
                  : "bg-white hover:bg-gray-200"
              }`}
              onClick={onClickSearch}
            >
              <BsSearch color={isDarkMode ? "white" : "black"} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
