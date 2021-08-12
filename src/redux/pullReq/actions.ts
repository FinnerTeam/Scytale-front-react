import axios from "axios";
import { initialState, prActions } from "./slice";
export const getPullRequests = ({
  status = "all",
  sortingMethod = "all",
  sortingOrder = 1,
  label = "all",
  page = 1,
}: {
  status: string;
  sortingMethod: string;
  sortingOrder: number;
  label: string;
  page: number;
}) => {
  return async (dispatch: AppDispatch) => {
    console.log(status);
    try {
      dispatch(prActions.setPullRequests({ ...initialState, isLoading: true }));
      const response = await axios.get(
        `http://localhost:5000/prs/?prStatus=${status}&labels=${label}&sortingOrder=${sortingOrder}&sortingMethod=${sortingMethod}&page=${page}`
      );
      const data = response.data;
      dispatch(
        prActions.setPullRequests({
          ...initialState,
          isLoading: false,
          prs: data.prs,
          labels: data.labels,
          currentPage: data.currentPage,
          hasNextPage: data.hasNextPage,
          hasPreviousPage: data.hasPreviousPage,
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
