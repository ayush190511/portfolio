import React from "react";

const Info = () => {
  return (
    <div className="about-info grid">
      <div className="about-box">
        <i class="uil uil-nerd about-icon"></i>
        <h3 className="about-title">Experience</h3>
        <span className="about-sub-info">3 years of working</span>
      </div>

      <div className="about-box">
        <i class="uil uil-suitcase about-icon"></i>
        <h3 className="about-title">Completed</h3>
        <span className="about-sub-info">15+ projects</span>
      </div>

      <div className="about-box">
        <i class="uil uil-headphones-alt about-icon"></i>
        <h3 className="about-title">Support</h3>
        <span className="about-sub-info">24/7 Online</span>
      </div>
    </div>
  );
};

export default Info;
