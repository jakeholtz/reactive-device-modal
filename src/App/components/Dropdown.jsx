import React, { Component } from "react";

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
    this.handleChange = this.handleChange.bind(this);

    /* Set initial inputValue as first value in options list */
    if (props.options && props.options.length) this.setInitialState.call(this, props.options[0]);
  }

  setInitialState(inputValue) {
    this.state = { inputValue };
    this.props.updateInput(this.props.name, inputValue);
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
    this.props.updateInput(this.props.name, event.target.value);
  }

  render() {
    const { type, options } = this.props;

    return (
      <div className="dropdown-container">
        <select className="dropdown-select" onChange={this.handleChange}>
          { options.map((opt, index) => <option className="dropdown-option" key={index} value={opt}>{opt}</option> ) } 
        </select>
      </div>
    );
  }
}