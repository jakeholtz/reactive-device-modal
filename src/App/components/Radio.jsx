import React, { Component } from "react";

export default class Radio extends Component {
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
    const { options } = this.props;

    return (
      <form className="form-radio-container" >
        <div className="radio-container">
          {
            options.map((option, index) => {
              const identifier = `${this.props.name}${index + 1}`;
              return (
                <div className="radio-option" key={identifier} >
                  <input className="radio-input" name={this.props.name} type="radio" value={option}
                         checked={this.state.inputValue ? this.state.inputValue === option : !index}
                         onChange={ this.handleChange } />
                  <label className="radio-label" htmlFor={identifier}>{option}</label>
                </div>
              );
            })
          }
        </div>
      </form>
    );
  }
}