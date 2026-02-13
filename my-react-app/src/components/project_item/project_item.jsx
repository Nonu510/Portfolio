import React from 'react';
import './project_item.scss';

const ProjectItem = ({ iconSrc, iconAlt, title, description }) => {
  return (
    <div className="project-item">
      <img
        src={iconSrc.src}
        srcSet={`${iconSrc.src400} 400w, ${iconSrc.src} 768w`}
        sizes="(max-width: 600px) 90vw, 404px"
        alt={iconAlt}
        className="project-icon"
        loading="lazy"
        decoding="async"
      />
      <h3 className="project-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectItem;