import React, { Component } from "react";

export default class PersonalInformation extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <input placeholder="First Name" type="text" />
        <input placeholder="Last Name" type="text" />
        <input placeholder="Title" type="text" />
        <input placeholder="Address" type="text" />
        <input placeholder="Phone Number" type="number" />
        <input placeholder="Email" type="text" />
        <input placeholder="Description" type="text" />
      </div>
    )
  }
}
