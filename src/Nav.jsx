import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Nav extends Component {
  render() {
    return (
      <>
          <div class="nav-container flex sa">
            <div class="container sb">
              <div class="logo">
              </div>
            <nav class="sb ct">
              <div class="nav-item se ct">  
                <Link to="/About"><p>About</p></Link>
              </div>
              <div class="nav-item se ct">
                <p>Filter</p>  
              </div>
              <div class="nav-item se ct">  
                <p>Search</p>
              </div>
              <div class="nav-item se ct profile"> 
                <p>P</p> 
              </div>
              <div class="nav-item se ct"> 
                <p>setting</p>
              </div>
              <div class="nav-item post-proj se ct">
                <p>Post Project</p>  
              </div>
            </nav>
            </div>   
          </div>
      </>
    );
  }
}

export default (Nav)