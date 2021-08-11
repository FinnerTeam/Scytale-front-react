import Layout from "./components/Layout/Layout";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import DashBoard from "./pages/Dashboard";

function App() {
  return (
    <Layout>
      <Router>
        <Suspense fallback={<div></div>}>
          <Switch>
            <Route path="*" exact component={DashBoard} />
          </Switch>
        </Suspense>
      </Router>
    </Layout>
  );
}

export default App;
