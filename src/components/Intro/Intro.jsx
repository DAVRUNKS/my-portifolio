import React, { useState, useEffect, useContext } from "react";
import "./Intro.css";

import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";

import FloatingDiv from "../Floating/Floating";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const names = ["Developer", "Davis"];
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const currentName = names[currentNameIndex];

  useEffect(() => {
    if (isTyping && typingIndex < currentName.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prevText) => prevText + currentName.charAt(typingIndex));
        setTypingIndex(typingIndex + 1);
      }, 150);

      return () => clearTimeout(typingTimeout);
    } else if (!isTyping && typingIndex > 0) {
      const erasingTimeout = setTimeout(() => {
        setDisplayedText((prevText) => prevText.slice(0, -1));
        setTypingIndex(typingIndex - 1);
      }, 100);

      return () => clearTimeout(erasingTimeout);
    } else if (isTyping && typingIndex === currentName.length) {
      const typingPause = setTimeout(() => {
        setIsTyping(false);
      }, 2000);

      return () => clearTimeout(typingPause);
    } else if (!isTyping && typingIndex === 0) {
      const erasingPause = setTimeout(() => {
        setIsTyping(true);
        setCurrentNameIndex((prevIndex) => (prevIndex + 1) % names.length);
      }, 500);

      return () => clearTimeout(erasingPause);
    }
  }, [isTyping, typingIndex, currentName, names.length]);

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "lightgrey" : "" }}> Hy! I Am </span>
          <span> {displayedText} </span>
          <div style={{ color: darkMode ? "grey" : "" }}>
            <h5>
              Software Engineer with high level of experience <br />
              in web and app designing and development, producing <br />
              quality work
            </h5>
          </div>
        </div>

        <Link spy={true} to="footer" smooth={true}>
          <button className="button i-button"> Hire me </button>
        </Link>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" style={{ width: "890px" }} />
        <img src={boy} alt="" className="boy" />
        <span className="arrow">arrow</span>

        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
        >
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>

        {/* blur divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "15rem",
            width: "21rem",
            height: "10rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
