import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";


// layout
import MainLayout from "./layouts/Main";

// views
import Header from "./components/Header";
import App from "./views/App";

// Assets
import "./styles/tailwind.min.css";
import "./styles/App.css";
import './styles/index.css';

// ServiceWorker
import * as serviceWorker from "./serviceWorker";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/App" component={App} />
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
