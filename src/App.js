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
    const createStateUpdaterOnEvent = this.createStateUpdaterOnEvent
    let updateFirstName = createStateUpdaterOnEvent('firstName')

    return (
      <div className="app">
        <Header />
        <PersonalInformationInput updateFirstName={updateFirstName} />
        <FinalCV firstName={this.state.firstName} />
      </div>
    );
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
