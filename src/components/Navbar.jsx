import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import Toggle from "./Toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Function to scroll to the top of the page
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuItemClick = () => {
    setShowDropdown(false); // Hide dropdown when a menu item is clicked
  };

  return (
    <>
      <div className="n-wrapper">
        <div className="n-left">
          <div
            className="n-name"
            onClick={() => {
              scrollToTop();
              setShowDropdown(false);
            }}
          >
                 <Link
                spy={true}
                to="Home"
                smooth={true}
                activeClass="activeClass"
                onClick={handleMenuItemClick}
              >
                DEV
              </Link>
          </div>
          <Toggle />
        </div>
        <div className="n-right">
          <div className="n-list" ref={dropdownRef}>
            <button
              className="nav-btn"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {showDropdown ? "Close" : "Nav"}
            </button>
            <ul className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
              <Link
                spy={true}
                to="Home"
                smooth={true}
                activeClass="activeClass"
                onClick={handleMenuItemClick}
              >
                <li>Home</li>
              </Link>
              <Link
                spy={true}
                to="Services"
                smooth={true}
                onClick={handleMenuItemClick}
              >
                <li>Services</li>
              </Link>
              <Link
                spy={true}
                to="Experience"
                smooth={true}
                onClick={handleMenuItemClick}
              >
                <li>Experience</li>
              </Link>
              <Link
                spy={true}
                to="Portfolio"
                smooth={true}
                onClick={handleMenuItemClick}
              >
                <li>Portfolio</li>
              </Link>
              <Link
                spy={true}
                to="Testimonials"
                smooth={true}
                onClick={handleMenuItemClick}
              >
                <li>Testimonials</li>
              </Link>
            </ul>
          </div>
          <Link spy={true} to="footer" smooth={true}>
            <button className="button">Contact</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
