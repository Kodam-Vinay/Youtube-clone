import { configureStore } from "@reduxjs/toolkit";
import HamburgerSlice from "../../Slices/HamburgerSlice";
import SearchSuggestionSlice from "../../Slices/SearchSuggestionSlice";
import ThemeModeSlice from "../../Slices/ThemeModeSlice";
import LikedAndSavedVideosSlice from "../../Slices/LikedAndSavedVideosSlice";
import CommentSlice from "../../Slices/CommentSlice";
import LiveChatSlice from "../../Slices/LiveChatSlice";
import HistorySlice from "../../Slices/HistorySlice";

const store = configureStore({
  reducer: {
    hamburger: HamburgerSlice,
    suggestions: SearchSuggestionSlice,
    theme: ThemeModeSlice,
    storeVideo: LikedAndSavedVideosSlice,
    comment: CommentSlice,
    liveChat: LiveChatSlice,
    history: HistorySlice,
  },
  devTools: false,
});

export default store;
