import React from "react";
import Skyler_Profile from "../../assets/images/About-Header/Skyler_Profile.jpg";
import "./About.css";

const AboutMe = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-image">
          <img src={Skyler_Profile} alt="Skyler" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm Skyler Hollingsworth, a passionate web developer with
            experience in creating user-friendly and responsive websites. I love
            coding and continuously exploring new technologies to improve my
            skills.
          </p>
          {/* Add more about me content here */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
