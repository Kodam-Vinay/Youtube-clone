import { useSelector } from "react-redux";
import ShowSearchResults from "../../components/ShowSearchResults";
import NoVideos from "../../components/NoVideos";

const LikedVideos = () => {
  const likedVideos = useSelector((store) => store.storeVideo.likedVideos);
  document.title = "Liked Videos";
  if (likedVideos.length > 0) {
    return (
      <div className="p-4 mxs:p-2 space-y-2 flex flex-col overflow-y-auto h-[96%]">
        {likedVideos.length > 0 &&
          likedVideos?.map((each) => (
            <ShowSearchResults key={each?.id} searchResults={each} />
          ))}
      </div>
    );
  } else {
    return <NoVideos />;
  }
};
export default LikedVideos;
