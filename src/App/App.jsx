import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormContainer from "./components/container/FormContainer.jsx";
import styles from "./styles.less";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <FormContainer styles={styles} />;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
