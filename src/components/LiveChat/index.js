import { useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToLiveChat } from "../../Slices/LiveChatSlice";
import { randomNameGenerator } from "../../helper";
import { randomMessages, randomNames } from "../../utils/mock";
import LiveChatMessage from "../LiveChatMessage";
import { v4 as uuidV4 } from "uuid";

const LiveChat = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  const liveChatMessages = useSelector((store) => store.liveChat.messages);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const timerId = setInterval(() => {
      dispatch(
        addToLiveChat({
          name: randomNameGenerator(randomNames),
          message: randomNameGenerator(randomMessages),
        })
      );
    }, 2000);
    return () => clearInterval(timerId);
  }, []);
  return (
    <div
      className={`w-full h-80 border rounded-lg flex flex-col justify-between ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      <div>
        <h1
          className={`rounded-tl-lg rounded-tr-lg p-2 font-bold ${
            isDarkMode ? "text-white" : "text-black"
          }
      `}
        >
          Live Chat
        </h1>
        <div className="px-2 overflow-y-auto h-60 flex flex-col-reverse">
          {liveChatMessages.map((each) => (
            <LiveChatMessage key={uuidV4()} liveMessage={each} />
          ))}
        </div>
      </div>
      <form
        className="h-10 px-2 flex items-center w-full"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addToLiveChat({
              name: "Me",
              message,
            })
          );
          setMessage("");
        }}
      >
        <input
          type="text"
          className={`${
            isDarkMode
              ? "bg-black border-b-2 outline-none focus:border-b-blue-300"
              : "bg-white border-b-2 outline-none focus:border-b-blue-300"
          } w-11/12 px-2`}
          placeholder="Enter A Message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <button
          type="submit"
          className="hover:text-slate-200 w-1/12"
          disabled={message === ""}
        >
          <AiOutlineSend />
        </button>
      </form>
    </div>
  );
};
export default LiveChat;
