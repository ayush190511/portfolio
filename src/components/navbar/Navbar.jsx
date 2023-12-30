import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <div className="logo">
            <a href="index.html">
              <h1 className="red">Red</h1>
              <h1 className="devil">Devil</h1>
            </a>
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <a href="#home" className="menu-item">
                <i className="uil uil-estate home-icons"></i>
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className="menu-item">
                <i className="uil uil-books home-icons"></i>
                Skills
              </a>
            </li>
            <li>
              <a href="#about" className="menu-item">
                <i className="uil uil-user-square home-icons"></i>
                About Me
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-item">
                <i className="uil uil-phone home-icons"></i>
                Contact Me
              </a>
            </li>
          </ul>
          <i
            className={
              menuOpen
                ? "open uil uil-times cross home-icons"
                : "uil uil-times cross home-icons"
            }
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          ></i>
          <i
            className={!menuOpen?" uil uil-apps apps home-icons":"close uil uil-apps apps home-icons"}
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          ></i>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
