import { DUMMY_IMG_URL } from "../../config/constants";

const LiveChatMessage = (props) => {
  const { name, message } = props.liveMessage;
  return (
    <div className="flex mt-1 mb-2">
      <img
        src={DUMMY_IMG_URL}
        className="h-6 w-6 mr-2 rounded-full"
        alt="comment-logo"
      />
      <div className="flex space-x-2">
        <h1 className="font-bold text-sm">{name}</h1>
        <div className="felx flex-row items-center">
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};
export default LiveChatMessage;
