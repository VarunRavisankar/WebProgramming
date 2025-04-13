import React from "react";

function CurrentDay() {
  const currentDate = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = daysOfWeek[currentDate.getDay()];

  return <p>Today is {currentDay}.</p>;
}
export default CurrentDay;
