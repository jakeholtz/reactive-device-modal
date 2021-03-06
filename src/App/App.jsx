import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DeviceModal from "./components/DeviceModal.jsx";
import PropTypes from 'prop-types';

/* App component functions as modal container. To integrate modal, all 
   data in App needs to be reassigned to modals parent */

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading : true, isModalOpen: false, submissionSuccess: false };
    this.propTypes = { waitBeforeShow: PropTypes.number.isRequired };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
  openModal() {
    this.setState({ isModalOpen: true, submissionSuccess: false });
  }

  closeModal(submissionSuccess) {
    submissionSuccess = submissionSuccess === true ? true : false;
    this.setState({ isModalOpen: false, submissionSuccess});
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
        <DeviceModal
          name="mobileDeviceSettings"
          title="Mobile Device Settings"
          isOpen={ this.state.isModalOpen } 
          closeModal={ this.closeModal } />

        <div className="activate-modal-area">
          <h1>Device Settings</h1>
          
          <button
            onClick={ this.openModal }
            className="blue-button">
            Change
          </button>

          { this.state.submissionSuccess ? <div className="submitted-text">Device Settings Changed!</div> : '' }
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App waitBeforeShow={500} />, document.getElementById('app'));