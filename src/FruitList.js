import React from "react";
function FruitList() {
  const fruits = ["Apple", "Banana", "Cherry"]; // Array of fruits
  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li> // Dynamically rendering list
        ))}
      </ul>
    </div>
  );
}
export default FruitList;
