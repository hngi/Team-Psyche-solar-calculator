import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

// views
import App from "./views/App";

// Assets
// import "./assets/css/reset.css";
// import "./assets/css/tachyons.min.css";
// import "./assets/css/App.css";
import "./assets/css/sixpath.css";

// ServiceWorker
import * as serviceWorker from "./serviceWorker";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
