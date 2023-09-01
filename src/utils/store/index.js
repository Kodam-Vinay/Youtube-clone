import { configureStore } from "@reduxjs/toolkit";
import HamburgerSlice from "../../Slices/HamburgerSlice";

const store = configureStore({
  reducer: {
    hamburger: HamburgerSlice,
  },
});

export default store;
