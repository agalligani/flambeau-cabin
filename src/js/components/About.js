import React, { Component } from "react";

class About extends Component {
  state = {
    links: [
      { text: "Home", href: "/home", sublinks: null },
      { text: "About", href: "/about", sublinks: null },
      { text: "Contact", href: "/about", sublinks: null }
    ]
  };

  render() {
    return (
      <div class="container">
        <h3>Basic About Example</h3>
        <p>
          A navigation bar is a navigation header that is placed at the top of
          the page.
        </p>
      </div>
    );
  }
}

export default About;
