import { useSelector } from "react-redux";
import ShowSearchResults from "../../components/ShowSearchResults";
import NoVideos from "../../components/NoVideos";

const SavedVideos = () => {
  const savedVideos = useSelector((store) => store.storeVideo.savedVideos);
  document.title = "Saved Videos";
  if (savedVideos.length > 0) {
    return (
      <div className="p-4 mxs:p-2 flex flex-col overflow-y-auto h-[96%]">
        {savedVideos.length > 0 &&
          savedVideos?.map((each) => (
            <ShowSearchResults key={each?.id} searchResults={each} />
          ))}
      </div>
    );
  } else {
    return <NoVideos />;
  }
};
export default SavedVideos;
