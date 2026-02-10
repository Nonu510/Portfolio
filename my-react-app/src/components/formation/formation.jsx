import React from 'react';
import FormationItem from '../formation_item/formation_item.jsx';
import './formation.scss';
import online from '../../assets/formationlogo/headset.svg';
import école from '../../assets/formationlogo/bus.svg';

const Formation = () => {
  const formationData = [
    {
      iconSrc: online,
      iconAlt: "Online Icon",
      title: "Intégrateur Web",
      description: "OpenClassrooms (online)"
    },
    {
      iconSrc: école,
      iconAlt: "école Icon",
      title: "BTS électrotechnique",
      description: "Lycée Jules Verne, Ifs"
    },
    {
      iconSrc: école,
      iconAlt: "école Icon",
      title: "Baccalauréat scientifique",
      description: "Lycée Jean Rostand, Caen"
    },
  ];

  return (
    <section className="formation-grid">
      {formationData.map((formation, index) => (
        <FormationItem
          key={index}
          iconSrc={formation.iconSrc}
          iconAlt={formation.iconAlt}
          title={formation.title}
          description={formation.description}
        />
      ))}
    </section>
  );
};

export default Formation;
