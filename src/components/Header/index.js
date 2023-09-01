import { RxHamburgerMenu } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import YoutubeLogo from "../../utils/svgs/YoutubeLogo";
import { toggleMenu } from "../../Slices/HamburgerSlice";
import { Link } from "react-router-dom";
import { DUMMY_IMG_URL } from "../../config/constants";

const Header = () => {
  const dispatch = useDispatch();
  const handleSlider = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-sm items-center p-1 sm:px-3">
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
      <div className="flex col-span-1 sm:col-span-6 w-full lg:w-3/4 m-auto">
        <div className="hidden sm:flex sm:items-center w-1/2 lg:w-5/6">
          <div className="hidden sm:flex sm:items-center sm:w-4/5">
            <BsSearch className="hidden active:block" />
            <input
              type="search"
              className="hidden sm:block border outline-none focus:border-blue-500 border-gray-200 px-4 rounded-l-full w-full h-8"
              placeholder="search"
            />
          </div>
          <button className="sm:w-1/5 lg:w-1/12 flex items-center justify-center rounded-r-full border border-gray-200 px-2 h-8 bg-gray-100 hover:bg-gray-200">
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
