import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from "./components/Modal.jsx";
import PropTypes from 'prop-types';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading : true,
      isModalOpen: true
    };

    this.propTypes = { waitBeforeShow: PropTypes.number.isRequired };
    this.toggleModal = this.toggleModal.bind(this);
  }
  
  toggleModal() {
    let { isModalOpen } = this.state;
    console.log('a');
    this.setState({ isModalOpen: !isModalOpen });
  }

  componentDidMount() {
    setTimeout(() => {
       this.setState({ loading: false });
    }, this.props.waitBeforeShow);
  }

  render() {
    if (this.state.loading) return '';
    
    return (
      <div>
        <Modal
          name="modalDeviceSettings"
          title="Modal Device Settings"
          isOpen={ this.state.isModalOpen } />
          
        <h1>Click To Open Modal</h1>
        <button onClick={ this.toggleModal }>Click Here</button>
      </div>
    );
  }
}

ReactDOM.render(<App waitBeforeShow={500} />, document.getElementById('app'));