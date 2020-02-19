import React, { Component } from "react";
import {
  Alert,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default class MainNav extends Component {
  render() {
    return (
      <div class="sticky-wrapper">
        <Navbar expand="lg" className={"bg-brown sticky-wrapper"}>
          <Navbar.Brand href="#home">Flambeau Cabin</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FontAwesomeIcon icon="bars" focusable="true" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-links">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/history">
                History
              </Nav.Link>
              <Nav.Link as={Link} to="/family">
                Family
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              <NavDropdown title="Stories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
