import React, { Component, Fragment } from "react";
import { Jumbotron } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <header class="page-banner">Flambeau Cabin</header>
        <Jumbotron className="home">
          <div class="container">
            <h1 class="woodbadge">Our Cabin on the Flambeau</h1>
            <p>Welcome to our cabin!</p>
          </div>
        </Jumbotron>
        <div class="container">
          <h3>The Jipson Cabin on the Flambeau</h3>
          <p>Welcome to our cabin!</p>
          <h3>Skunk Frank Poem</h3>
          <p>
            The Flambeau twist and turns we say,
            <br />
            Through forest lands along its way.
            <br />
            Its ripples produce a brilliant spray.
            <br /> This squatter camped along the shore, A fellow filled with
            logging lore For many years has kept the score, Of all who floated
            by his door. The scenic wonders at his stand, Would make you,
            exclaim ain’t it grand? Yet how he loved to shake your hand, This
            Hermit of the Flambeau Land Frank lost a leg, yet on a wooden peg,
            He could put all other guides to shade And never did you walk or
            wade, For he could POLE just any grade The beverage found behind
            Frank’s door, Would make you sleep hours twenty-four And make you
            dream as well as snore, Of Musky, Pike, and Flambeau Lore. His
            camping place on that Flambeau shore, At Beaver Dam, that folks all
            did adore Has lost some of that friendly score, For Hermit Frank is
            there no more. This character, this well-known guide, With a big
            heart, and a black bear hide Could ride the Rapids at high tied, To
            watch him made you thrill inside The memory of “SKUNK FRANK” folks
            now accklaim, For to Beaver Dam Rapids he added fame Yet the thrills
            and spills are not the same, Without the Flambeau Hermit—Skunk Frank
            the name
          </p>
        </div>
      </Fragment>
    );
  }
}

export default Home;
