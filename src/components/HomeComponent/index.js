import { useContext } from "react";
import Filters from "../Filters";
import NoVideos from "../NoVideos";
import VideoCard from "../VideoCard";
import FilterContext from "../../utils/FilterContext";
import { filterData } from "../../helper";

const HomeComponent = ({ fullDetails }) => {
  const { activeFilterButton } = useContext(FilterContext);
  const List = filterData(fullDetails, activeFilterButton);
  return (
    <div className="w-full h-full">
      <Filters />
      <div
        className={`p-4 mxs:p-2 flex flex-col mxs:flex-row mxs:flex-wrap overflow-y-auto h-[96%]`}
      >
        {activeFilterButton === "0" && fullDetails.length > 0 ? (
          fullDetails?.map((each) => (
            <VideoCard key={each?.id} videosList={each} />
          ))
        ) : List.length > 0 ? (
          List?.map((each) => <VideoCard key={each?.id} videosList={each} />)
        ) : (
          <NoVideos />
        )}
      </div>
    </div>
  );
};
export default HomeComponent;
