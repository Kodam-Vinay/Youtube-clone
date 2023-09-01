import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { useSelector } from "react-redux";

const sideBarFirstList = [
  {
    id: "home",
    value: "Home",
    logo: <AiOutlineHome />,
    url: "/",
  },
  {
    id: "shorts",
    value: <AiOutlineHome />,
    logo: <AiOutlineHome />,
    url: "/shorts",
  },
];
const sideBarSecondList = [
  {
    id: "savedVideos",
    value: "Saved",
    logo: <AiOutlineHome />,
    url: "/savedVideos",
  },
  {
    id: "likedVideos",
    value: "Liked Videos",
    logo: <AiOutlineHome />,
    url: "/likedVideos",
  },
];

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.hamburger.isMenuOpen);
  return (
    <>
      {!isMenuOpen ? (
        <div
          className={`hidden mxs:block mxs:w-[4%] relative p-2 shadow-sm h-full`}
        >
          <div className="flex items-center">{sideBarSecondList[0].logo}</div>
          <hr />
          <div className="flex items-center">{sideBarSecondList[0].logo}</div>
        </div>
      ) : (
        <div className={`w-48 sm:w-[10%] left-0 sticky p-2 shadow-sm h-full`}>
          <div className="flex items-center">
            {sideBarSecondList[0].logo}
            {sideBarFirstList[0].value}
          </div>
          <hr />
          <div className="flex items-center">
            {sideBarSecondList[0].logo}
            {sideBarSecondList[0].value}
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
