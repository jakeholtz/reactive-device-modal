import React, { Component } from "react";

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.handleClick = this.handleClick.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);

    /* Set initial inputValue as first value in options list */
    if (props.options && props.options.length) this.setInitialState.call(this, props.options[0]);
  }

  toggleDropdown() {
    const { isOpen } = this.state;
    this.setState({isOpen: !isOpen});
  }

  setInitialState(inputValue) {
    const { isOpen } = this.state; 
    this.state = { inputValue, isOpen };
    this.props.updateInput(this.props.name, inputValue);
  }

  handleClick(inputValue) {
    this.setState({inputValue});
    this.props.updateInput(this.props.name, inputValue);
  }

  render() {
    const { options } = this.props;

    return (
    <div className="dropdown" onClick={this.toggleDropdown}>
      <div className="dropdown-select dropdown-trigger">
        <span>{ this.state.inputValue }</span>
        {  this.state.isOpen ?
           <span className="up-arrow">&#x25B4;</span> :
           <span className="down-arrow">&#x25BE;</span>
        }
      </div>
      { this.state.isOpen ? 
          (<div className="dropdown-content">
            { options.map((opt, index) => <div className={`dropdown-item ${opt === this.state.inputValue ? 'selected-item' : ''}`}
                                               onClick={() => this.handleClick(opt)} key={index}>{opt}
                                            <span className="dropdown-check">&#10003;</span>
                                          </div> ) }  
          </div>) : ''
      }
    </div>
    );
  }
}