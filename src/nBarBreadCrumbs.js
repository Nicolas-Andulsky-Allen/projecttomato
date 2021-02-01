import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faInfo,
  faList,
  faShip,
  faThumbsUp,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

class NBarBreadCrumbs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <a className="navbar-brand" href="tomatoHome.html">
          <img
            src="public/cruiseLogo.png"
            height="90"
            width="75"
            alt="Cyprus Culinary Cruises company logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#tomatoNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="tomatoNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="tomatoHome.html">
                <i>
                  <FontAwesomeIcon icon={faHome} />
                </i>
                {"Home"}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="tomatoAboutUs.html">
                <i>
                  <FontAwesomeIcon icon={faInfo} />
                </i>
                {"About"}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="tomatoShip.html">
                <i>
                  {" "}
                  <FontAwesomeIcon icon={faShip} />
                </i>
                {"Ship"}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="tomatoItinerary.html">
                <i>
                  <FontAwesomeIcon icon={faList} />
                </i>
                {"Itinerary"}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="tomatoTestimonials.html">
                <i>
                  <FontAwesomeIcon icon={faThumbsUp} />
                </i>
                {"Testimonials"}
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#tomatoContactForm">
                <i>
                  <FontAwesomeIcon icon={faAddressCard} />
                </i>
                {"Contact"}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NBarBreadCrumbs;
