import { Link } from "react-router-dom";
import WentWrong from "../../utils/svgs/WentWrong";
import { useSelector } from "react-redux";

const SomethingWentWrong = () => {
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  return (
    <div className="flex flex-col items-center w-full space-y-2">
      <WentWrong />
      <div
        className={`flex flex-col space-y-3 items-center w-full h-full ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        <h1 className="font-bold text-xl mt-0">Something Went Wrong !</h1>
        <Link to="/">
          <button className="border px-2 py-1 rounded-md">Home</button>
        </Link>
      </div>
    </div>
  );
};
export default SomethingWentWrong;
