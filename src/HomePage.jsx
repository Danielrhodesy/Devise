
  
import React, { Component } from "react";
import Nav from "./components/Nav"
import Findproject from "./components/Findproject"
import Spotlight from "./components/Spotlight"
import Ourstory from "./components/Ourstory"
import Portfolio from "./components/Portfolio"
import Support from "./components/Support"
import Contact from "./components/Contact"


class HomePage extends Component {
  render() {
    return (
      <>
        <Nav/>
        <Findproject/>
        <Spotlight/>
        <Ourstory/>
        <Portfolio/>
        <Support/>
        <Contact/>
      </>
    );
  }
}
export default (HomePage);