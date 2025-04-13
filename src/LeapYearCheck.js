import React, { Component } from "react";
class LeapYearCheck extends Component {
  render() {
    const year = 2024;
    const isLeapYear = (year) => {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    };

    return (
      <div>
        <h2>Leap Year Checker</h2>
        <p>
          The year {year} is{" "}
          {isLeapYear(year) ? "a leap year" : "not a leap year"}.
        </p>
      </div>
    );
  }
}
export default LeapYearCheck;
