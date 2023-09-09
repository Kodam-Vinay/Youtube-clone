import { configureStore } from "@reduxjs/toolkit";
import HamburgerSlice from "../../Slices/HamburgerSlice";
import SearchSuggestionSlice from "../../Slices/SearchSuggestionSlice";
import ChannelDetailsSlice from "../../Slices/ChannelDetailsSlice";
import ThemeModeSlice from "../../Slices/ThemeModeSlice";
import LikedAndSavedVideosSlice from "../../Slices/LikedAndSavedVideosSlice";

const store = configureStore({
  reducer: {
    hamburger: HamburgerSlice,
    suggestions: SearchSuggestionSlice,
    channelDetails: ChannelDetailsSlice,
    theme: ThemeModeSlice,
    storeVideo: LikedAndSavedVideosSlice,
  },
});

export default store;
