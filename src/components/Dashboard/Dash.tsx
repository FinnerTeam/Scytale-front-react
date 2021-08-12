import { useSelector } from "react-redux";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  message: {
    marginTop: "80px",
  },
});

const Dashboard: React.FC = () => {
  const classes = useStyles();
  const prs = useSelector((state: state) => state.pullRequests);
  let message;

  if (!prs.isLoading && !prs.isError && prs.prs.length === 0)
    message = "No relevant pull requests to show.";

  if (!prs.isLoading && prs.errorMessage.length > 0) message = prs.errorMessage;

  if (prs.isLoading) message = "loading...";

  return (
    <div className={classes.root}>
      <h1>Pull Request Dashboard</h1>
      <SearchBar />
      {!prs.isLoading && prs.prs.length > 0 && !prs.isError && (
        <>
          {prs.prs.map((pullRequest: pullRequest) => (
            <Card
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
      <h4 className={classes.message}>{message}</h4>
    </div>
  );
};

export default Dashboard;