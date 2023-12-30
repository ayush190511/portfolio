import React from "react";
import "./home.css";
import pp from "../../assets/pp.jpg";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-title">
        <div className="line">
          <h4 className="line1">Creative Web</h4>
          <h4 className="line2">Designer</h4>
        </div>
        <div className="btn">
          <div className="buttons hireMe">
            <a href="#contact">
              <button>Hire Me</button>
            </a>
          </div>
          <div className="buttons cv">
            <a
              href={require("../../assets/cv.pdf")}
              download="cv.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button>Download CV</button>
            </a>
          </div>
          <div className="buttons space"></div>
        </div>

        <div className="socialLinks">
          <a href="https://www.behance.net/ayush190511">
            <i className="uil uil-behance-alt socialLogo"></i>
          </a>
          <a href="https://github.com/ayush190511">
            <i className="uil uil-github-alt socialLogo"></i>
          </a>
          <a href="http://www.instagram.com/ayush190511">
            <i className="uil uil-instagram socialLogo"></i>
          </a>
          <a href="https://twitter.com/AyushMi190511">
            <i className="uil uil-twitter-alt socialLogo"></i>
          </a>
          <a href="https://www.linkedin.com/in/ayush190511/">
            <i className="uil uil-linkedin-alt socialLogo"></i>
          </a>
        </div>
      </div>

      <div className="image">
        <img src={pp} alt="" />
      </div>
    </div>
  );
};

export default Home;
