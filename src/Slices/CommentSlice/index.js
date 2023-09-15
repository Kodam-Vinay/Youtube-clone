import { createSlice } from "@reduxjs/toolkit";

const CommentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: [],
  },
  reducers: {
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
    addNestedComment: (state, action) => {
      const findItem = state.comments.find(
        (each) => each?.id === action.payload?.parentId
      );
      if (findItem !== undefined) {
        if (findItem?.nestedComments) {
          const nestedComments = {
            ...findItem,
            nestedComments: [...findItem?.nestedComments, action.payload],
          };
          state.comments.splice(state.comments.indexOf(findItem), 1);
          state.comments.push(nestedComments);
        } else {
          const element = { ...findItem, nestedComments: [action.payload] };
          state.comments.splice(state.comments.indexOf(findItem), 1);
          state.comments.push(element);
        }
      }
    },
  },
});
export const { addComment, addNestedComment } = CommentSlice.actions;
export default CommentSlice.reducer;
