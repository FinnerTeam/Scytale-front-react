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
interface state {
  pullRequests: pullRequest[];
}

const Dashboard: React.FC = () => {
  const classes = useStyles();
  const pullRequests = useSelector((state: state) => state.pullRequests);
  return (
    <div className={classes.root}>
      <h1>Pull Request Dashboard</h1>
      <SearchBar />
      {pullRequests.map((pullRequest: pullRequest) => (
        <Card
          title={pullRequest.title}
          status={pullRequest.status}
          description={pullRequest.description}
          author={pullRequest.author}
          labels={pullRequest.labels}
          createdAt={pullRequest.createdAt}
        />
      ))}
      {pullRequests.length === 0 && (
        <h4 className={classes.message}>No relevant pull requests to show.</h4>
      )}
    </div>
  );
};

export default Dashboard;
