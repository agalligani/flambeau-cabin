import React, { Component, Fragment } from "react";
import { Jumbotron } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron className="home">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="woodbadge dark-brown banner">
                  Our Cabin on the Flambeau
                </div>
                <div className="orange-banner-italic">
                  Come explore or relax!
                </div>
              </div>
            </div>
          </div>
        </Jumbotron>
        <div className="container">
          <header>
            <h1 className="dark-brown">The Jipson Cabin on the Flambeau</h1>
            <p>Welcome to our cabin!</p>
          </header>
          <main></main>
        </div>
      </Fragment>
    );
  }
}

export default Home;
