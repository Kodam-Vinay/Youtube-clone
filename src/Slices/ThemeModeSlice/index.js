import { createSlice } from "@reduxjs/toolkit";

const ThemeModeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    toggleTheme: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});
export const { toggleTheme } = ThemeModeSlice.actions;
export default ThemeModeSlice.reducer;
