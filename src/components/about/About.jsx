import React from 'react';
import "./about.css";
import AboutImg from "../../assets/pp.jpg";
import CV from "../../assets/cv.pdf";
import Info from './Info';

const About = () => {
  return (
    <div className='about' id='about'>
      <h1 className='about_title'>About Me</h1>
      <p className='about-subtitle'>My Introduction</p>

      <div className="about-container grid">
        <img src={AboutImg} alt="" className='about-img'/>
        <div className="about-data">
          <Info/>
          <p className="about-description">
            Frontend developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.
          </p>

          <a download ="" href={CV} className="button button-flex">
          <button>Download CV <i class="uil uil-diary"></i></button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
