import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CLOUDINARY_IMAGE_URL } from "../../config/constants";

const ErrorPage = () => {
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  return (
    <div
      className={`flex flex-col space-y-3 items-center ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <img
        src={CLOUDINARY_IMAGE_URL + "error-image"}
        alt="error"
        className="w-64"
      />
      <h1 className="text-xl font-bold text-center">
        Sorry, The API Key May got Expired, Please Try Again After{" "}
        <span className="text-2xl">24 Hrs...</span>
      </h1>
      <Link to="/">
        <button className="border px-2 py-1 rounded-md">Go Back</button>
      </Link>
    </div>
  );
};
export default ErrorPage;
