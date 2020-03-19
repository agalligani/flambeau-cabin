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
  //   state = {
  //     name: "",
  //     email: "",
  //     url: "http://admin.flambeaucabin.com/jsonapi/node/article/"
  //   };

  _handleSubmit = async event => {
    event.preventDefault();
    const response = await fetch(
      "http://adminflambeau.com/user/login?_format=json",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        data: JSON.stringify({
          user: "agalligani",
          pass: "CowFlop#1234"
        }),
        params: { _format: "json" }
      }
    );
    console.log(response);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   console.log("User name" + this.state.name);
  //   console.log("User email" + this.state.email);
  //   const url = "http://admin.flambeaucabin.com/jsonapi/node/article/";
  //   const data = { name: this.state.name, email: this.state.email };

  render() {
    return (
      <Container className="contact-form">
        <Row>
          <Col className="col col-md-1">&nbsp;</Col>
          <Col className="col col-md-10">
            <h1 className="dark-brown">Article</h1>
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
              <input type="text" name="password" onChange={this.handleChange} />
              <textarea
                cols="70"
                rows="13"
                onChange={this.handleChange}
                name="body"
              ></textarea>
              <br />
              <Button type="submit" value="Add Article" title="Add Article">
                Add Article
              </Button>
            </form>
          </Col>
          <Col className="col col-md-1">&nbsp;</Col>
        </Row>
      </Container>
    );
  }
}
