import { AiFillDislike, AiFillLike, AiOutlineHome } from "react-icons/ai";
import { BiListPlus } from "react-icons/bi";
import { BsController, BsMusicNote } from "react-icons/bs";
import { CiStreamOn } from "react-icons/ci";
import { GiNewspaper } from "react-icons/gi";
import { MdSportsCricket } from "react-icons/md";

export const POPULAR_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
export const CHANNEL_DETAILS_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
export const DUMMY_IMG_URL =
  "https://www.ihna.edu.au/blog/wp-content/uploads/2022/10/user-dummy.png";
export const YOUTUBE_SEARCH_SUGGESTIONS_API =
  "https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=";
export const YOUTUBE_VIDEO_DETAILS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
export const SEARCH_RESULTS_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=vinay&maxResults=20&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
export const YOUTUBE_VIDEO_PLAYER_URL =
  "corsproxy.io?/https://www.youtube.com/embed/";
export const YOUTUBE_VIDEO_DETAILS_WITH_ONE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
export const CLOUDINARY_IMAGE_URL =
  "https://res.cloudinary.com/dwgpba5n2/image/upload/v1694021773/videoStreaming/";

export const OFF_SET = 50;

export const catergoriesList = [
  {
    id: 1,
    value: "0",
    name: "All",
  },
  {
    id: 2,
    value: "20",
    name: "Games",
  },
  {
    id: 3,
    value: "23",
    name: "Comedy",
  },
  {
    id: 4,
    value: "10",
    name: "Music",
  },
  {
    id: 5,
    value: "28",
    name: "Science & Technology",
  },
  {
    id: 6,
    value: "22",
    name: "People & Blogs",
  },
  {
    id: 7,
    value: "17",
    name: "Sports",
  },
  {
    id: 8,
    value: "24",
    name: "Entertainment",
  },
];

export const API_STATUS_LIST = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
  nodata: "NODATA",
};

export const sideBarFirstList = [
  {
    id: "home",
    value: "Home",
    logo: <AiOutlineHome />,
    url: "/",
  },
  {
    id: "music",
    value: "Music",
    logo: <BsMusicNote />,
    url: "/music",
  },
  {
    id: "gaming",
    value: "Gaming",
    logo: <BsController />,
    url: "/gaming",
  },
  {
    id: "live",
    value: "Live",
    logo: <CiStreamOn />,
    url: "/live",
  },
  {
    id: "sports",
    value: "Sports",
    logo: <MdSportsCricket />,
    url: "/sports",
  },
  {
    id: "news",
    value: "News",
    logo: <GiNewspaper />,
    url: "/news",
  },
  {
    id: "liked",
    value: "Liked",
    logo: <AiFillLike />,
    url: "/liked",
  },
  {
    id: "disliked",
    value: "DisLiked",
    logo: <AiFillDislike />,
    url: "/disliked",
  },
  {
    id: "saved",
    value: "Saved",
    logo: <BiListPlus />,
    url: "/saved",
  },
];

export const sideBarSecondList = [
  {
    id: "home",
    logo: <AiOutlineHome />,
    url: "/",
  },
  {
    id: "music",
    logo: <BsMusicNote />,
    url: "/music",
  },
  {
    id: "gaming",
    logo: <BsController />,
    url: "/gaming",
  },
  {
    id: "live",
    logo: <CiStreamOn />,
    url: "/live",
  },
  {
    id: "sports",
    logo: <MdSportsCricket />,
    url: "/sports",
  },
  {
    id: "news",
    logo: <GiNewspaper />,
    url: "/news",
  },
  {
    id: "liked",
    logo: <AiFillLike />,
    url: "/liked",
  },
  {
    id: "disliked",
    logo: <AiFillDislike />,
    url: "/disliked",
  },
  {
    id: "saved",
    logo: <BiListPlus />,
    url: "/saved",
  },
];
