import React, { Component } from "react";
import PersonalInformation from "./components/PersonalInformation";
import Header from './components/Header'
import './style.css'
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
    }
    this.setFirstName = this.setFirstName.bind(this)
  }

  setFirstName(event) {
    let newFirstName = event.target.value
    this.setState({
      firstName: newFirstName,
    })
  }

  render() {
    return (<div className="app">
        <Header />
        <PersonalInformation setFirstName={this.setFirstName} />
        <FinalCV firstName={this.state.firstName} />
      </div>);
  }
}
