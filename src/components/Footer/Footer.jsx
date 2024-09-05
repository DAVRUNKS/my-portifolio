import React, { useState, useEffect } from "react";
import "./Footer.css";
// import Wave from "../../img/wave.png";

import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="content-wrapper">
      <div className="footer">
        {/* <img src={Wave} alt="wave" className="wave-img" /> */}
        <div className="f-content">
          <a href="mailto:davrunksvirgiflips@gmail.com" className="email-button">
            <FaEnvelope color="blue" size="2rem" className="icon email" />
          </a>
          <div className="f-icons">
            {/* Twitter link */}
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter color="black" size="2rem" className="icon twitter" />
            </a>

            {/* LinkedIn link */}
            <a
              href="https://linkedin.com/in/davrunks-a-3466a4255"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin color="blue" size="2rem" className="icon linkedin" />
            </a>

            {/* Github link */}
            <a
              href="https://github.com/DAVRUNKS?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github color="black" size="2rem" className="icon github" />
            </a>
          </div>
          <div className="designed-by">
            <h1 className="de">Designed by Davrunks</h1>
            <br />
            | {dateTime.toLocaleTimeString()} on {dateTime.toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
