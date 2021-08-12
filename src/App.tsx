import Layout from "./components/Layout/Layout";
import { Route } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
const App: React.FC = () => {
  return (
    <Layout>
      <Route path="*" component={DashBoard} />
    </Layout>
  );
};

export default App;
