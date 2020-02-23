import React, { Component, Fragment } from "react";
import { Jumbotron } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron className="home">
          <div class="container">
            <div class="row">
              <div class="col-md-7">
                <div class="woodbadge dark-brown banner">
                  Our Cabin on the Flambeau
                </div>
                <p>
                  <div class="orange-banner-italic">Come explore or relax!</div>
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
        <div class="container">
          <header>
            <h1 class="dark-brown">The Jipson Cabin on the Flambeau</h1>

            <p>Welcome to our cabin!</p>
          </header>
          <main></main>
        </div>
      </Fragment>
    );
  }
}

export default Home;
