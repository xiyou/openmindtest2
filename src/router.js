import React from "react";
import { Router, Route, Switch } from "dva/router";

import App from "./routes/App/App";
import Product from "./routes/Product";
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/home" component={App} />
        <Route path="/product" component={Product} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
