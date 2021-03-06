import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
    this.props.updateInput(this.props.name, event.target.value);
  }

  render() {
    const { name, type, placeholder, attemptedSubmit } = this.props;
    const { inputValue } = this.state;

    return (
        <form className="form-container">
          <input className={`form-input ${attemptedSubmit ? 'form-attempted' : ''}`}
                 name={name}
                 type={type}
                 placeholder={placeholder}
                 value={this.state.inputValue}
                 onChange={this.handleChange} />
        </form>
      );
  }
}