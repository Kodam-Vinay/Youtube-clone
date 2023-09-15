export const POPULAR_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
export const CHANNEL_DETAILS_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
export const DUMMY_IMG_URL =
  "https://www.ihna.edu.au/blog/wp-content/uploads/2022/10/user-dummy.png";
export const YOUTUBE_SEARCH_SUGGESTIONS_API =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_VIDEO_DETAILS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
export const SEARCH_RESULTS_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=vinay&maxResults=20&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
export const YOUTUBE_VIDEO_PLAYER_URL =
  "crossproxy.io?/https://www.youtube.com/embed/";
export const YOUTUBE_VIDEO_DETAILS_WITH_ONE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
export const CLOUDINARY_IMAGE_URL =
  "https://res.cloudinary.com/dwgpba5n2/image/upload/v1694021773/videoStreaming/";

export const OFF_SET = 50;
