import { configureStore } from "@reduxjs/toolkit";
import HamburgerSlice from "../../Slices/HamburgerSlice";
import SearchSuggestionSlice from "../../Slices/SearchSuggestionSlice";
import ChannelDetailsSlice from "../../Slices/ChannelDetailsSlice";
import ThemeModeSlice from "../../Slices/ThemeModeSlice";
import LikedAndSavedVideosSlice from "../../Slices/LikedAndSavedVideosSlice";
import CommentSlice from "../../Slices/CommentSlice";
import LiveChatSlice from "../../Slices/LiveChatSlice";

const store = configureStore({
  reducer: {
    hamburger: HamburgerSlice,
    suggestions: SearchSuggestionSlice,
    channelDetails: ChannelDetailsSlice,
    theme: ThemeModeSlice,
    storeVideo: LikedAndSavedVideosSlice,
    comment: CommentSlice,
    liveChat: LiveChatSlice,
  },
});

export default store;
