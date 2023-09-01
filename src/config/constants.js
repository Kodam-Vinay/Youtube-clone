export const POPULAR_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
export const CHANNEL_DETAILS_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCjJKg01HAP01xCLVhDmnLhw&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
export const DUMMY_IMG_URL =
  "https://www.ihna.edu.au/blog/wp-content/uploads/2022/10/user-dummy.png";
