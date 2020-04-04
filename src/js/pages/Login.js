import React, { Component } from "react";
import events from "events";
// import ajax from "./ajax";
import { Container, Row, Col, Button } from "react-bootstrap";
import NodeList from "../components/DrupalComponents/NodeList";
import NodeForm from "../components/DrupalComponents/NodeForm";

// Create an emitter object so that we can do pub/sub
const emitter = new events.EventEmitter();

export default class Login extends Component {
  state = {
    name: "",
    password: "",
    csrf: "",
    mode: "login"
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
    fetch(
      "http://admin.flambeaucabin.com/user/login?_format=json",
      requestOptions
    )
      .then(response => response.text())
      .then(result =>
        this.setState({ mode: "list", csrf: JSON.parse(result).csrf_token })
      )
      .catch(error => console.log("error", error));
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  _handleEdit = (nid = null) => {
    if (nid) {
      alert(nid);
      return <NodeForm />;
    } else {
      alert(nid);
      return <NodeForm />;
    }
  };

  formFactory = () => {
    return (
      <Container className="login-form">
        <h4>{this.state.csrf}</h4>
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
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                value="agalligani"
              />
              <br />
              <label type="password" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                // value="CowFlop#1234"
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
  };

  render() {
    return this.formFactory();
  }
}
