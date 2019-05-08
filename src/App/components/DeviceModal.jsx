import React, { Component } from "react";
import TextSection from "./TextSection.jsx";
import SubmissionOptions from "./SubmissionOptions.jsx";
import Form from "./Form.jsx";

export default class DeviceModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* User Submitted Data */
      organizationEmail: null,
      userNotifications: null,
      deviceIdentification: null
    }
    this.updateUserSubmittedData = this.updateUserSubmittedData.bind(this);
  }

  updateUserSubmittedData(property, value) {
    const stateUpdates = {};
    stateUpdates[property] = value;
    this.setState( stateUpdates );
  }

  render() {
    const { title, isOpen, closeModal } = this.props;

    /* Form Radio Options */
    const formatOptions = {
      userNotifications: ['None', 'Notify On Protection Failure', 'Notify On Protection Change']
    };

    return (
      <div className={ `modal ${ isOpen ? 'open' : 'closed' }` }>

        <h2> { title } </h2>

        <div className="close-modal-x" onClick={ closeModal }>&#10005;</div>

        <TextSection name="organizationEmail" title="Organization Administrator's Email Address"
                     text="This email is for end users to generate problem reports within the Cisco
                     Security Connector app and send these reports to the administrator." />
        <Form name="organizationEmail" type="email" placeholder="email"
              updateUserSubmittedData={this.updateUserSubmittedData} />

        <TextSection name="userNotifications"
                     title="User Notifications"
                     text="Adjust level of notifications shown to users on their device." />
        <Form name="userNotifications" type="radio" options={formatOptions.userNotifications}
              value={formatOptions.userNotifications[0]} />

        <TextSection name="deviceIdentification" title="Device Identification"
                     text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                     tempor incicidunt ut labore et dolore magna aliqua." />
        
        <SubmissionOptions name="modalSubmission" confirmationText="Save"
                           cancellatonText="Cancel" exitModal={ closeModal } />

      </div>
    );
  }
}