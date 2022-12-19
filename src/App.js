import React, { Component } from "react";
import PersonalInformation from "./components/PersonalInformation";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
        <PersonalInformation />
      </div>);
  }
}
