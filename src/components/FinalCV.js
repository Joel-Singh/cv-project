import React, { Component } from "react";

export default class FinalCV extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      firstName,
      lastName,
      title,
      address,
      phoneNumber,
      email,
      description,
    } = this.props.information;

    return (
      <div className="final-CV">
        <div className="personal-information">
          <div>{firstName}</div>
          <div>{lastName}</div>
          <div>{title}</div>
          <div>{address}</div>
          <div>{phoneNumber}</div>
          <div>{email}</div>
          <div>{description}</div>
        </div>
      </div>
    );
  }
}
