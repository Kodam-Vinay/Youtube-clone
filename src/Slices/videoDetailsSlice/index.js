import { createSlice } from "@reduxjs/toolkit";

const videoDetailsSlice = createSlice({
  name: "videoDetails",
  initialState: {
    videoDetails: {},
  },
  reducers: {
    storeVideoDetails: () => {},
  },
});
export default videoDetailsSlice.reducer;
