import { createSlice } from "@reduxjs/toolkit";

const SearchSuggestionSlice = createSlice({
  name: "suggestions",
  initialState: {
    cacheData: {},
    isSearchClicked: false,
    searchInput: "",
  },
  reducers: {
    handleCacheData: (state, action) => {
      state.cacheData = { ...state.cacheData, ...action.payload };
    },
    makeSearchClicked: (state, action) => {
      state.isSearchClicked = true;
      state.searchInput = action.payload;
    },
  },
});
export const { handleCacheData, makeSearchClicked } =
  SearchSuggestionSlice.actions;
export default SearchSuggestionSlice.reducer;
