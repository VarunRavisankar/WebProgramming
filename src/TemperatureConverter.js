import React, { Component } from "react";
class TemperatureConverter extends Component {
  render() {
    const celsius = 25; // Fixed Celsius temperature
    const fahrenheit = (celsius * 9) / 5 + 32; // Convert Celsius to Fahrenheit
    return (
      <div>
        <h2>Temperature Converter</h2>
        <p>
          {celsius}°C is equal to {fahrenheit}°F
        </p>
      </div>
    );
  }
}

export default TemperatureConverter;
