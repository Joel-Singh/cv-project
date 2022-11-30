import React, { Component } from "react";
import GeneralInformation from "./components/GeneralInformation";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
        <GeneralInformation />
      </div>);
  }
}
