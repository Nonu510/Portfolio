import React from 'react';
import ProjectItem from '../project_item/project_item.jsx';
import './project.scss';
import events from '../../assets/724events.png';
import Booki from '../../assets/Booki.png';
import argentbank from '../../assets/argentbank.png';
import Kasa from '../../assets/Kasa.png';
import ninacarducci from '../../assets/ninacarducci.png';
import Ohmy from '../../assets/Ohmyfood.png';
import Print from '../../assets/printit.png';
import Qwenta from '../../assets/qwenta.png';
import Sophie from '../../assets/sophiebluel.png';

const Project = () => {
  const projectData = [
    {
      iconSrc: events,
      iconAlt: "724events Icon",
      title: "724events",
      description: "Projet de debugg d'une page web pour une agence d'évenmentiel"
    },
    {
      iconSrc: Booki,
      iconAlt: "Booki Icon",
      title: "Booki",
      description: "Création à partir d'HTML et CSS d'une page de réservation d'hotel et de location de vacances"
    },
    {
      iconSrc: Kasa,
      iconAlt: "Kasa Icon",
      title: "Kasa",
      description: "Création d'une application web de location immobilière avec React."
    },
    {
      iconSrc: argentbank,
      iconAlt: "ArgentBank Icon",
      title: "Argent Bank",
      description: "Implémentation du Front-end d'une application bancaire avec React et Redux pour la gestion de l'état global de l'application"
    },
    {
      iconSrc: ninacarducci,
      iconAlt: "Nina Carducci Icon",
      title: "Nina Carducci",
      description: "Optimisation du référencement du portfolio de Nina Carducci, photographe et designer."
    },
    {
      iconSrc: Ohmy,
      iconAlt: "Oh My Food Icon",
      title: "Oh My Food",
      description: "Amélioration del'interface d'un site mobile avec des animations CSS"
    },
    {
      iconSrc: Print,
      iconAlt: "Print It Icon",
      title: "Print It",
      description: "Modification du code HTML et implémentation d'un carrousel avec JavaScript pour une page de service d'impression en ligne"
    },
    {
      iconSrc: Qwenta,
      iconAlt: "Qwenta Icon",
      title: "Qwenta",
      description: "Our innovative platform offers a seamless experience for all your printing needs."
    },
    {
      iconSrc: Sophie,
      iconAlt: "Sophie Bluel Icon",
      title: "Sophie Bluel",
      description: "Création d'un portfolio avec Javascript, à partir d'une version HTML et CSS."
    },
  ];

  return (
    <section className="projects-grid">
      {projectData.map((feature, index) => (
        <ProjectItem
          key={index}
          iconSrc={feature.iconSrc}
          iconAlt={feature.iconAlt}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
};

export default Project;
