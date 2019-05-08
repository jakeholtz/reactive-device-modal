import React, { Component } from "react";

export default class SubmissionOptions extends Component {
  render() {
    const {
      confirmationText = 'Confirm',
      cancellatonText = 'Cancel;',
      exitModal
    } = this.props;

    return (
      <div className="submission-container">
        <button className="white-button" onClick={ exitModal } >{ cancellatonText }</button>
        <button className="blue-button">{ confirmationText }</button>
      </div>
    );
  }
}