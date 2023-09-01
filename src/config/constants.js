export const YOUTUBE_API_KEY = "AIzaSyChsSnVIMGyafrtAtSwaGpHNEgyNBu3g50";
export const POPULAR_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=${YOUTUBE_API_KEY}`;
export const CHANNEL_DETAILS_API = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCjJKg01HAP01xCLVhDmnLhw&key=${YOUTUBE_API_KEY}`;
