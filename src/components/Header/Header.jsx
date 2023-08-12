// Header.js
import React from "react";
import projectsData from "../../Data/ProjectData.jsx";
import "./Header.css";
// import Sunset from "../assets/images/Az.jpg";

const Header = () => {
  const totalProjects = projectsData.length;

  return (
    <header className="header">
      <div className="header-content">
        <h1>Skyler Hollingsworth</h1>
        <p>Welcome to My Portfolio</p>
        <p>
          There are <strong>{totalProjects} Projects</strong> to enjoy!
        </p>
      </div>
    </header>
  );
};

export default Header;
