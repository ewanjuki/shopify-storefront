import { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router";
import { useSelector } from "react-redux";

import Connect from "./pages/Connect";
import Collections from "./pages/Collections";
import Layout from "./components/Layout/Layout";

function App() {
  const shop = useSelector((state) => state.shop.shop);

  return (
    <Fragment>
      {!shop && <Redirect to="/connect" />}
      <Route path="/connect">
        <Connect />
      </Route>
      {shop && (
        <Layout>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/collections' />
            </Route>
            <Route path="/collections" exact>
              <Collections />
            </Route>
          </Switch>
        </Layout>
      )}
    </Fragment>
  );
}

export default App;
