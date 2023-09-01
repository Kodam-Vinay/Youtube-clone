import { createSlice } from "@reduxjs/toolkit";

const HamburgerSlice = createSlice({
  name: "hamburger",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = HamburgerSlice.actions;
export default HamburgerSlice.reducer;
