import { v4 as uuidV4 } from "uuid";
const FilterShimmer = () => {
  return (
    <div className="w-full p-2 space-x-3 flex overflow-x-scroll scroll-smooth hide-scroll">
      {Array(10)
        .fill("")
        .map((each) => (
          <div
            key={uuidV4()}
            className="w-28 h-10 rounded-md bg-gray-200 px-12"
          ></div>
        ))}
    </div>
  );
};
export default FilterShimmer;
