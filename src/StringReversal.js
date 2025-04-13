import React, { Component } from "react";
class StringReversal extends Component {
  render() {
    const str = "React";
    const reversedStr = str.split("").reverse().join("");
    const isPalindrome = str === reversedStr;

    return (
      <div>
        <h2>String Reversal and Palindrome Check</h2>
        <p>Original String: {str}</p>
        <p>Reversed String: {reversedStr}</p>
        <p>
          The string is {isPalindrome ? "a palindrome" : "not a palindrome"}.
        </p>
      </div>
    );
  }
}
export default StringReversal;
