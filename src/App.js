import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { useRouterHistory } from "react-router";
// import { createBrowserHistory } from "history";

import styled from "styled-components";

const H2 = styled.h2`
  font-size: 1.5em;
  color: red;
  padding: 0.5em;
  border: 1px solid red;
`;

export default function BasicExample() {
  return (
    <Router basename="hotjar">
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <H2>Home???</H2>
    </div>
  );
}

function About() {
  return (
    <div>
      <H2>About??</H2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <H2>Dashboard?</H2>
    </div>
  );
}
