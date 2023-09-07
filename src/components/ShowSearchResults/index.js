import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import useNumericToAlpha from "../../utils/useNumericToAlpha";
import useDateToDistanceFormat from "../../utils/useDateToDistanceFormat";
import { makeSearchClicked } from "../../Slices/SearchSuggestionSlice";
import { useDispatch, useSelector } from "react-redux";

const ShowSearchResults = ({ searchResults }) => {
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);
  const dispatch = useDispatch();
  console.log(searchResults);
  // const { snippet, id } = searchResults;

  // const { videoId } = id;
  // const date = useDateToDistanceFormat(snippet.publishedAt);
  const onClickVideo = () => {
    dispatch(makeSearchClicked(false));
  };
  // const count = useNumericToAlpha();
  const count = 10;
  const SuccessView = () => {
    return (
      // <Link to={`/watch?v=${videoId}`} onClick={onClickVideo}>
      //   <div className="flex">
      //     <img
      //       src={snippet?.thumbnails?.medium?.url}
      //       alt="youtbeVideoLogo"
      //       className="rounded-lg w-24 h-16 xs:w-32 xs:h-20 mxs:w-40 mxs:h-28 sm:w-44 lg:w-72 lg:h-40 shadow-lg mr-2 lg:mr-4"
      //     />
      //     <div className={`${isDarkMode ? "text-white" : "text-black"}`}>
      //       <p className="font-bold text-sm mb-1">
      //         {snippet?.title.length > 35
      //           ? snippet?.title.slice(0, 45) + "..."
      //           : snippet?.title}
      //       </p>
      //       <p className="text-sm">{snippet?.channelTitle}</p>
      //       <div className="flex items-center space-x-2">
      //         <p className="text-sm">{count}</p>
      //         <BsDot />
      //         <p className=" text-sm">{date}</p>
      //       </div>
      //     </div>
      //   </div>
      // </Link>
      <h1>hello</h1>
    );
  };

  return <>{SuccessView()}</>;
};
export default ShowSearchResults;
