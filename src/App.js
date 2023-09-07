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
          path: "/search",
          element: <SearchResults />,
        },
      ],
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
