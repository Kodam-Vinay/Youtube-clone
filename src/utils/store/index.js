import { configureStore } from "@reduxjs/toolkit";
import HamburgerSlice from "../../Slices/HamburgerSlice";
import SearchSuggestionSlice from "../../Slices/SearchSuggestionSlice";
import ChannelDetailsSlice from "../../Slices/ChannelDetailsSlice";

const store = configureStore({
  reducer: {
    hamburger: HamburgerSlice,
    suggestions: SearchSuggestionSlice,
    channelDetails: ChannelDetailsSlice,
  },
});

export default store;
