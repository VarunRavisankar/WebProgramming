import React from "react";
import srcImage from "./Images/logo512.png"; // Importing an image from the src/Images folder

const DisplayImages = () => {
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/logo192.png`}
        alt="Public Folder Image"
      />

      <img src={srcImage} alt="Src Folder Image" />
    </div>
  );
};

export default DisplayImages;
