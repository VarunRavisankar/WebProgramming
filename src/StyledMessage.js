import React from "react";
function StyledMessage() {
  const messageStyle = {
    color: "white",
    backgroundColor: "blue",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
  };

  return <p style={messageStyle}>This is a styled message!</p>;
}
export default StyledMessage;
