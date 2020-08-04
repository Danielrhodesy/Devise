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
import Members from "./components/Members"
import Profile from "./components/Profile"
import Settings from "./components/Settings"
import PostProj from "./components/PostProj"

class Main extends Component {
  render() {
    return (
      <>
        <Router>
            <Nav/>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/About" component={About} />
                <Route path="/Members" component={Members}/>
                <Route path="/Profile" components={Profile}/>
                <Route path="/Settings" components={Settings}/>
                <Route path="/PostProj" components={PostProj}/>
            </Switch>
        </Router>
      </>
    );
  }
}
export default (Main);