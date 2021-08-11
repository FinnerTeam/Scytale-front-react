import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPullRequests = () => {
  return async (dispatch: any) => {
    const response = await axios.get(
      "http://localhost:5000/pullRequest/?prStatus=all&labels=[]&sortingOrder=desc&sortingMethod=_id"
    );
    console.log(response.data);
    dispatch(prActions.setPullRequests(response.data));
  };
};

const pullReqSlice = createSlice({
  name: "pullRequests",
  initialState: [],
  reducers: {
    // addPullRequest(state, action) {
    //   const newArray = [action.payload, ...state];
    //   return newArray;
    // },
    setPullRequests(state, action) {
      const newArray = action.payload;
      return newArray;
    },
  },
});
export const prActions = pullReqSlice.actions;
export default pullReqSlice;
