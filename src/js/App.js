import React, { Component } from "react";
import ReactDOM from "react-dom";
import MainNav from "./components/MainNav";
import About from "./components/About";
import Family from "./pages/Family";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Users from "./components/Users";
// import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
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
            <Route path="/family">
              <RenderFamily />
            </Route>
            <Route path="/">
              <RenderHome />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function RenderHome() {
  return <Home />;
}

function RenderAbout() {
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
