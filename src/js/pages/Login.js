import React, { Component } from "react";
import axios from "axios";
import config from "../../config/config";
import { Container, Row, Col, Button } from "react-bootstrap";

/******************
 **
 *******************/

const data = {
  title: "This is me!",
  body: "hi there!"
};

export default class Login extends Component {
  state = {
    name: "",
    password: ""
  };

  _handleSubmit = async event => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
      name: this.state.name,
      pass: this.state.password
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: body,
      redirect: "follow"
    };
    try {
      let response = await fetch(
        "http://adminflambeau.com/user/login?_format=json",
        requestOptions
      );
      let result = await response.text();
      console.log(result);
    } catch (error) {
      console.log("error", error);
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  // console.log("User name" + this.state.name);
  //   console.log("User email" + this.state.email);
  //   const url = "http://admin.flambeaucabin.com/jsonapi/node/article/";
  //   const data = { name: this.state.name, email: this.state.email };

  render() {
    return (
      <Container className="login-form">
        <Row>
          <Col className="col col-md-1">&nbsp;</Col>
          <Col className="col col-md-10">
            <h1 className="dark-brown">Log in</h1>
          </Col>
          <Col className="col col-md-1">&nbsp;</Col>
        </Row>
        <Row>
          <Col className="col col-md-1">&nbsp;</Col>
          <Col className="col col-md-10">
            <form onSubmit={this._handleSubmit}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" onChange={this.handleChange} />
              <br />
              <label type="password" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
              />
              <br />
              <Button type="submit" value="LOGIN" title="LOGIN">
                Log In
              </Button>
            </form>
          </Col>
          <Col className="col col-md-1">&nbsp;</Col>
        </Row>
      </Container>
    );
  }
}
