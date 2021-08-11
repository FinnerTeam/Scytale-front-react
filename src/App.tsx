import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "./components/Layout/Layout";
import { Switch, Route } from "react-router-dom";
import { Suspense } from "react";
import DashBoard from "./pages/Dashboard";
import { getPullRequests } from "./store/pullRequests";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPullRequests());
  }, [dispatch]);

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
