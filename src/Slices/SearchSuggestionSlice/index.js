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
      state.isSearchClicked = action.payload;
    },
    storeSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});
export const { handleCacheData, makeSearchClicked, storeSearchInput } =
  SearchSuggestionSlice.actions;
export default SearchSuggestionSlice.reducer;
