import { createSlice } from "@reduxjs/toolkit";

const SearchSuggestionSlice = createSlice({
  name: "suggestions",
  initialState: {
    cacheData: {},
  },
  reducers: {
    handleCacheData: (state, action) => {
      state.cacheData = { ...state.cacheData, ...action.payload };
    },
  },
});
export const { handleCacheData } = SearchSuggestionSlice.actions;
export default SearchSuggestionSlice.reducer;
