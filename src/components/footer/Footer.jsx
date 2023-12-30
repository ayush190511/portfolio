import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h1 className="footer-title">
          <div className="red">Red</div>
          <div className="devil">Devil</div>
        </h1>

        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer-link">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="footer-link">
              Contact Me
            </a>
          </li>
        </ul>

        <div className="footer-social">
          <a
            href="http://www.instagram.com/ayush190511"
            className="home-social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-instagram-alt footer-social-link"></i>
          </a>
          <a
            href="http://www.github.com/ayush190511"
            className="home-social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github footer-social-link"></i>
          </a>
          <a
            href="http://www.behance.com/ayush190511"
            className="home-social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-behance footer-social-link"></i>
          </a>
          <a
            href="http://www.twitter.com/ayush190511"
            className="home-social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-twitter footer-social-link"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
