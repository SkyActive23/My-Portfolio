import React from "react";
import "./Projects.css";

const ProjectMinimal = ({ title, imageUrl }) => {
  return (
    <div className="pm-project">
      <h3>{title}</h3>
      <hr />
      <img src={imageUrl} alt={title} />
      <hr />
    </div>
  );
};

export default ProjectMinimal;
