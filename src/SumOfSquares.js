import React from "react";

function SumOfSquares() {
  const num1 = 3; // First number
  const num2 = 4; // Second number
  const sumOfSquares = num1 * num1 + num2 * num2;

  return (
    <p>
      The sum of squares of {num1} and {num2} is {sumOfSquares}.
    </p>
  );
}

export default SumOfSquares;
