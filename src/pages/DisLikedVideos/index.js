import { useSelector } from "react-redux";
import ShowSearchResults from "../../components/ShowSearchResults";
import NoVideos from "../../components/NoVideos";

const DisLikedVideos = () => {
  const unlikedVideos = useSelector((store) => store.storeVideo.unlikedVideos);
  document.title = "DisLiked Videos";
  if (unlikedVideos.length > 0) {
    return (
      <div className="p-4 mxs:p-2 flex flex-col overflow-y-auto h-[96%]">
        {unlikedVideos.length > 0 &&
          unlikedVideos?.map((each) => (
            <ShowSearchResults key={each?.id} searchResults={each} />
          ))}
      </div>
    );
  } else {
    return <NoVideos />;
  }
};
export default DisLikedVideos;
