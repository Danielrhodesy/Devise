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
import {AuthProvider} from "jwt-auth-react";
npm 

class Main extends Component {
  render() {
    return (
      <>
        <AuthProvider>
            <Router>
                <Nav/>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path='/About' component={About} />
                </Switch>
            </Router>
        </AuthProvider>
      </>
    );
  }
}
export default (Main);