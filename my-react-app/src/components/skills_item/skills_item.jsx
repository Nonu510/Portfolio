import React from 'react';
import './skills_item.scss';

const SkillsItem = ({ iconSrc, iconAlt }) => {
  return (
    <div className="skills-item">
      <img 
        src={iconSrc} 
        alt={iconAlt} 
        className="skills-icon"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default SkillsItem;