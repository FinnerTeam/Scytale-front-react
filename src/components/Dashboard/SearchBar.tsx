import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPullRequests } from "../../redux/pullReq/actions";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Dropdown from "../UI/Dropdown";
import Label from "./Label";
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
  wrap: {
    display: "flex",
    justifyContent: "center",
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
  const sortMethods = ["Title", "Created At"];
  const [status, setStatus] = useState("all");
  const [label, setLabel] = useState("all");
  const [sortingMethod, setSortingMethod] = useState("_id");
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
  const labelHandler = (label: string) => {
    if (!label) {
      return setLabel("all");
    }
    setLabel(label);
  };

  return (
    <div className={classes.wrap}>
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
      <button
        onClick={orderHandler}
        className={clsx(classes.button, classes.root)}
      >
        {sortingOrder === 1 ? "Ascending" : "Descending"}
      </button>
      <Label labels={labels} stateHandler={labelHandler} />
      {/* <span> {label}</span> */}
    </div>
  );
};
export default SearchBar;
