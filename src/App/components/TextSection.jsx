import React, { Component } from "react";
import styles from "../App.less";

export default class TextSection extends Component {
  render() {
    const { title, text } = this.props;

    return (
      <section className="section" >
        <h5 className="section-title"> { title } </h5>
        <p className="section-text"> { text } </p>
        <div className="section-content"></div>
      </section>
    );
  }
}