import { useSelector } from "react-redux";
import Card from "./Card";
import SearchBar from "./SearchBar";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    margin: "0",
  },
  logo: {
    height: 60,
    width: 60,
  },
  message: {
    marginTop: "80px",
  },
});

const Dashboard: React.FC = () => {
  const classes = useStyles();
  const prs = useSelector((state: state) => state.pullRequests);
  let message;

  if (!prs.isLoading && !prs.isError && prs.data.length === 0)
    message = "No relevant pull requests to show.";

  if (!prs.isLoading && prs.errorMessage.length > 0) message = prs.errorMessage;

  if (prs.isLoading) message = "loading...";

  return (
    <div className={classes.root}>
      <h1>Pull Request Dashboard</h1>
      <SearchBar />
      {!prs.isLoading && prs.data.length > 0 && (
        <>
          {prs.data.map((pullRequest: pullRequest) => (
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
