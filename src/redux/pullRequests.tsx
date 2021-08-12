import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  data: [],
};

export const getPullRequests = (
  status: string,
  sortingMethod: string,
  sortingOrder: number
) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(prActions.setPullRequests({ ...initialState, isLoading: true }));
      const response = await axios.get(
        `http://localhost:5000/prs/?prStatus=${status}&labels=[]&sortingOrder=${sortingOrder}&sortingMethod=${sortingMethod}`
      );
      dispatch(
        prActions.setPullRequests({
          ...initialState,
          isLoading: false,
          data: response.data,
        })
      );
    } catch (err) {
      dispatch(
        prActions.setPullRequests({
          ...initialState,
          isLoading: false,
          isError: true,
          errorMessage: "There was a problem connecting to the server.",
        })
      );
    }
  };
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
