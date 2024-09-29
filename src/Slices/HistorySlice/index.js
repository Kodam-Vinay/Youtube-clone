import { createSlice } from "@reduxjs/toolkit";

const HistorySlice = createSlice({
  name: "history",
  initialState: {
    history: [],
  },
  reducers: {
    storeHistory: (state, action) => {
      state.history = [...state.history, action.payload];
    },
    removeFromHistory: (state, action) => {
      state.history = state.history.filter(
        (item) => item?.id !== action.payload
      );
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export const { storeHistory, removeFromHistory, clearHistory } =
  HistorySlice.actions;
export default HistorySlice.reducer;
