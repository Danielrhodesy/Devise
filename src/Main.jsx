import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from "./Nav"
import HomePage from "./HomePage"
import About from "./components/About"


class Main extends Component {
  render() {
    return (
      <>
        <Router>
            <Nav/>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path='/About' component={About} />
            </Switch>
        </Router>
      </>
    );
  }
}
export default (Main);