import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isLoading: false,
  isError: false,
  labels: [],
  errorMessage: "",
  prs: [],
  currentPage: 1,
  hasNextPage: false,
  hasPreviousPage: false,
};

const pullReqSlice = createSlice({
  name: "pullRequests",
  initialState,
  reducers: {
    setPullRequests(state, action) {
      const newArray = action.payload;
      return newArray;
    },
  },
});
export const prActions = pullReqSlice.actions;
export default pullReqSlice;
