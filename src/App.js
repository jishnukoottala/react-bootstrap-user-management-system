import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import Components from "./components/Components";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/components">
            <Components />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
