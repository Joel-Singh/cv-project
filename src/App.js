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
    return (
      <div className="app">
        <Header />
        <PersonalInformationInput setFirstName={this.setFirstName} />
        <FinalCV firstName={this.state.firstName} />
      </div>
    );
  }

  setFirstName = event => {
    let newFirstName = event.target.value;
    this.setState({
      firstName: newFirstName,
    });
  }
}
