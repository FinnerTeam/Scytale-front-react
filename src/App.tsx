import Layout from "./components/Layout/Layout";
import { Switch, Route } from "react-router-dom";
import { Suspense } from "react";
import DashBoard from "./pages/Dashboard";
const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path="*" component={DashBoard} />
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default App;
