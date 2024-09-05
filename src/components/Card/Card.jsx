import React from "react";
import "./Card.css";
import { Link } from "react-scroll/modules";

const Card = ({ emoji, heading, detail }) => {
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <Link spy={true} to="footer" smooth={true}>
          <button className="button i-button"> LEARN</button>
        </Link>
    </div>
  );
};

export default Card;
