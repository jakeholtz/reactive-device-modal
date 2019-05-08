import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
    this.props.updateUserSubmittedData(this.props.name, event.target.value);
  }

  render() {
    const { type, options } = this.props;

    if (options) {
      return (
        <form>
          { options.map((option, index) => { 
            return (
              <div key={index} className="radio-option">
                <input type= { type } value={option} onChange={this.handleChange} />
                <label htmlFor={index} >{ option }</label>
              </div>
            );
          })
        }
        </form>
      )
    } else {
      return (
        <form>
          <input type={type} onChange={this.handleChange} value={this.state.inputValue} />
        </form>   
      );
    }

  }
}