import React from 'react';
import './project_item.scss';

const ProjectItem = ({ iconSrc, iconAlt, title, description, useOptimized = false }) => {
  // Support for both imported images and optimized paths
  const imageSrc = useOptimized ? iconSrc : iconSrc;
  
  // If using optimized images with string names
  if (useOptimized && typeof iconSrc === 'string') {
    return (
      <div className="project-item">
        <picture>
          <source srcSet={`/Portfolio/src/assets/optimized/${iconSrc}.webp`} type="image/webp" />
          <img 
            src={`/Portfolio/src/assets/optimized/${iconSrc}.png`} 
            alt={iconAlt} 
            className="project-icon"
            loading="lazy"
          />
        </picture>
        <h3 className="project-item-title">{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
  
  // Original approach with imported images
  return (
    <div className="project-item">
      <img src={imageSrc} alt={iconAlt} className="project-icon" loading="lazy" />
      <h3 className="project-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectItem;