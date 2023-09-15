import { useState } from "react";
import { DUMMY_IMG_URL } from "../../config/constants";
import { AiOutlineSend, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import { addNestedComment } from "../../Slices/CommentSlice";
import NestedComment from "../NestedComment";
import { randomNameGenerator } from "../../helper";
import { randomNames } from "../../utils/mock";

const ShowComment = (props) => {
  const { id, name, message } = props.commentList;
  const [showInput, setShowInput] = useState(false);
  const [comment, setComment] = useState("");
  const commentsDetails = useSelector((store) => store?.comment?.comments);
  const nestedComments = commentsDetails?.filter((each) => each?.id === id);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  return (
    <div className="flex flex-col">
      <div className="flex">
        <img
          src={DUMMY_IMG_URL}
          className="h-6 w-6 mr-2 rounded-full"
          alt="comment-logo"
        />
        <div className="flex flex-col">
          <h1 className="font-bold text-sm">{name}</h1>
          <div className="felx flex-row items-center">
            <p className="text-sm">{message}</p>
            {showInput ? (
              <form
                className="h-10 flex items-center"
                onSubmit={(e) => {
                  if (comment === "") return null;
                  e.preventDefault();
                  setShowInput(false);
                  dispatch(
                    addNestedComment({
                      parentId: id,
                      id: uuidV4(),
                      name: randomNameGenerator(randomNames),
                      message: comment,
                    })
                  );
                  setComment("");
                }}
              >
                <input
                  type="text"
                  className={`${
                    isDarkMode
                      ? "bg-black border-b-2 outline-none"
                      : "borde bg-white border-b-2 outline-none"
                  }`}
                  placeholder="Reply to this comment"
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                />
                <div className="flex flex-col">
                  <button
                    type="button"
                    className="hover:text-slate-200"
                    onClick={() => setShowInput(false)}
                  >
                    <AiOutlineClose />
                  </button>
                  <button
                    type="submit"
                    className="hover:text-slate-200"
                    disabled={comment === ""}
                  >
                    <AiOutlineSend />
                  </button>
                </div>
              </form>
            ) : (
              <button
                type="button"
                className="text-xs border w-fit rounded-full px-2 py-1"
                onClick={() => setShowInput(true)}
              >
                Reply
              </button>
            )}
            <div className="ml-2">
              {nestedComments?.map((each) => {
                return each?.nestedComments?.map((eachComment) => (
                  <NestedComment key={uuidV4()} commentList={eachComment} />
                ));
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowComment;
