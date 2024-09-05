import  { useContext } from "react";
import { Link } from "react-router-dom";
import { themeContext } from "../../Context"; // Adjust import path as necessary

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services">
      {/* Left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span style={{ color: darkMode ? "grey" : "" }}>
          Davrunks is a programmer with all the needed skills in Web Designing
          <br />
          Software engineer with skills in REACT.js, CSS, HTML, JAVASCRIPT
          <br />
          MONGODB, NODE JS, PYTHON, MYSQL
          <br />
          BOOTSTRAP, CARBON-DESIGN, PHOTOSHOP UI/UX DESIGN.
        </span>

        <Link to="/PdfViewer" aria-label="View CV">
          <button className="button s-button">View CV</button>
        </Link>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* Right side */}
      <div className="cards">
        {/* Card components go here */}
      </div>
    </div>
  );
};

export default Services;


