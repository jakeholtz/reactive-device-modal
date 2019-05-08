import React, { Component } from "react";
import Section from "./Section.jsx";
import SubmissionArea from "./SubmissionArea.jsx";

class Modal extends Component {
  constructor() {
    super();
  }

  render() {
    const { title, isOpen } = this.props;

    console.log(this)

    const sectionsText = [
      `This email is for end users to generate problem reports within the Cisco Security Connector app and send these reports to the administrator.`,
      `Adjust level of notifications shown to users on their device.`, 
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incicidunt ut labore et dolore magna aliqua.`, 
    ];

    return (
      <div className={ `modal ${ isOpen ? 'open' : 'closed' }` }>

        <h1> { title } </h1>

        <Section
          name="organizationEmail"
          title="Organization Administrator's Email Address"
          text={ sectionsText[0] } />

        <Section
          name="userNotifications"
          title="User Notifications"
          text={ sectionsText[1] } />

        <Section
          name="deviceIdentification"
          title="DeviceIdentification"
          text={ sectionsText[2] } />
          
        <SubmissionArea
          name="modalSubmission"
          confirmationText="Save"
          cancellatonText="Cancel" />

      </div>
    );
  }
}

export default Modal;