import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import events from "events";
import ajax from "../../../axios/axios";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const emitter = new events.EventEmitter();

class NodeList extends Component {
  constructor() {
    super();
    this.state = {
      token: "",
      mode: "",
      nodes: []
    };
    this.refresh = this.refresh.bind(this);
  }

  componentWillUnmount() {
    emitter.removeListener("NODE_UPDATED", this.refresh);
  }

  async componentDidMount() {
    await this.refresh();
    emitter.addListener("NODE_UPDATED", this.refresh);
  }

  async refresh() {
    const historyUrl =
      "http://admin.flambeaucabin.com/articles/history?_format=json";

    try {
      const axios = await ajax(); // wait for an initialized axios object
      const response = await axios.get(historyUrl);
      if (response.data) {
        this.setState({ nodes: response.data });
      }
    } catch (e) {
      alert(e);
    }
  }

  render() {
    const deleteNode = async nid => {
      try {
        const axios = await ajax(); // wait for an initialized axios object
        const response = await axios.delete(`/node/${nid}`); // wait for the DELETE AJAX request to complete
        console.log("Node deleted", response);
        emitter.emit("NODE_UPDATED");
      } catch (e) {
        alert(e);
      }
    };

    return (
      <Fragment>
        <Row>
          <Col className="col col-md-7">Stories</Col>
          <Col className="col col-md-1">
            <FontAwesomeIcon
              icon="plus-square"
              focusable="true"
              onClick={e => addNode()}
            />
          </Col>
        </Row>
        {this.state.nodes.map((node, index) => {
          return (
            <Row key={index}>
              <Col className="col col-md-7">
                <a href={node.path} rel="noopener noreferrer" target="_blank">
                  {node.title}
                </a>
              </Col>
              <Col className="col col-md-3">
                <FontAwesomeIcon
                  icon="edit"
                  focusable="true"
                  onClick={e => editNode(node.nid)}
                />
                <FontAwesomeIcon
                  icon="trash"
                  focusable="true"
                  onClick={e => deleteNode(node.nid)}
                />
              </Col>
            </Row>
          );
        })}
      </Fragment>
    );
  }
}

export default NodeList;
