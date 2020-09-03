import React from "react";
import "./User.css";

const User = ({ firstname, image }) => {
  return (
    <div className="User">
      <img src={image} alt="" />
      <h2>{firstname}</h2>
    </div>
  );
};

export default User;
