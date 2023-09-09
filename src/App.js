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
import Movies from "./pages/Movies";
import ErrorPage from "./pages/ErrorPage";
import Gaming from "./pages/Gaming";
import LikedVideos from "./pages/LikedVideos";
import DisLikedVideos from "./pages/DisLikedVideos";
import SavedVideos from "./pages/SavedVideos";
import Live from "./pages/Live";
import InvalidRoute from "./pages/InvalidRoute";

const onClickContextMenu = (event) => {
  event.preventDefault();
  return false;
};

const RenderLayout = () => {
  return (
    <div
      className="h-[95vh] mxs:h-screen overflow-hidden"
      onContextMenu={onClickContextMenu}
    >
      <Provider store={store}>
        <Header />
        <Body />
      </Provider>
    </div>
  );
};

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <RenderLayout />,
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
          path: "/movies",
          element: <Movies />,
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
          path: "/live",
          element: <Live />,
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
