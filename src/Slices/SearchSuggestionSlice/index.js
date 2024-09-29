import { createSlice } from "@reduxjs/toolkit";

const SearchSuggestionSlice = createSlice({
  name: "suggestions",
  initialState: {
    cacheData: {},
    isSearchClicked: false,
    searchInput: "",
    searchQuery: "",
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
    storeSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});
export const {
  handleCacheData,
  makeSearchClicked,
  storeSearchInput,
  storeSearchQuery,
} = SearchSuggestionSlice.actions;
export default SearchSuggestionSlice.reducer;
