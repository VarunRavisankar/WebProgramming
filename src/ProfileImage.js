import React from "react";

const ProfileImage = ({ imageUrl }) => {
  return (
    <img
      src={imageUrl}
      alt="Profile"
      style={{ width: "150px", borderRadius: "50%" }}
    />
  );
};

export default ProfileImage;
