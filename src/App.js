import { Provider } from "react-redux";

import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Video from "./pages/Video";
import Body from "./components/Body";
import SearchResults from "./pages/SearchResults";

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
          path: "/watch",
          element: <Video />,
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
