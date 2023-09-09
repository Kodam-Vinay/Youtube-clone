import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NoVideosFound from "../../utils/svgs/NoVideosFound";

const NoVideos = () => {
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  return (
    <div
      className={`p-4 mxs:p-2 flex flex-col items-center w-full h-full ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <NoVideosFound className="w-64" />
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-xl font-bold">No Videos Found</h1>
        <Link to="/">
          <button
            className={`border px-2 py-1 rounded-md ${
              isDarkMode ? "hover:bg-slate-900" : "hover:bg-gray-100"
            } `}
          >
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};
export default NoVideos;
