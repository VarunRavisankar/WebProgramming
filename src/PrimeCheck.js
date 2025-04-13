import React, { useState } from "react";

function PrimeCheck() {
  const [number, setNumber] = useState(7); // Default number
  const [isPrime, setIsPrime] = useState(null);
  const checkPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < Math.sqrt(num) + 1; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  React.useEffect(() => {
    setIsPrime(checkPrime(number));
  }, [number]);

  return (
    <div>
      <h2>Prime Number Check</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        placeholder="Enter a number"
      />
      <p>
        {isPrime === null
          ? "Please enter a number to check."
          : isPrime
          ? `${number} is a prime number.`
          : `${number} is not a prime number.`}
      </p>
    </div>
  );
}

export default PrimeCheck;
