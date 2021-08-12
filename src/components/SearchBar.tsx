import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const [label, setLabel] = useState("All");
  const [sortingMethod, setSortingMethod] = useState("Creation");
  const [sortingOrder, setOrder] = useState<1 | -1>(1);
  const labels = useSelector((state: state) => state.pullRequests.labels);
  const orderHandler = () => {
    if (sortingOrder === 1) {
      return setOrder(-1);
    }
    setOrder(1);
  };

  useEffect(() => {
    dispatch(getPullRequests(status, sortingMethod, sortingOrder, label));
  }, [dispatch, status, sortingMethod, sortingOrder, label]);

  const statusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const sortingMethodHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortingMethod(e.target.value);
  };
  const labelHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLabel(e.target.value);
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
      <select
        name="labels"
        id="labels"
        onChange={labelHandler}
        className={clsx(classes.select, classes.root)}
      >
        <option value={"All"}>All</option>
        {labels.length > 0 &&
          labels.map((label) => <option value={label}>{label}</option>)}
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
