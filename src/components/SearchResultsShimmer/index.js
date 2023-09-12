import { v4 as uuidV4 } from "uuid";

const SearchResultsShimmer = () => {
  return (
    <div className="flex flex-col space-y-4">
      {Array(10)
        .fill("")
        .map(() => (
          <div className="flex" key={uuidV4()}>
            <div
              className={
                "mxs:h-28 rounded-lg w-24 h-20 xs:w-32 mxs:w-40 sm:w-44 lg:w-72 lg:h-40 shadow-lg mr-2 lg:mr-4 bg-gray-200"
              }
            ></div>
            <div className="space-y-2 mt-2">
              <p className="mb-1 h-2 w-40 lg:w-96 bg-gray-200 rounded-md"></p>
              <div className="flex items-center space-x-1 bg-gray-200 h-2 w-32 lg:w-80 rounded-md">
                <p className="text-sm"></p>
                <p className=" text-sm"></p>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full mr-2 bg-gray-200"></div>
                <p className="text-sm h-4 bg-gray-200 w-20 lg:w-48 rounded-md"></p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default SearchResultsShimmer;
