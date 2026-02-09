import React from 'react';
import './skills_item.scss';

const SkillsItem = ({ iconSrc, iconAlt, title }) => {
  return (
    <div className="skills-item">
      <img src={iconSrc} alt={iconAlt} className="skills-icon" />
      <h3 className="skills-item-title">{title}</h3>
    </div>
  );
};

export default SkillsItem;