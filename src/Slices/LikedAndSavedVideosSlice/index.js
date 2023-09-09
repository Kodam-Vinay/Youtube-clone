import { createSlice } from "@reduxjs/toolkit";

const LikedAndSavedVideosSlice = createSlice({
  name: "storeVideo",
  initialState: {
    likedVideos: [],
    unlikedVideos: [],
    savedVideos: [],
  },
  reducers: {
    addToLikedVideos: (state, action) => {
      const result = state.likedVideos.find(
        (each) => each?.id === action.payload.id
      );
      if (result === undefined) {
        const isAlreadyExists = state.unlikedVideos.find(
          (each) => each?.id === action.payload?.id
        );
        if (isAlreadyExists) {
          const index = state.unlikedVideos.indexOf(isAlreadyExists);
          state.unlikedVideos.splice(index, 1);
          state.likedVideos.push(action.payload);
        } else {
          state.likedVideos.push(action.payload);
        }
      } else {
        const index = state.likedVideos.indexOf(result);
        state.likedVideos.splice(index, 1);
      }
    },
    addToUnlikedVideos: (state, action) => {
      const result = state.unlikedVideos.find(
        (each) => each?.id === action.payload.id
      );
      if (result === undefined) {
        const isAlreadyExists = state.likedVideos.find(
          (each) => each?.id === action.payload?.id
        );
        if (isAlreadyExists) {
          const index = state.likedVideos.indexOf(isAlreadyExists);
          state.likedVideos.splice(index, 1);
          state.unlikedVideos.push(action.payload);
        } else {
          state.unlikedVideos.push(action.payload);
        }
      } else {
        const index = state.unlikedVideos.indexOf(result);
        state.unlikedVideos.splice(index, 1);
      }
    },
    addToSavedVideos: (state, action) => {
      const result = state.savedVideos.find(
        (each) => each?.id === action.payload.id
      );
      if (result !== undefined) {
        //remove
        const index = state.savedVideos.indexOf(result);
        state.savedVideos.splice(index, 1);
      } else {
        state.savedVideos.push(action.payload);
      }
    },
  },
});
export const { addToLikedVideos, addToUnlikedVideos, addToSavedVideos } =
  LikedAndSavedVideosSlice.actions;
export default LikedAndSavedVideosSlice.reducer;
