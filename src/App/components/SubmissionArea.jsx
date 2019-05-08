import React, { Component } from "react";

class SubmissionArea extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      confirmationText = 'Confirm',
      cancellatonText = 'Cancel;' } = this.props;

    return (
      <div className="submission-area">
        <button>{ confirmationText }</button>
        <button>{ cancellatonText }</button>
      </div>
    );
  }
}

export default SubmissionArea;