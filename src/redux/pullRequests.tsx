import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  labels: [],
  errorMessage: "",
  prs: [],
};

export const getPullRequests = (
  status: string,
  sortingMethod: string,
  sortingOrder: number,
  label: string
) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(prActions.setPullRequests({ ...initialState, isLoading: true }));
      const response = await axios.get(
        `http://localhost:5000/prs/?prStatus=${status}&labels=[]${label}&sortingOrder=${sortingOrder}&sortingMethod=${sortingMethod}`
      );
      console.log(response);
      dispatch(
        prActions.setPullRequests({
          ...initialState,
          isLoading: false,
          prs: response.data.prs,
          labels: response.data.labels,
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
