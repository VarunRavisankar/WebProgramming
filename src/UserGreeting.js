import React, { Component } from "react";
class UserGreeting extends Component {
  render() {
    const { firstName, lastName } = this.props; // Destructure the props
    return (
      <div>
        <h2>
          Hello, {firstName} {lastName}!
        </h2>{" "}
        {/* Display the full name */}
      </div>
    );
  }
}
export default UserGreeting;
