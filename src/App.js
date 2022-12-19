import React, { Component } from "react";
import PersonalInformationInput from "./components/PersonalInformationInput";
import Header from "./components/Header";
import "./style.css";
import FinalCV from "./components/FinalCV";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "foo",
      lastName: "",
      title: "",
      address: "",
      phoneNumber: "",
      email: "",
      description: "",
    };
  }

  render() {
    const createStateUpdaterOnEvent = this.createStateUpdaterOnEvent;

    const personalInformationInput = createPersonalInformationInputWithUpdaters();

    return (
      <div className="app">
        <Header />
        {personalInformationInput}
        <FinalCV firstName={this.state.firstName} />
      </div>
    );

    function createPersonalInformationInputWithUpdaters() {
      const updateFirstName   = createStateUpdaterOnEvent('firstName')
      const updateLastName    = createStateUpdaterOnEvent('lastName')
      const updateTitle       = createStateUpdaterOnEvent('title')
      const updateAddress     = createStateUpdaterOnEvent('address')
      const updatePhoneNumber = createStateUpdaterOnEvent('phoneNumber')
      const updateEmail       = createStateUpdaterOnEvent('email')
      const updateDescription = createStateUpdaterOnEvent('description')

      return <PersonalInformationInput
        updateFirstName={updateFirstName}
        updateLastName={updateLastName}
        updateTitle={updateTitle}
        updateAddress={updateAddress}
        updatePhoneNumber={updatePhoneNumber}
        updateEmail={updateEmail}
        updateDescription={updateDescription}
      />
    }
  }

  createStateUpdaterOnEvent = (nameOfStateVariable) => {
    return event => {
      let newState = event.target.value;
      this.setState({
        [nameOfStateVariable]: newState
      })
    }
  }
}
