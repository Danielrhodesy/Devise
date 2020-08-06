import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Nav from "./Nav"
import HomePage from "./HomePage"
import About from "./components/About"
import {AuthProvider} from "jwt-auth-react"; 
import Register from "./components/Register"
import Profile from "./components/Profile"
import Settings from "./components/Settings"
import PostProj from "./components/PostProj"

class Main extends Component {
  render() {
    return (
      <>

        <AuthProvider>
            <Router>
            <Nav/>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/About" component={About} />
                <Route path="/Register" component={Register}/>
                <Route path="/Profile" component={Profile}/>
                <Route path="/Settings" component={Settings}/>
                <Route path="/PostProj" component={PostProj}/>
            </Switch>
        </Router>
        </AuthProvider>
      </>
    );
  }
}
export default (Main);