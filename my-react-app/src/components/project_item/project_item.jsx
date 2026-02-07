import React from 'react';
import './project_item.scss';

const ProjectItem = ({ iconSrc, iconAlt, title, description }) => {
  return (
    <div className="project-item">
      <img src={iconSrc} alt={iconAlt} className="project-icon" />
      <h3 className="project-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectItem;