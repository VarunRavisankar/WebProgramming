import React from "react";
const Child = ({ message }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <p>
        Message from Parent: <strong>{message}</strong>
      </p>
    </div>
  );
};
export default Child;

/* Q10
import React from 'react';
import PropTypes from 'prop-types';
const Child = ({ message }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Message from Parent: <strong>{message}</strong></p>
    </div>
  );
};
Child.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Child;

*/
