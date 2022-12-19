import React, { Component } from "react";
import PersonalInformation from "./components/PersonalInformation";
import Header from './components/Header'
import './style.css'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="app">
        <Header />
        <PersonalInformation />
      </div>);
  }
}
