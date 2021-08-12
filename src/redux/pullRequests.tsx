import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPullRequests = (
  status: string,
  sortingMethod: string,
  sortingOrder: number
) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/prs/?prStatus=${status}&labels=[]&sortingOrder=${sortingOrder}&sortingMethod=${sortingMethod}`
      );
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
    setPullRequests(state, action) {
      const newArray = action.payload;
      return newArray;
    },
  },
});
export const prActions = pullReqSlice.actions;
export default pullReqSlice;
