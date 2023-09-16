import VideoCard from "../VideoCard";
import { v4 as uuidV4 } from "uuid";

const LiveComponent = ({ onlyLiveVideos }) => {
  return (
    <div
      className={`p-4 mxs:p-2 flex flex-col mxs:flex-row mxs:flex-wrap overflow-y-auto h-[96%]`}
    >
      {onlyLiveVideos.length > 0 &&
        onlyLiveVideos?.map((each) => (
          <VideoCard key={uuidV4()} videosList={each} />
        ))}
    </div>
  );
};
export default LiveComponent;
