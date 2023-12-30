import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <div id="skills">
      <h1 className="headtag">SKILLS</h1>
      <h3 className="subheading">My Technincal Levels</h3>
      <div className="cards">
        <div className="gd card">
          <h2>Graphic Design</h2>
          <div className="content">
            <p1><i className="uil uil-award"></i><p>Photoshop <span className="level"><span className="sublevel80"></span></span> </p></p1>
            <p1><i className="uil uil-award"></i><p>Illustrator <span className="level"><span className="sublevel90"></span></span> </p></p1>
            <p1><i className="uil uil-award"></i><p>AfterEffects <span className="level"><span className="sublevel60"></span></span> </p></p1>
            <p1><i className="uil uil-award"></i><p>Figma <span className="level"><span className="sublevel80"></span></span> </p></p1>
            <p1><i className="uil uil-award"></i><p>Canva <span className="level"><span className="sublevel90"></span></span> </p></p1>
            <p1><i className="uil uil-award"></i><p>Krita <span className="level"><span className="sublevel80"></span></span> </p></p1>
          </div>
        </div>
        <div className="fd card">
          <h2>Frontend Development</h2>
          <div className="content">
            <p1><i className="uil uil-award"></i><p>HTML <span className="level"><span className="sublevel80"></span></span> </p></p1>
            <p1><i className="uil uil-award"></i><p>CSS <span className="level"><span className="sublevel90"></span></span> </p></p1>
            <p1><i className="uil uil-award"></i><p>JavaScript <span className="level"><span className="sublevel60"></span></span> </p></p1>
            <p1><i className="uil uil-award"></i><p>React.js <span className="level"><span className="sublevel80"></span></span> </p></p1>
            <p1><i className="uil uil-award"></i><p>Bootstrap <span className="level"><span className="sublevel80"></span></span> </p></p1>
            <p1><i className="uil uil-award"></i><p>Git <span className="level"><span className="sublevel60"></span></span> </p></p1>
          </div>
        </div>
        <div className=" bd card">
          <h2>Backend Development</h2>
          <div className="content">
            <p1><i className="uil uil-award"></i><p>Python <span className="level"><span className="sublevel90"></span></span> </p></p1>
            <p1><i className="uil uil-award"></i><p>PHP <span className="level"><span className="sublevel60"></span></span> </p></p1>
            <p1><i className="uil uil-award"></i><p>NodeJs <span className="level"><span className="sublevel60"></span></span> </p></p1>
            <p1><i className="uil uil-award"></i><p>MySQL <span className="level"><span className="sublevel80"></span></span> </p></p1>
            <p1><i className="uil uil-award"></i><p>Firebase <span className="level"><span className="sublevel60"></span></span> </p></p1>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
