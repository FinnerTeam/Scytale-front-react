import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPullRequests } from "../../redux/pullReq/actions";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Dropdown from "../UI/Dropdown";

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
interface Props {
  page: number;
}

const SearchBar: React.FC<Props> = (props: Props) => {
  const { page } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const statuses = ["Draft", "Open", "Closed"];
  const sortMethods = ["Title", "Creation"];
  const [status, setStatus] = useState("all");
  const [label, setLabel] = useState("all");
  const [sortingMethod, setSortingMethod] = useState("Creation");
  const [sortingOrder, setOrder] = useState<1 | -1>(-1);
  const labels = useSelector((state: state) => state.pullRequests.labels);
  const orderHandler = () => {
    if (sortingOrder === 1) {
      return setOrder(-1);
    }
    setOrder(1);
  };

  useEffect(() => {
    dispatch(
      getPullRequests({ status, sortingMethod, sortingOrder, label, page })
    );
  }, [dispatch, status, sortingMethod, sortingOrder, label, page]);

  const statusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const sortingMethodHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "Creation") {
      return setSortingMethod("_id");
    }
    setSortingMethod(e.target.value);
  };
  const labelHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLabel(e.target.value);
  };

  return (
    <>
      <Dropdown
        stateHandler={statusHandler}
        value={"statuses"}
        title={"Status"}
        array={statuses}
        style={classes.root}
      />
      <Dropdown
        stateHandler={sortingMethodHandler}
        value={"sortMethods"}
        title={"Sort By"}
        array={sortMethods}
        style={classes.root}
      />
      <Dropdown
        stateHandler={labelHandler}
        value={"labels"}
        title={"Label"}
        array={labels}
        style={classes.root}
      />
      <button
        onClick={orderHandler}
        className={clsx(classes.button, classes.root)}
      >
        {sortingOrder === 1 ? "Ascending" : "Descending"}
      </button>
    </>
  );
};
export default SearchBar;
