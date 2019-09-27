import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

// layout
import MainLayout from "./layouts/Main";

// views
import App from "./views/App";

// Assets
import "./styles/App.css";
import "./styles/tailwind.min.css";

// ServiceWorker
import * as serviceWorker from "./serviceWorker";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </MainLayout>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
