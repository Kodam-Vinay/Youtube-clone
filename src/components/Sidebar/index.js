import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GoVideo } from "react-icons/go";
import { BsMusicNote } from "react-icons/bs";
import { CiStreamOn } from "react-icons/ci";
import { useSelector } from "react-redux";
import NavigationLink from "../NavigationLink";
import { v4 as uuidV4 } from "uuid";
import { GrGamepad } from "react-icons/gr";
import "./index.css";

const sideBarFirstList = [
  {
    id: "home",
    value: "Home",
    logo: <AiOutlineHome />,
    url: "/",
  },
  {
    id: "music",
    value: "Music",
    logo: <BsMusicNote />,
    url: "/music",
  },
  {
    id: "movies",
    value: "Movies",
    logo: <GoVideo />,
    url: "/movies",
  },
  {
    id: "gaming",
    value: "Gaming",
    logo: <GrGamepad />,
    url: "/gaming",
  },
  {
    id: "live",
    value: "Live",
    logo: <CiStreamOn />,
    url: "/live",
  },
];

const sideBarSecondList = [
  {
    id: "home",
    logo: <AiOutlineHome />,
    url: "/",
  },
  {
    id: "music",
    logo: <BsMusicNote />,
    url: "/music",
  },
  {
    id: "movies",
    logo: <GoVideo />,
    url: "/movies",
  },
  {
    id: "gaming",
    logo: <GrGamepad />,
    url: "/gaming",
  },
  {
    id: "live",
    logo: <CiStreamOn />,
    url: "/",
  },
];

const SideBar = () => {
  const [activeIds, setActiveIds] = useState({
    id1: sideBarFirstList[0].id,
    id2: sideBarSecondList[0].id,
  });
  const isMenuOpen = useSelector((store) => store.hamburger.isMenuOpen);
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  return (
    <>
      {!isMenuOpen ? (
        <div
          className={`hidden mxs:flex mxs:flex-col mxs:w-[6%] lg:w-[3%] relative p-2 shadow-lg h-[92%] space-y-2 ${
            isDarkMode ? "bg-black" : "bg-white"
          }`}
        >
          {sideBarSecondList.map((each) => (
            <NavigationLink key={uuidV4()} linksList={each} />
          ))}
        </div>
      ) : (
        <div
          className={`add-sidebar-animation w-28 sm:w-[18%] md:w-[14%] lg:w-[8%] absolute left-0 p-2 h-[88%] mxs:h-[92%] z-10 mxs:z-0 mxs:sticky space-y-2 ${
            isDarkMode
              ? "bg-black shadow-lg shadow-slate-800"
              : "bg-white shadow-lg"
          }`}
        >
          {sideBarFirstList.map((each) => (
            <NavigationLink key={uuidV4()} linksList={each} />
          ))}
        </div>
      )}
    </>
  );
};

export default SideBar;
