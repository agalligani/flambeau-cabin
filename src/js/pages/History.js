import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import parse from "html-react-parser";

export default class History extends Component {
  state = {
    isLoading: true,
    err: {},
    data: []
  };

  async componentDidMount() {
    const response = await fetch(
      "http://admin.flambeaucabin.com/jsonapi/node/article/"
    );
    // const jsonData = await response.json();
    const jsonData = await response.json();
    console.log(jsonData.data);
    this.setState({ data: jsonData.data, isLoading: false });
  }

  renderArticles = _ => {
    if (this.state.isLoading) {
      return <h1>Loading</h1>;
    } else {
      let n = this.state.data.map((article, i) => {
        return (
          <Fragment key={i}>
            <h1>{article.attributes.title}</h1>
            <h3>{article.attributes.created}</h3>
            <h2>{article.attributes.summary}</h2>
            <div>{parse(article.attributes.body.processed)}</div>
          </Fragment>
        );
      });
      return n;
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1 className="banner">Cabin History</h1>
            <div>{this.renderArticles()}</div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    );
  }
}
