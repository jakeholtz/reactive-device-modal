import React, { Component } from "react";
import TextSection from "./TextSection.jsx";
import SubmissionOptions from "./SubmissionOptions.jsx";
import Input from "./Input.jsx";
import Dropdown from "./Dropdown.jsx";
import Radio from "./Radio.jsx";

export default class DeviceModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* User Submitted Data */
      organizationEmail: null,
      userNotifications: null,
      deviceIdentification: null
    }
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(property, value) {
    const stateUpdates = {};
    stateUpdates[property] = value;
    this.setState( stateUpdates );
  }

  render() {
    const { title, isOpen, closeModal } = this.props;

    return (
      <div className={ `modal ${ isOpen ? 'open' : 'closed' }` }>

        <h2> { title } </h2>
        <div className="close-modal-x" onClick={ closeModal }>&#10005;</div>

        {/* Organization Administrator's Email Address */}
        <TextSection name="organizationEmail" title="Organization Administrator's Email Address"
                     text="This email is for end users to generate problem reports within the Cisco
                     Security Connector app and send these reports to the administrator." />
        <Input name="organizationEmail" type="email" placeholder="email"
              updateInput={this.updateInput} />

        {/* User Notifications */}
        <TextSection name="userNotifications"
                     title="User Notifications"
                     text="Adjust level of notifications shown to users on their device." />
        <Radio name="userNotifications" options={['None', 'Notify On Protection Failure', 'Notify On Protection Change']}
              updateInput={this.updateInput} />

        {/* Device Identification */}
        <TextSection name="deviceIdentification" title="Device Identification"
                     text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                     tempor incicidunt ut labore et dolore magna aliqua." />
        <Dropdown name="deviceIdentification" options={['Full Identification', 'By Serial Number Only']}
              updateInput={this.updateInput} />
        
        <SubmissionOptions name="modalSubmission" confirmationText="Save"
                           cancellatonText="Cancel" exitModal={ closeModal } />
        <div> { this.state.organizationEmail } </div>
        <div> { this.state.userNotifications } </div>
        <div> { this.state.deviceIdentification } </div>

      </div>
    );
  }
}