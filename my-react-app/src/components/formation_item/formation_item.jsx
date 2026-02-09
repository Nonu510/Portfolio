import React from 'react';
import './formation_item.scss';

const FormationItem = ({ iconSrc, iconAlt, title, description }) => {
  return (
    <div className="formation-item">
      <img src={iconSrc} alt={iconAlt} className="formation-icon" />
      <h3 className="formation-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FormationItem;