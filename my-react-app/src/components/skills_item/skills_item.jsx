import React from 'react';
import './skills_item.scss';

const SkillsItem = ({ iconSrc, iconAlt }) => {
  return (
    <div className="skills-item">
      <img src={iconSrc} alt={iconAlt} className="skills-icon" />
    </div>
  );
};

export default SkillsItem;