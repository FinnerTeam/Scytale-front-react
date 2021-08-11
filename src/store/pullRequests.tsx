import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPullRequests = (...args: any) => {
  return async (dispatch: any) => {
    const [status, sortingMethod, sortingOrder] = args;
    console.log(status, sortingMethod, sortingOrder);
    try {
      const response = await axios.get(
        `http://localhost:5000/prs/?prStatus=${status}&labels=[]&sortingOrder=${sortingOrder}&sortingMethod=${sortingMethod}`
      );
      console.log(response);
      dispatch(prActions.setPullRequests(response.data));
    } catch (err) {
      console.log(err.message, err.errors);
    }
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
