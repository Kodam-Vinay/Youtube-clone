import { Provider } from "react-redux";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Video from "./pages/Video";
import Body from "./components/Body";
import SearchResults from "./pages/SearchResults";
import Music from "./pages/Music";
import ErrorPage from "./pages/ErrorPage";
import Gaming from "./pages/Gaming";
import LikedVideos from "./pages/LikedVideos";
import DisLikedVideos from "./pages/DisLikedVideos";
import SavedVideos from "./pages/SavedVideos";
import Live from "./pages/Live";
import InvalidRoute from "./pages/InvalidRoute";
import Sports from "./pages/Sports";
import News from "./pages/News";
import FilterContext from "./utils/FilterContext";
import { useState } from "react";

const onClickContextMenu = (event) => {
  event.preventDefault();
  return false;
};

const catergoriesList = [
  {
    id: 1,
    value: "0",
    name: "All",
  },
  {
    id: 2,
    value: "20",
    name: "Games",
  },
  {
    id: 3,
    value: "23",
    name: "Comedy",
  },
  {
    id: 4,
    value: "10",
    name: "Music",
  },
  {
    id: 5,
    value: "28",
    name: "Science & Technology",
  },
  {
    id: 6,
    value: "22",
    name: "People & Blogs",
  },
  {
    id: 7,
    value: "24",
    name: "Entertainment",
  },
];

const RenderLayout = () => {
  const [activeFilterButton, setActiveFilterButton] = useState(
    catergoriesList[0].value
  );
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
          <Header />
          <Body />
        </div>
      </FilterContext.Provider>
    </Provider>
  );
};

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <RenderLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/music",
          element: <Music />,
        },
        {
          path: "/watch",
          element: <Video />,
        },
        {
          path: "/gaming",
          element: <Gaming />,
        },
        {
          path: "/live",
          element: <Live />,
        },
        {
          path: "/sports",
          element: <Sports />,
        },
        {
          path: "/news",
          element: <News />,
        },
        {
          path: "/liked",
          element: <LikedVideos />,
        },
        {
          path: "/disliked",
          element: <DisLikedVideos />,
        },
        {
          path: "/saved",
          element: <SavedVideos />,
        },

        {
          path: "/search",
          element: <SearchResults />,
        },
        {
          path: "/*",
          element: <InvalidRoute />,
        },
      ],
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
