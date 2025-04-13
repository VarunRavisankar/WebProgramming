import React, { Component } from "react";
class RandomNumberGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: null, // Store the random number
    };
  }
  generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    this.setState({ randomNumber });
  };

  render() {
    return (
      <div>
        <h2>Random Number Generator</h2>
        <button onClick={this.generateRandomNumber}>
          Generate Random Number
        </button>
        {this.state.randomNumber !== null && (
          <p>Random Number: {this.state.randomNumber}</p>
        )}
      </div>
    );
  }
}

export default RandomNumberGenerator;
