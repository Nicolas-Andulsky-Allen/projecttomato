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
import NBarSocialLinks from "./nBarSocialLinks";
import NBarBreadCrumbs from "./nBarBreadCrumbs";
import "./fontawesome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Tomato</NavbarBrand>
          </div>
          <NBarBreadCrumbs />
          <NBarSocialLinks />
        </Navbar>
      </div>
    );
  }
}

export default App;
