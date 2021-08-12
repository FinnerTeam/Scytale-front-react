import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPullRequests } from "../redux/pullRequests";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    borderRadius: "5px",
    margin: "5px",
    "&:hover": {
      backgroundColor: "var(--color-blue)",
      color: "white",
      cursor: "pointer",
    },
  },
  select: {
    padding: 3,
  },
  button: {
    border: "1px solid grey",
    padding: 4,
  },
});

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

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
      <select
        name="statuses"
        id="statuses"
        onChange={statusHandler}
        className={clsx(classes.select, classes.root)}
      >
        {statuses.map((status) => (
          <option value={status}>{status}</option>
        ))}
      </select>
      <select
        name="sortMethods"
        id="sortMethods"
        onChange={sortingMethodHandler}
        className={clsx(classes.select, classes.root)}
      >
        {sortMethods.map((method) => (
          <option value={method}>{method}</option>
        ))}
      </select>
      <button
        onClick={orderHandler}
        className={clsx(classes.button, classes.root)}
      >
        {sortingOrder === 1 ? "ascending" : "descending"}
      </button>
    </>
  );
};
export default SearchBar;
