import { configureStore } from "@reduxjs/toolkit";
import HamburgerSlice from "../../Slices/HamburgerSlice";
import SearchSuggestionSlice from "../../Slices/SearchSuggestionSlice";

const store = configureStore({
  reducer: {
    hamburger: HamburgerSlice,
    suggestions: SearchSuggestionSlice,
  },
});

export default store;
