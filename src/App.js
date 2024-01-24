import { Fragment } from "react";
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Connect from "./pages/Connect";
import Collections from "./pages/Collections";
import Layout from "./components/Layout/Layout";
import Products from "./pages/Products";
import Product from "./pages/Product";

function App() {
  const shop = useSelector((state) => state.shop.shop);

  console.log(shop);
  return (
    <Fragment>
      {!shop && <Connect />}
      {shop && (
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/collections" />
            </Route>
            <Route path="/collections" exact>
              <Collections />
            </Route>
            <Route path="/collections/:handle">
              <Products />
            </Route>
            <Route path="/products/:handle">
              <Product />
            </Route>
          </Switch>
        </Layout>
      )}
    </Fragment>
  );
}

export default App;
