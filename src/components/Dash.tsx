import Card from "./Card";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const pullRequests = useSelector((state: any) => state.pullRequests);
  return (
    <div>
      dashboard
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
