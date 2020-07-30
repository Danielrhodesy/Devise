import React, { Component } from "react";


class Nav extends Component {
  render() {
    return (
      <>
        <div class="nav-container flex sa">
            <div class="container sb">
              <div class="logo">
              </div>
              <nav class="se ct">
              <div class="nav-item se ct">  
                <p>About</p>
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