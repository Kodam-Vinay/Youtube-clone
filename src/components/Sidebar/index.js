import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavigationLink from "../NavigationLink";
import { v4 as uuidV4 } from "uuid";
import "./index.css";
import { useLocation } from "react-router-dom";
import { sideBarFirstList, sideBarSecondList } from "../../config/constants";

const SideBar = () => {
  const location = useLocation();
  const [activeIds, setActiveIds] = useState({
    id1: sideBarFirstList[0].url,
    id2: sideBarSecondList[0].url,
  });
  useEffect(() => {
    setActiveIds({
      id1: location.pathname,
      id2: location.pathname,
    });
  }, [location.pathname]);
  const isMenuOpen = useSelector((store) => store.hamburger.isMenuOpen);
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  return (
    <>
      {!isMenuOpen ? (
        <div
          className={`hidden mxs:flex mxs:flex-col mxs:w-[8%] sm:w-[7%] md:w-[6%] lg:w-[5%] xl:w-[4%] 2xl:w-[3%] relative p-2 shadow-lg h-[92%] space-y-2 ${
            isDarkMode ? "bg-black" : "bg-white"
          }`}
        >
          {sideBarSecondList.map((each) => (
            <NavigationLink
              key={uuidV4()}
              isActive1={activeIds.id1 === each.url}
              isActive2={activeIds.id2 === each.url}
              activeIds={activeIds}
              linksList={each}
              setActiveIds={setActiveIds}
            />
          ))}
        </div>
      ) : (
        <div
          className={`add-sidebar-animation w-28 sm:w-[18%] md:w-[14%] lg:w-[12%] xl:w-[8%] absolute left-0 p-2 h-[88%] mxs:h-[92%] z-10 mxs:z-0 mxs:sticky space-y-2 ${
            isDarkMode
              ? "bg-black shadow-lg shadow-slate-800"
              : "bg-white shadow-lg"
          }`}
        >
          {sideBarFirstList.map((each) => (
            <NavigationLink
              key={uuidV4()}
              isActive1={activeIds.id1 === each.url}
              isActive2={activeIds.id2 === each.url}
              linksList={each}
              setActiveIds={setActiveIds}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SideBar;
