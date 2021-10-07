import { Route, Switch } from "react-router";

import Connect from "./pages/Connect";
import Collections from "./pages/Collections";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Collections />
      </Route>
      <Route path="/connect">
        <Connect />
      </Route>
    </Switch>
  );
}

export default App;
