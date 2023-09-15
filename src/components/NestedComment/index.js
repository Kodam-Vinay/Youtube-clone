import { DUMMY_IMG_URL } from "../../config/constants";

const NestedComment = (props) => {
  const { name, message } = props.commentList;
  return (
    <div className="flex mt-1">
      <img
        src={DUMMY_IMG_URL}
        className="h-6 w-6 mr-2 rounded-full"
        alt="comment-logo"
      />
      <div className="flex flex-col">
        <h1 className="font-bold text-sm">{name}</h1>
        <div className="felx flex-row items-center">
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};
export default NestedComment;
