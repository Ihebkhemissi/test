import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <img className="logo" src="images/logo.png" alt="" />
          <div className="links">
            <span className="icon">
              <span />
              <span />
              <span />
            </span>
            <ul>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#course">Course</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
