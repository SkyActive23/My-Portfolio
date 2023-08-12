import React from "react";
import "./Projects.css";

const ProjectFull = ({
  title,
  description,
  imageUrl,
  technologies,
  demoUrl,
  sourceUrl,
}) => {
  return (
    <div className="pf-project">
      <h2>{title}</h2>
      <hr />
      <img src={imageUrl} alt={title} />
      <hr />
      <h3>Description:</h3>
      <p>{description}</p>
      <h3>Technologies:</h3>
      <div className="tech">{technologies}</div>
      <div>
        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
          Demo Site
        </a>
        <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectFull;
