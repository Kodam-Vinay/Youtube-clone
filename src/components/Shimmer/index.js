import { useSelector } from "react-redux";
import { v4 as uuidV4 } from "uuid";

const Shimmer = () => {
  const isMenuOpen = useSelector((store) => store.hamburger.isMenuOpen);
  return (
    <div className="p-4 mxs:p-2 flex flex-col mxs:flex-row mxs:flex-wrap mxs:justify-center overflow-y-auto h-[96%] mb-10">
      {Array(20)
        .fill("")
        .map(() => (
          <div
            key={uuidV4()}
            className={`m-2 w-full mb-4 sm:mb-2  ${
              isMenuOpen ? "mxs:w-60" : "mxs:w-64"
            }`}
          >
            <div className="rounded-lg w-full shadow-lg h-48 mxs:h-40 bg-gray-200"></div>
            <div className="mt-3 flex">
              <div className="h-8 w-8 rounded-full mr-2 bg-gray-200"></div>

              <div className="space-y-2">
                <p className="bg-gray-200 h-5 w-52 rounded-sm"></p>
                <p className="h-2 bg-gray-200 w-40"></p>
                <div className="flex items-center space-x-2 h-3 bg-gray-200">
                  <p className="bg-gray-200"></p>
                  <p className=" bg-gray-200"></p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;
