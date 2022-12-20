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

    const personalInformationUpdaters = createPersonalInformationStateUpdaters();

    return (
      <div className="app">
        <Header />
        <PersonalInformationInput updaters={personalInformationUpdaters} />
        <FinalCV firstName={this.state.firstName} />
      </div>
    );

    function createPersonalInformationStateUpdaters() {
      const updaters = {}
      updaters.updateFirstName   = createStateUpdaterOnEvent('firstName')
      updaters.updateLastName    = createStateUpdaterOnEvent('lastName')
      updaters.updateTitle       = createStateUpdaterOnEvent('title')
      updaters.updateAddress     = createStateUpdaterOnEvent('address')
      updaters.updatePhoneNumber = createStateUpdaterOnEvent('phoneNumber')
      updaters.updateEmail       = createStateUpdaterOnEvent('email')
      updaters.updateDescription = createStateUpdaterOnEvent('description')
      return updaters
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
