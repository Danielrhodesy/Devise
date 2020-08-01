
  
import React, { Component } from "react";
import Nav from "./components/Nav"

class HomePage extends Component {
  render() {
    return (
      <>
        <Nav/>
        <HomePage/>
      </>
    );
  }
}
export default (HomePage);