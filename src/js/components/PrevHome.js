import React, { Component, Fragment } from "react";
// import Navbar from "./Navbar";
// import { Route, NavLink, HashRouter } from "react-router-dom";
import {
  Alert,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Home extends Component {
  state = {
    links: [
      { text: "Home", href: "/home", sublinks: null },
      { text: "About", href: "/about", sublinks: null },
      { text: "Contact", href: "/about", sublinks: null }
    ]
  };

  render() {
    return (
      <Fragment>
        {/* <Navbar links={this.state.links}></Navbar> */}
        <Router>
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
        <div class="container">
          <h3>Basic Navbar Example</h3>
          <p>
            A navigation bar is a navigation header that is placed at the top of
            the page.
          </p>
        </div>
        {[
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark"
        ].map((variant, idx) => (
          <Alert key={idx} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
        ))}
      </Fragment>
    );
  }
}

export default Home;
