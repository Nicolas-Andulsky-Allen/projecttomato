import React, { Component } from "react";

import AboutUs from "./aboutUs";
import Footer from "./footer";
import HomeComp from "./homeComp";
import NBar from "./nBar";
import Itinerary from "./itinerary";
import Testimonials from "./testimonials";
import ContactEmpty from "./contact";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Ship from "./ship";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStatetoProps = (state) => {
  return {
    weatherData: state.weatherData,
  };
};

class Main extends Component {
  render() {
    const ItinPage = () => {
      return <Itinerary weatherData={this.props.weatherData} />;
    };
    return (
      <div>
        {" "}
        <NBar />
        <TransitionGroup>
          <CSSTransition
            key="this.props.location.key"
            classNames="page"
            timeout={300}
          >
            <Switch>
              <Route path="/home" component={HomeComp} />
              <Route path="/aboutus" component={AboutUs} />
              <Route path="/ship" component={Ship} />
              <Route path="/itinerary" component={ItinPage} />
              <Route path="/testimonials" component={Testimonials} />
              <Route path="/contact" component={ContactEmpty} />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps)(Main));
