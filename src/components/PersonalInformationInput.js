import React, { Component } from "react";

export default class PersonalInformationInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      updateFirstName,
      updateLastName,
      updateTitle,
      updateAddress,
      updatePhoneNumber,
      updateEmail,
      updateDescription,
    } = this.props.updaters;
    return (
      <div className="card">
        <input onInput={ updateFirstName } placeholder="First Name" type="text" />
        <input onInput={updateLastName} placeholder="Last Name" type="text" />
        <input onInput={updateTitle} placeholder="Title" type="text" />
        <input onInput={updateAddress} placeholder="Address" type="text" />
        <input onInput={updatePhoneNumber} placeholder="Phone Number" type="number" />
        <input onInput={updateEmail} placeholder="Email" type="text" />
        <input onInput={updateDescription} placeholder="Description" type="text" />
      </div>
    );
  }
}
