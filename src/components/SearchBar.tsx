import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPullRequests } from "../store/pullRequests";

const SearchBar = () => {
  const dispatch = useDispatch();
  const statuses = ["All", "Draft", "Open", "Closed"];
  const sortMethods = ["Title", "Creation"];
  const [status, setStatus] = useState("All");
  const [sortingMethod, setSortingMethod] = useState("Creation");
  const [sortingOrder, setOrder] = useState<1 | -1>(1);

  const orderHandler = () => {
    if (sortingOrder === 1) {
      return setOrder(-1);
    }
    setOrder(1);
  };

  useEffect(() => {
    dispatch(getPullRequests(status, sortingMethod, sortingOrder));
  }, [dispatch, status, sortingMethod, sortingOrder]);

  const statusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const sortingMethodHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortingMethod(e.target.value);
  };
  return (
    <>
      <select name="statuses" id="statuses" onChange={statusHandler}>
        {statuses.map((status) => (
          <option value={status}>{status}</option>
        ))}
      </select>
      <select
        name="sortMethods"
        id="sortMethods"
        onChange={sortingMethodHandler}
      >
        {sortMethods.map((method) => (
          <option value={method}>{method}</option>
        ))}
      </select>
      <button onClick={orderHandler}>
        {sortingOrder === 1 ? "ascending" : "descending"}
      </button>
    </>
  );
};
export default SearchBar;
