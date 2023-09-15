import { useDispatch, useSelector } from "react-redux";
import ShowComment from "../ShowComment";
import { v4 as uuidV4 } from "uuid";
import { AiOutlineSend } from "react-icons/ai";
import { addComment } from "../../Slices/CommentSlice";
import { useState } from "react";
import { randomNameGenerator } from "../../helper";
import { randomNames } from "../../utils/mock";

const CommentSection = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  const commentsDetails = useSelector((store) => store.comment.comments);
  const [comment, setComment] = useState("");
  return (
    <div
      className={`${
        isDarkMode ? "text-white" : "text-black"
      } px-2 mt-6 xs:mt-0 lg:mt-10`}
    >
      <form
        className="h-10 flex items-center"
        onSubmit={(e) => {
          if (comment === "") return null;
          e.preventDefault();
          dispatch(
            addComment({
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
              ? "bg-black border-b-2 outline-none focus:border-b-4"
              : "borde bg-white border-b-2 outline-none focus:border-b-4"
          }`}
          placeholder="Enter A Comment"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />

        <button
          type="submit"
          className="hover:text-slate-200"
          disabled={comment === ""}
        >
          <AiOutlineSend />
        </button>
      </form>
      <h1 className="font-bold text-xl ">Comments</h1>
      <div className="space-y-2">
        {commentsDetails.length > 0 ? (
          commentsDetails.map((each) => (
            <ShowComment commentList={each} key={each?.id} />
          ))
        ) : (
          <div className="flex items-center justify-center m-auto">
            <h1>No Comments Found....</h1>
          </div>
        )}
      </div>
    </div>
  );
};
export default CommentSection;
