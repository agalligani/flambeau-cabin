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
                <h1 class="woodbadge">Our Cabin on the Flambeau</h1>
                <p>
                  <div class="orange-banner-italic">Come explore or relax!</div>
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
        <div class="container">
          <header>
            <h3>The Jipson Cabin on the Flambeau</h3>

            <p>Welcome to our cabin!</p>
          </header>
          <main></main>
        </div>
      </Fragment>
    );
  }
}

export default Home;
