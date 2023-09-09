import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CLOUDINARY_IMAGE_URL } from "../../config/constants";

const InvalidRoute = () => {
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  return (
    <div
      className={`flex flex-col space-y-3 items-center w-full h-full ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <img
        src={CLOUDINARY_IMAGE_URL + "error-image"}
        alt="error"
        className="w-64"
      />
      <h1 className="text-2xl font-bold text-center">Invalid Url</h1>
      <Link to="/">
        <button className="border px-2 py-1 rounded-md">Home</button>
      </Link>
    </div>
  );
};
export default InvalidRoute;
