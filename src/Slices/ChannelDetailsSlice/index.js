import { createSlice } from "@reduxjs/toolkit";
const ChannelDetailsSlice = createSlice({
  name: "channelDetails",
  initialState: {
    channels: {},
    channelsInfo: [],
  },
  reducers: {
    storeChannelDetails: (state, action) => {},
    storeChannelId: (state, action) => {
      state.channels = action.payload;
    },
  },
});
export const { storeChannelDetails, storeChannelId } =
  ChannelDetailsSlice.actions;
export default ChannelDetailsSlice.reducer;
