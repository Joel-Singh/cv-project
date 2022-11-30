import React, { Component } from "react";

export default class GeneralInformation extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <input placeholder="Name" type="text" />
        <input placeholder="Email" type="text" />
        <input placeholder="Phone Number" type="number" />
      </div>
    )
  }
}
