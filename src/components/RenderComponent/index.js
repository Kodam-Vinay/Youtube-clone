import VideoCard from "../VideoCard";

const RenderComponent = ({ fullDetails }) => {
  return (
    <div
      className={`p-4 mxs:p-2 flex flex-col mxs:flex-row mxs:flex-wrap overflow-y-auto h-[96%]`}
    >
      {fullDetails.length > 0 &&
        fullDetails?.map((each) => (
          <VideoCard key={each?.id} videosList={each} />
        ))}
    </div>
  );
};
export default RenderComponent;
