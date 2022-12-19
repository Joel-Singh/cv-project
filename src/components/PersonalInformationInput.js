import React, { Component } from "react";

export default class PersonalInformationInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { setFirstName } = this.props;
    return (
      <div className="card">
        <input onInput={ setFirstName } placeholder="First Name" type="text" />
        <input placeholder="Last Name" type="text" />
        <input placeholder="Title" type="text" />
        <input placeholder="Address" type="text" />
        <input placeholder="Phone Number" type="number" />
        <input placeholder="Email" type="text" />
        <input placeholder="Description" type="text" />
      </div>
    );
  }
}
