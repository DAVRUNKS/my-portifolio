import React from "react";
import "./FloatingDiv.css";

const FloatingDiv = ({ image, txt1, txt2 }) => {
  return (
    <div className="floatingdiv">
      <img src={image} alt="" />
      <span className="text" style={{ color: "white" }}>
        WEB
        <br />
        DEVELOPER
      </span>
    </div>
  );
};

export default FloatingDiv;

