import React from "react";

const StyledButton = ({ label, onClick }) => {
  const buttonStyle = {
    backgroundColor: "#4CAF50",
    padding: "10px 20px",
    fontSize: "16px",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};

export default StyledButton;
/*  Q3
import React from 'react';

const StyledButton = ({ label, onClick }) => {
  return (
    <div>
      
      <style>{`
        .styled-btn {
          background-color: #4CAF50;
          padding: 10px 20px;
          font-size: 16px;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .styled-btn:hover {
          background-color: #45a049;
        }
      `}</style>

      <button className="styled-btn" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default StyledButton;
*/
/* Q4
import React from 'react';
import './styles.css'; 

const StyledButton = ({ label, onClick }) => {
  return (
    <button className="styled-btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default StyledButton;
*/
