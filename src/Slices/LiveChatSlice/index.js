import { createSlice } from "@reduxjs/toolkit";
import { OFF_SET } from "../../config/constants";

const LiveChatSlice = createSlice({
  name: "liveChat",
  initialState: {
    messages: [],
  },
  reducers: {
    addToLiveChat: (state, action) => {
      state.messages.splice(OFF_SET, 1);
      state.messages.unshift(action.payload);
    },
    clearLiveChat: (state) => {
      state.messages = [];
    },
  },
});
export const { addToLiveChat, clearLiveChat } = LiveChatSlice.actions;
export default LiveChatSlice.reducer;
