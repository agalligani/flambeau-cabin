import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Contact from "./pages/Contact";
import MainNav from "./components/MainNav";
import About from "./pages/About";
import History from "./pages/History";
import Users from "./components/Users";
import Family from "./pages/Family";
import Home from "./pages/Home";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faBars
} from "@fortawesome/free-solid-svg-icons";

// import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// library.add(fab, faCheckSquare, faCoffee);
library.add(faCheckSquare, faCoffee, faBars);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MainNav></MainNav>
          <Route path="/home" render={() => <div>Home</div>} />
          <div>
            <Switch>
              <Route path="/about">
                <RenderAbout />
              </Route>
              <Route path="/users">
                <RenderUsers />
              </Route>
              <Route path="/contact">
                {() => {
                  return <Contact />;
                }}
              </Route>
              <Route path="/history">
                {() => {
                  return <History />;
                }}
              </Route>
              <Route path="/family">
                <RenderFamily />
              </Route>
              <Route path="/">
                <RenderHome />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

function RenderHome() {
  return <Home />;
}

function RenderAbout() {
  return <About />;
}

function RenderHistory() {
  return <About />;
}

function RenderUsers() {
  return <Users />;
}

function RenderFamily() {
  return <Family />;
}

function RenderContact() {
  return <Contact />;
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
