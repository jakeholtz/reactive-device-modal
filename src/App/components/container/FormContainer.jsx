import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = { inputText: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { inputText } = this.state;
    return (
      <form id="article-form">
        <Input
          text="Input Text"
          label="inputText"
          type="text"
          id="inputText"
          value={inputText}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
  
}

// const wrapper = document.getElementById("create-article-form");
// wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

export default FormContainer;