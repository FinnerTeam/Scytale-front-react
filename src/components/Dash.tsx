import { useSelector } from "react-redux";
import Card from "./Card";
import SearchBar from "./SearchBar";

const Dashboard = () => {
  const pullRequests = useSelector((state: any) => state.pullRequests);
  return (
    <div>
      dashboard
      <SearchBar />
      {pullRequests.map((pullRequest: any) => (
        <Card
          title={pullRequest.title}
          status={pullRequest.status}
          description={pullRequest.description}
          author={pullRequest.author}
          labels={pullRequest.labels}
          createdAt={pullRequest.createdAt}
        />
      ))}
    </div>
  );
};

export default Dashboard;
