import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "./PullReq";
import SearchBar from "./SearchBar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  message: {
    marginTop: "80px",
  },
  button: {
    margin: "0px 10px 20px 10px",
    backgroundColor: "var(--color-blue)",
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "var(--color-blue)",
      border: "2px solid var(--color-blue)",
      fontWeight: "bold",
    },
  },
});

const Dashboard: React.FC = () => {
  const classes = useStyles();
  const prs = useSelector((state: state) => state.pullRequests);
  const [page, setPage] = useState(1);

  const pageHandler = (direction: "next" | "prev") => {
    if (direction === "next") {
      return setPage((ps) => ps + 1);
    }
    setPage((ps) => ps - 1);
  };

  let message;

  if (!prs.isLoading && !prs.isError && prs.prs.length === 0)
    message = "No relevant pull requests to show.";

  if (!prs.isLoading && prs.errorMessage.length > 0) message = prs.errorMessage;

  if (prs.isLoading) message = "loading...";

  return (
    <div className={classes.root}>
      <h1>Pull Request Dashboard</h1>
      <SearchBar page={page} />
      {!prs.isLoading && prs.prs.length > 0 && !prs.isError && (
        <>
          {prs.prs.map((pullRequest: pullRequest) => (
            <Card
              key={pullRequest._id}
              title={pullRequest.title}
              status={pullRequest.status}
              description={pullRequest.description}
              author={pullRequest.author}
              labels={pullRequest.labels}
              createdAt={pullRequest.createdAt}
            />
          ))}
        </>
      )}
      {!message && (
        <>
          {" "}
          <Button
            disabled={!prs.hasPreviousPage}
            onClick={() => pageHandler("prev")}
            className={classes.button}
          >
            Back
          </Button>
          <Button
            disabled={!prs.hasNextPage}
            onClick={() => pageHandler("next")}
            className={classes.button}
          >
            next
          </Button>
        </>
      )}
      <h4 className={classes.message}>{message}</h4>
    </div>
  );
};

export default Dashboard;
