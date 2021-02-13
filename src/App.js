/*import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import "./nBarSocialLinks.js";
*/

import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import NBarSocialLinks from "./Components/nBarSocialLinks";
import NBarLinks from "./Components/nBarLinks";
import NBar from "./Components/nBar";
import HomeComp from "./Components/homeComp";
import Footer from "./Components/footer";
import "./fontawesome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <NBar />
        <HomeComp />
        <Footer />
      </div>
    );
  }
}

export default App;
/*          <NBarBreadCrumbs />
          <NBarSocialLinks />
          */
