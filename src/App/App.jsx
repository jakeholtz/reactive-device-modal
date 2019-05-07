import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormContainer from "./components/container/FormContainer.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <FormContainer />;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
