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
    const createStateSetter = this.createStateSetter
    let setFirstName = createStateSetter('firstName')

    return (
      <div className="app">
        <Header />
        <PersonalInformationInput setFirstName={setFirstName} />
        <FinalCV firstName={this.state.firstName} />
      </div>
    );
  }

  createStateSetter = (nameOfStateVariable) => {
    return event => {
      let newState = event.target.value;
      this.setState({
        [nameOfStateVariable]: newState
      })
    }
  }
}
