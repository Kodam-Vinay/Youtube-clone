import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "../../pages/Home";
import SomethingWentWrong from "../../pages/SomethingWentWrong";
import Music from "../../pages/Music";
import Video from "../../pages/Video";
import Gaming from "../../pages/Gaming";
import Live from "../../pages/Live";
import Sports from "../../pages/Sports";
import News from "../../pages/News";
import LikedVideos from "../../pages/LikedVideos";
import DisLikedVideos from "../../pages/DisLikedVideos";
import SavedVideos from "../../pages/SavedVideos";
import SearchResults from "../../pages/SearchResults";
import InvalidRoute from "../../pages/InvalidRoute";
import { useState } from "react";
import { catergoriesList } from "../../config/constants";
import store from "../../utils/store";
import { Provider } from "react-redux";
import FilterContext from "../../utils/FilterContext";
import Header from "../../components/Header";
import Body from "../../components/Body";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import useDeviceOnline from "../../utils/useDeviceOnline";
import OfflinePage from "../../pages/OfflinePage";

const RenderLayout = () => {
  const [activeFilterButton, setActiveFilterButton] = useState(
    catergoriesList[0].value
  );
  const isOnline = useDeviceOnline();

  const onClickContextMenu = (event) => {
    event.preventDefault();
    return false;
  };

  return (
    <Provider store={store}>
      <FilterContext.Provider
        value={{
          activeFilterButton: activeFilterButton,
          setActiveFilterButton: setActiveFilterButton,
          catergoriesList: catergoriesList,
        }}
      >
        <div
          className="h-[95vh] mxs:h-screen overflow-hidden"
          onContextMenu={onClickContextMenu}
        >
          {!isOnline ? (
            <OfflinePage />
          ) : (
            <>
              <ToastContainer />
              <Header />
              <Body />
            </>
          )}
        </div>
      </FilterContext.Provider>
    </Provider>
  );
};

const index = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <RenderLayout />,
      children: [
        {
          path: "",
          element: <Home />,
          errorElement: <SomethingWentWrong />,
        },
        {
          path: "/music",
          element: <Music />,
          errorElement: <SomethingWentWrong />,
        },
        {
          path: "/watch",
          element: <Video />,
          errorElement: <SomethingWentWrong />,
        },
        {
          path: "/gaming",
          element: <Gaming />,
          errorElement: <SomethingWentWrong />,
        },
        {
          path: "/live",
          element: <Live />,
          errorElement: <SomethingWentWrong />,
        },
        {
          path: "/sports",
          element: <Sports />,
          errorElement: <SomethingWentWrong />,
        },
        {
          path: "/news",
          element: <News />,
          errorElement: <SomethingWentWrong />,
        },
        {
          path: "/liked",
          element: <LikedVideos />,
          errorElement: <SomethingWentWrong />,
        },
        {
          path: "/disliked",
          element: <DisLikedVideos />,
          errorElement: <SomethingWentWrong />,
        },
        {
          path: "/saved",
          element: <SavedVideos />,
          errorElement: <SomethingWentWrong />,
        },
        {
          path: "/search",
          element: <SearchResults />,
          errorElement: <SomethingWentWrong />,
        },
        {
          path: "/offline",
          element: <OfflinePage />,
          errorElement: <SomethingWentWrong />,
        },
        {
          path: "/*",
          element: <InvalidRoute />,
        },
      ],
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default index;
